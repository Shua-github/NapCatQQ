import winston, { format, transports } from 'winston';
import { truncateString } from '@/common/helper';
import path from 'node:path';
import chalk from 'chalk';
import { AtType, ChatType, ElementType, MessageElement, RawMessage, SelfInfo } from '@/core';

export enum LogLevel {
    DEBUG = 'debug',
    INFO = 'info',
    WARN = 'warn',
    ERROR = 'error',
    FATAL = 'fatal',
}

function getFormattedTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
    return `${year}-${month}-${day}_${hours}-${minutes}-${seconds}.${milliseconds}`;
}

export class LogWrapper {
    fileLogEnabled = true;
    consoleLogEnabled = true;
    logger: winston.Logger;

    constructor(logDir: string) {
        const filename = `${getFormattedTimestamp()}.log`;
        const logPath = path.join(logDir, filename);

        this.logger = winston.createLogger({
            level: 'debug',
            format: format.combine(
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.printf(({ timestamp, level, message, ...meta }) => {
                    const userInfo = meta.userInfo ? `${meta.userInfo} | ` : '';
                    return `${timestamp} [${level}] ${userInfo}${message}`;
                })
            ),
            transports: [
                new transports.File({ filename: logPath, level: 'debug' }),
                new transports.Console({
                    format: format.combine(
                        format.colorize(),
                        format.printf(({ timestamp, level, message, ...meta }) => {
                            const userInfo = meta.userInfo ? `${chalk.magenta(meta.userInfo)} | ` : '';
                            return `${timestamp} [${level}] ${userInfo}${message}`;
                        })
                    )
                })
            ]
        });

        this.setLogSelfInfo({ nick: '', uin: '', uid: '' });
    }

    setFileAndConsoleLogLevel(fileLogLevel: LogLevel, consoleLogLevel: LogLevel) {
        this.logger.transports.forEach((transport) => {
            if (transport instanceof transports.File) {
                transport.level = fileLogLevel;
            } else if (transport instanceof transports.Console) {
                transport.level = consoleLogLevel;
            }
        });
    }

    setLogSelfInfo(selfInfo: { nick: string, uin: string, uid: string }) {
        const userInfo = `${selfInfo.nick}(${selfInfo.uin})`;
        this.logger.defaultMeta = { userInfo };
    }

    setFileLogEnabled(isEnabled: boolean) {
        this.fileLogEnabled = isEnabled;
        this.logger.transports.forEach((transport) => {
            if (transport instanceof transports.File) {
                transport.silent = !isEnabled;
            }
        });
    }

    setConsoleLogEnabled(isEnabled: boolean) {
        this.consoleLogEnabled = isEnabled;
        this.logger.transports.forEach((transport) => {
            if (transport instanceof transports.Console) {
                transport.silent = !isEnabled;
            }
        });
    }

    formatMsg(msg: any[]) {
        let logMsg = '';
        for (const msgItem of msg) {
            if (msgItem instanceof Error) {
                logMsg += msgItem.stack + ' ';
                continue;
            } else if (typeof msgItem === 'object') {
                const obj = JSON.parse(JSON.stringify(msgItem, null, 2));
                logMsg += JSON.stringify(truncateString(obj)) + ' ';
                continue;
            }
            logMsg += msgItem + ' ';
        }
        return logMsg;
    }

    _log(level: LogLevel, ...args: any[]) {
        const message = this.formatMsg(args);
        if (this.consoleLogEnabled) {
            this.logger.log(level, message);
        }
        if (this.fileLogEnabled) {
            this.logger.log(level, message.replace(/\x1B[@-_][0-?]*[ -/]*[@-~]/g, ''));
        }
    }

    log(...args: any[]) {
        this._log(LogLevel.INFO, ...args);
    }

    logDebug(...args: any[]) {
        this._log(LogLevel.DEBUG, ...args);
    }

    logError(...args: any[]) {
        this._log(LogLevel.ERROR, ...args);
    }

    logWarn(...args: any[]) {
        this._log(LogLevel.WARN, ...args);
    }

    logFatal(...args: any[]) {
        this._log(LogLevel.FATAL, ...args);
    }

    logMessage(msg: RawMessage, selfInfo: SelfInfo) {
        const isSelfSent = msg.senderUin === selfInfo.uin;

        if (msg.elements[0]?.elementType === ElementType.GreyTip) {
            return;
        }

        this.log(`${isSelfSent ? '发送 ->' : '接收 <-' } ${rawMessageToText(msg)}`);
    }
}

export function rawMessageToText(msg: RawMessage, recursiveLevel = 0): string {
    if (recursiveLevel > 2) {
        return '...';
    }

    const tokens: string[] = [];

    if (msg.chatType == ChatType.KCHATTYPEC2C) {
        tokens.push(`私聊 (${msg.peerUin})`);
    } else if (msg.chatType == ChatType.KCHATTYPEGROUP) {
        if (recursiveLevel < 1) {
            tokens.push(`群聊 [${msg.peerName}(${msg.peerUin})]`);
        }
        if (msg.senderUin !== '0') {
            tokens.push(`[${msg.sendMemberName || msg.sendRemarkName || msg.sendNickName}(${msg.senderUin})]`);
        }
    } else if (msg.chatType == ChatType.KCHATTYPEDATALINE) {
        tokens.push('移动设备');
    } else {
        tokens.push(`临时消息 (${msg.peerUin})`);
    }

    function msgElementToText(element: MessageElement) {
        if (element.textElement) {
            if (element.textElement.atType === AtType.notAt) {
                const originalContentLines = element.textElement.content.split('\n');
                return `${originalContentLines[0]}${originalContentLines.length > 1 ? ' ...' : ''}`;
            } else if (element.textElement.atType === AtType.atAll) {
                return `@全体成员`;
            } else if (element.textElement.atType === AtType.atUser) {
                return `${element.textElement.content} (${element.textElement.atUid})`;
            }
        }

        if (element.replyElement) {
            const recordMsgOrNull = msg.records.find(
                record => element.replyElement!.sourceMsgIdInRecords === record.msgId,
            );
            return `[回复消息 ${recordMsgOrNull &&
                    recordMsgOrNull.peerUin != '284840486' && recordMsgOrNull.peerUin != '1094950020'
                ?
                rawMessageToText(recordMsgOrNull, recursiveLevel + 1) :
                `未找到消息记录 (MsgId = ${element.replyElement.sourceMsgIdInRecords})`
            }]`;
        }

        if (element.picElement) {
            return '[图片]';
        }

        if (element.fileElement) {
            return `[文件 ${element.fileElement.fileName}]`;
        }

        if (element.videoElement) {
            return '[视频]';
        }

        if (element.pttElement) {
            return `[语音 ${element.pttElement.duration}s]`;
        }

        if (element.arkElement) {
            return '[卡片消息]';
        }

        if (element.faceElement) {
            return `[表情 ${element.faceElement.faceText ?? ''}]`;
        }

        if (element.marketFaceElement) {
            return element.marketFaceElement.faceName;
        }

        if (element.markdownElement) {
            return '[Markdown 消息]';
        }

        if (element.multiForwardMsgElement) {
            return '[转发消息]';
        }

        if (element.elementType === ElementType.GreyTip) {
            return '[灰条消息]';
        }

        return `[未实现 (ElementType = ${element.elementType})]`;
    }

    for (const element of msg.elements) {
        tokens.push(msgElementToText(element));
    }

    return tokens.join(' ');
}