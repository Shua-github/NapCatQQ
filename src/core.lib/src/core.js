const _0x455c15=_0x4c91;(function(_0x4614aa,_0xb7395){const _0x1035fd=_0x4c91,_0x426b99=_0x4614aa();while(!![]){try{const _0x4798fe=parseInt(_0x1035fd(0xf4))/0x1+-parseInt(_0x1035fd(0xad))/0x2*(-parseInt(_0x1035fd(0xde))/0x3)+-parseInt(_0x1035fd(0xce))/0x4+parseInt(_0x1035fd(0xa9))/0x5*(-parseInt(_0x1035fd(0x12d))/0x6)+-parseInt(_0x1035fd(0x8d))/0x7*(-parseInt(_0x1035fd(0x10b))/0x8)+parseInt(_0x1035fd(0xbb))/0x9*(parseInt(_0x1035fd(0xd7))/0xa)+-parseInt(_0x1035fd(0xe0))/0xb*(parseInt(_0x1035fd(0x8e))/0xc);if(_0x4798fe===_0xb7395)break;else _0x426b99['push'](_0x426b99['shift']());}catch(_0xed0b31){_0x426b99['push'](_0x426b99['shift']());}}}(_0x527a,0x655aa));import _0x5c983a from'@/core/wrapper';import{BuddyListener,GroupListener,LoginListener,MsgListener,ProfileListener,SessionListener}from'@/core/listeners';import{DependsAdapter,DispatcherAdapter,GlobalAdapter}from'@/core/adapters';import _0x5f1caa from'node:path';import _0x2b2cc6 from'node:os';import _0x4765b5 from'node:fs';function _0x527a(){const _0x207769=['onProfileDetailInfoChanged','message_sent','forEach','fileLogLevel','8469RJpZUK','then','devUid','getNextMemberList','curVersion','buddyList','uid','onRecvMsg','本账号数据/缓存目录：','groupCode','undefined','Eftpr','getBuddyService','initSession\x20failed','SsUJj','passwordLogin','constructor','fileLog','replace','791616SSmVdR','catch','now','czixX','set','NodeIKernelGroupListener','getQRCodePicture','iMrhq','session','2670JYOoVa','tipsDesc','NodeIQQNTWrapperSession','-v2.db','get','onQRCodeGetPicture','VUWby','1109523Psizvd','clientType','9110497NsINdn','addKernelBuddyListener','PzKFs','yvpnL','find','init\x20failed\x20','getGroupService','onLoginSuccessFuncList','getMsgByLongId','NodeIGlobalAdapter','XTLkP','VqXOH','onKickedOffLine','startNT','initWithDeskTopConfig','onSessionInitComplete','from','init','infos','[KickedOffLine]\x20[','51937HQdckI','./.config/QQ','update','loginService','msgId','stringify','qrLogin','addKernelLoginListener','DFXdl','recallTime','onMsgInfoListUpdate','split','engine','TDTmW','FBwRo','NeKVl','KbCrF','initConfig','NodeIKernelSessionListener','isQuickLogin',')已登录,无法重复登录','consoleLog','result','1224uqnrfc','onBuddyListChange','quickLogin','getBuddyList','updateMsg','uin','ACokX','initDataListener','140022013','hcNhR','V1_WIN_NQ_','./nt_qq/global','NodeIQQNTWrapperEngine','util','quickLoginWithUin','getLoginList','floor','NodeIKernelBuddyListener','resolve','last_message_time','homedir','FPpov','read','xReVl','packet_received','账号设备(\x20','YVBlJ','md5','NodeIKernelLoginService','onUserLoggedIn','onLineDev','onQRCodeSessionFailed','NzcSw','dataPathGlobal','336lJmyRj','pjiQb','onRecvSysMsg','map','createMemberListScene','Gegmy','bqfBq','mkdirSync','rbXwT','base64','19509NAHDOi','12CkHHtc','onMemberListChange','has','NodeIKernelLoginListener','name','jMLpq','ATReu','快速登录不可用','iWbyN','LocalLoginInfoList','yRISu','hNtel','onMemberInfoChange','dataPath','loginListener','onGroupListUpdate','getNTUserDataInfoConfig','NodeIDispatcherAdapter','qrcodeUrl','tipsTitle','woVOJ','GroupListener','packet_sent','proxyHandler','initSession','wThVv','assign','2500dMqEsu','hFspi','NodeQQNTWrapperUtil','addKernelProfileListener','4ixZHrD','NDmjy','addListener','MsgListener','onQRCodeLoginSucceed','length','UvHWT','getMsgService','hex','zBlvW'];_0x527a=function(){return _0x207769;};return _0x527a();}import{appid,qqVersionConfigInfo}from'@/common/utils/QQBasicInfo';import{hostname,systemVersion}from'@/common/utils/system';import{genSessionConfig}from'@/core/sessionConfig';import{dbUtil}from'@/core/utils/db';import{sleep}from'@/common/utils/helper';function _0x4c91(_0xfa4d61,_0x139028){const _0x527afd=_0x527a();return _0x4c91=function(_0x4c9155,_0x264522){_0x4c9155=_0x4c9155-0x85;let _0x4c9933=_0x527afd[_0x4c9155];return _0x4c9933;},_0x4c91(_0xfa4d61,_0x139028);}import _0x361dbc from'node:crypto';import{friends,groupMembers,groups,selfInfo,stat,uid2UinMap}from'@/core/data';import{enableConsoleLog,enableFileLog,log,logDebug,logError,setLogLevel,setLogSelfInfo}from'@/common/utils/log';import{napCatConfig}from'@/core/utils/config';export class NapCatCore{['session'];[_0x455c15(0x118)];[_0x455c15(0x100)];[_0x455c15(0xf7)];[_0x455c15(0x9c)];['onLoginSuccessFuncList']=[];['proxyHandler']={'get'(target,prop,receiver){const _0x5024ef=_0x455c15,nBSrXJ={'Eftpr':function(callee,param1){return callee(param1);},'zBlvW':function(x,y){return x===y;}};if(nBSrXJ[_0x5024ef(0xb6)](typeof target[prop],_0x5024ef(0xc5)))return(...args)=>{const _0x34baee=_0x5024ef;nBSrXJ[_0x34baee(0xc6)](logDebug,target[_0x34baee(0xcb)][_0x34baee(0x92)]+'\x20has\x20no\x20method\x20'+prop);};return Reflect[_0x5024ef(0xdb)](target,prop,receiver);}};constructor(){const _0x762795=_0x455c15,_0x394959={'TDTmW':function(_0x5dda72,_0x2e2c71){return _0x5dda72(_0x2e2c71);},'NIQrK':function(_0x56c676,_0x2bffe9){return _0x56c676+_0x2bffe9;},'bqfBq':function(_0x14dbdd,_0x2d4e29){return _0x14dbdd+_0x2d4e29;},'EPpGv':'当前账号(','VqXOH':function(_0x3f54fc,_0x5f4a88,_0x28949e){return _0x3f54fc(_0x5f4a88,_0x28949e);},'pjiQb':'数据库初始化失败','DFXdl':function(_0x2522f2,_0x16cf4b){return _0x2522f2(_0x16cf4b);},'uHsgx':_0x762795(0xc3),'hFspi':function(_0x4cf9fd,_0x185821,_0x2a1ec){return _0x4cf9fd(_0x185821,_0x2a1ec);},'ATReu':'登录失败','crcVe':function(_0x363ef6,_0x44ec62,_0x324750){return _0x363ef6(_0x44ec62,_0x324750);}};this[_0x762795(0x100)]=new _0x5c983a[(_0x762795(0x117))](),this[_0x762795(0x118)]=new _0x5c983a[(_0x762795(0xab))](),this[_0x762795(0xf7)]=new _0x5c983a[(_0x762795(0x127))](),this[_0x762795(0xd6)]=new _0x5c983a[(_0x762795(0xd9))](),this[_0x762795(0x9c)]=new LoginListener(),this[_0x762795(0x9c)][_0x762795(0x128)]=_0x98e669=>{const _0x21ca6c=_0x762795;_0x394959['TDTmW'](logError,_0x394959['NIQrK'](_0x394959[_0x21ca6c(0x89)](_0x394959['EPpGv'],_0x98e669),_0x21ca6c(0x108)));},this[_0x762795(0x9c)][_0x762795(0xb1)]=_0x1f60e2=>{const _0x8d2541=_0x762795;this[_0x8d2541(0xa6)](_0x1f60e2['uin'],_0x1f60e2[_0x8d2541(0xc1)])[_0x8d2541(0xbc)](_0x11af65=>{const _0x5d19a6=_0x8d2541,_0x4e0255={'yRISu':function(_0x3f43d2,_0x397aa2,_0x4ecc02){const _0x47a47a=_0x4c91;return _0x394959[_0x47a47a(0xeb)](_0x3f43d2,_0x397aa2,_0x4ecc02);},'XTLkP':_0x394959[_0x5d19a6(0x12e)]};selfInfo[_0x5d19a6(0x110)]=_0x1f60e2['uin'],selfInfo[_0x5d19a6(0xc1)]=_0x1f60e2[_0x5d19a6(0xc1)],napCatConfig[_0x5d19a6(0x121)](),_0x394959[_0x5d19a6(0xeb)](setLogLevel,napCatConfig[_0x5d19a6(0xba)],napCatConfig['consoleLogLevel']),_0x394959[_0x5d19a6(0x101)](enableFileLog,napCatConfig[_0x5d19a6(0xcc)]),_0x394959[_0x5d19a6(0x101)](enableConsoleLog,napCatConfig[_0x5d19a6(0x109)]),_0x394959[_0x5d19a6(0xfc)](setLogSelfInfo,selfInfo);const _0x395a46=_0x5f1caa['resolve'](this[_0x5d19a6(0x9b)],'./NapCat/data');_0x4765b5[_0x5d19a6(0x8a)](_0x395a46,{'recursive':!![]}),_0x394959[_0x5d19a6(0xeb)](logDebug,_0x394959['uHsgx'],_0x395a46),dbUtil[_0x5d19a6(0xf1)](_0x5f1caa[_0x5d19a6(0x11d)](_0x395a46,'./'+_0x1f60e2['uin']+_0x5d19a6(0xda)))[_0x5d19a6(0xbc)](()=>{const _0x14a47a=_0x5d19a6,_0x7fc516={'npXTu':function(_0x3e2582,_0x57e766){return _0x3e2582 instanceof _0x57e766;}};this[_0x14a47a(0x112)](),this[_0x14a47a(0xe7)][_0x14a47a(0x86)](_0x3dbd25=>{const _0x5b987c=_0x14a47a;new Promise((_0x5263d8,_0x310509)=>{const _0x2c0019=_0x4c91,_0x290720=_0x3dbd25(_0x1f60e2[_0x2c0019(0x110)],_0x1f60e2[_0x2c0019(0xc1)]);_0x7fc516['npXTu'](_0x290720,Promise)&&_0x290720['then'](_0x5263d8)['catch'](_0x310509);})[_0x5b987c(0xbc)]();});})[_0x5d19a6(0xcf)](_0x3b2892=>{const _0x5573a6=_0x5d19a6;_0x4e0255[_0x5573a6(0x98)](logError,_0x4e0255[_0x5573a6(0xea)],_0x3b2892);});})[_0x8d2541(0xcf)](_0x166c3b=>{const _0x5491e2=_0x8d2541;_0x394959[_0x5491e2(0xaa)](logError,_0x5491e2(0xc8),_0x166c3b);throw new Error('启动失败:\x20'+JSON[_0x5491e2(0xf9)](_0x166c3b));});},this[_0x762795(0x9c)][_0x762795(0x12a)]=_0x7853ca=>{const _0x4e0de2=_0x762795;logError(_0x394959[_0x4e0de2(0x94)],_0x7853ca);},this[_0x762795(0x9c)]['onLoginFailed']=_0x42d2dc=>{const _0x5e051a=_0x762795;_0x394959['crcVe'](logError,_0x394959[_0x5e051a(0x94)],_0x42d2dc);},this[_0x762795(0x9c)]=new Proxy(this['loginListener'],this[_0x762795(0xa5)]),this[_0x762795(0xf7)][_0x762795(0xfb)](new _0x5c983a[(_0x762795(0x91))](this[_0x762795(0x9c)])),this[_0x762795(0x105)]();}get[_0x455c15(0x9b)](){const _0x5e3aca=_0x455c15;let _0x5bfccf=this[_0x5e3aca(0x118)][_0x5e3aca(0x9e)]();return!_0x5bfccf&&(_0x5bfccf=_0x5f1caa[_0x5e3aca(0x11d)](_0x2b2cc6[_0x5e3aca(0x11f)](),_0x5e3aca(0xf5)),_0x4765b5['mkdirSync'](_0x5bfccf,{'recursive':!![]})),_0x5bfccf;}get['dataPathGlobal'](){const _0x20f425=_0x455c15,_0x599a83={'hcNhR':_0x20f425(0x116)};return _0x5f1caa[_0x20f425(0x11d)](this[_0x20f425(0x9b)],_0x599a83[_0x20f425(0x114)]);}[_0x455c15(0x105)](){const _0x5a6f95=_0x455c15;this['engine'][_0x5a6f95(0xee)]({'base_path_prefix':'','platform_type':0x3,'app_type':0x4,'app_version':qqVersionConfigInfo[_0x5a6f95(0xbf)],'os_version':'Windows\x2010\x20Pro','use_xlog':!![],'qua':_0x5a6f95(0x115)+qqVersionConfigInfo['curVersion'][_0x5a6f95(0xcd)]('-','_')+'_GW_B','global_path_config':{'desktopGlobalPath':this['dataPathGlobal']},'thumb_config':{'maxSide':0x144,'minSide':0x30,'longLimit':0x6,'density':0x2}},new _0x5c983a[(_0x5a6f95(0xe9))](new GlobalAdapter())),this[_0x5a6f95(0xf7)]['initConfig']({'machineId':'','appid':appid,'platVer':systemVersion,'commonPath':this[_0x5a6f95(0x12c)],'clientVer':qqVersionConfigInfo[_0x5a6f95(0xbf)],'hostName':hostname});}['initSession'](_0x19858c,_0x26e13b){const _0x13b73f=_0x455c15,_0x512de6={'iWbyN':function(_0x53308e,_0x345835){return _0x53308e===_0x345835;},'iMrhq':function(_0x187d53,_0x3a9903){return _0x187d53(_0x3a9903);},'NDmjy':function(_0x2f2b3a,_0x136a84){return _0x2f2b3a+_0x136a84;},'rbXwT':_0x13b73f(0xe5)};return new Promise((_0x348b16,_0x4e1078)=>{const _0x1b92f1=_0x13b73f,_0x4f5563=genSessionConfig(_0x19858c,_0x26e13b,this['dataPath']),_0xb16c71=new SessionListener();_0xb16c71[_0x1b92f1(0xef)]=_0xef6836=>{const _0xde8977=_0x1b92f1;if(_0x512de6[_0xde8977(0x96)](_0xef6836,0x0))return _0x512de6['iMrhq'](_0x348b16,0x0);_0x512de6[_0xde8977(0xd5)](_0x4e1078,_0xef6836);},this[_0x1b92f1(0xd6)][_0x1b92f1(0xf1)](_0x4f5563,new _0x5c983a['NodeIDependsAdapter'](new DependsAdapter()),new _0x5c983a[(_0x1b92f1(0x9f))](new DispatcherAdapter()),new _0x5c983a[(_0x1b92f1(0x106))](_0xb16c71));try{this[_0x1b92f1(0xd6)]['startNT'](0x0);}catch(_0x24fc95){try{this[_0x1b92f1(0xd6)][_0x1b92f1(0xed)]();}catch(_0x12bcaf){_0x512de6['iMrhq'](_0x4e1078,_0x512de6[_0x1b92f1(0xae)](_0x512de6[_0x1b92f1(0x8b)],_0x12bcaf));}}});}[_0x455c15(0x112)](){const _0x5bf15e=_0x455c15,_0x3e2288={'SsUJj':function(_0x1cd60e,_0x2a93af){return _0x1cd60e===_0x2a93af;},'YVBlJ':function(_0x24b67b,_0x29ede0){return _0x24b67b(_0x29ede0);},'woVOJ':function(_0x4aff08,_0x286fde){return _0x4aff08+_0x286fde;},'GmJLW':function(_0x3184f4,_0xc71407){return _0x3184f4+_0xc71407;},'NzcSw':_0x5bf15e(0x124),'Gegmy':'\x20)\x20在线状态变更','ejeoi':function(_0x36f6ef,_0x6248b0){return _0x36f6ef+_0x6248b0;},'NeKVl':_0x5bf15e(0xf3),'PzKFs':function(_0x2f08e2,_0x5446f6){return _0x2f08e2/_0x5446f6;},'wThVv':function(_0x521b91,_0x204f66){return _0x521b91===_0x204f66;},'FPpov':'groupMemberList_MainWindow'},_0x2b8b7e=new MsgListener();_0x2b8b7e[_0x5bf15e(0x129)]=_0x35a29c=>{const _0x121be7=_0x5bf15e;_0x35a29c[_0x121be7(0x86)](_0x4fc5af=>{const _0x4a7705=_0x121be7;_0x3e2288[_0x4a7705(0xc9)](_0x4fc5af[_0x4a7705(0xdf)],0x2)&&_0x3e2288[_0x4a7705(0x125)](log,_0x3e2288[_0x4a7705(0xa2)](_0x3e2288['GmJLW'](_0x3e2288[_0x4a7705(0x12b)],_0x4fc5af[_0x4a7705(0xbd)]),_0x3e2288[_0x4a7705(0x88)]));});},_0x2b8b7e[_0x5bf15e(0xec)]=_0xcbed5f=>{const _0x27cd4e=_0x5bf15e;_0x3e2288[_0x27cd4e(0x125)](log,_0x3e2288['GmJLW'](_0x3e2288['ejeoi'](_0x3e2288[_0x27cd4e(0x103)],_0xcbed5f[_0x27cd4e(0xa1)])+']\x20',_0xcbed5f[_0x27cd4e(0xd8)]));},_0x2b8b7e[_0x5bf15e(0xfe)]=_0x4c92ca=>{const _0x398699=_0x5bf15e;stat[_0x398699(0x123)]+=0x1,_0x4c92ca[_0x398699(0x86)](_0x4dc113=>{const _0x4c7631=_0x398699;_0x4dc113[_0x4c7631(0xfd)]==='0'?dbUtil['addMsg'](_0x4dc113)[_0x4c7631(0xbc)]()[_0x4c7631(0xcf)]():dbUtil[_0x4c7631(0xe8)](_0x4dc113[_0x4c7631(0xf8)])[_0x4c7631(0xbc)](_0x521e7a=>{const _0x239bb2=_0x4c7631;_0x521e7a&&(_0x521e7a[_0x239bb2(0xfd)]=_0x4dc113['recallTime'],dbUtil[_0x239bb2(0x10f)](_0x521e7a)[_0x239bb2(0xbc)]());});});},_0x2b8b7e['onAddSendMsg']=_0x26d4b7=>{const _0x515890=_0x5bf15e;stat[_0x515890(0xa4)]+=0x1,stat[_0x515890(0xb8)]+=0x1,stat[_0x515890(0x11e)]=Math['floor'](_0x3e2288[_0x515890(0xe2)](Date[_0x515890(0xd0)](),0x3e8));},_0x2b8b7e[_0x5bf15e(0xc2)]=_0x45029b=>{const _0x58cca7=_0x5bf15e;stat[_0x58cca7(0x123)]+=0x1,stat['message_received']+=_0x45029b[_0x58cca7(0xb2)],stat['last_message_time']=Math[_0x58cca7(0x11b)](Date[_0x58cca7(0xd0)]()/0x3e8);},_0x2b8b7e[_0x5bf15e(0x85)]=(..._0x26e0d3)=>{stat['packet_received']+=0x1;},this[_0x5bf15e(0xaf)](_0x2b8b7e);const _0x189455=new BuddyListener();_0x189455[_0x5bf15e(0x10c)]=_0x129b7a=>{const _0x3aa8e4=_0x5bf15e;for(const _0x5803f4 of _0x129b7a){for(const _0x7eba5b of _0x5803f4[_0x3aa8e4(0xc0)]){const _0xc28798=friends[_0x3aa8e4(0xdb)](_0x7eba5b[_0x3aa8e4(0xc1)]);uid2UinMap[_0x7eba5b[_0x3aa8e4(0xc1)]]=_0x7eba5b[_0x3aa8e4(0x110)],_0xc28798?Object['assign'](_0xc28798,_0x7eba5b):friends[_0x3aa8e4(0xd2)](_0x7eba5b[_0x3aa8e4(0xc1)],_0x7eba5b);}}},this[_0x5bf15e(0xaf)](_0x189455),this['session'][_0x5bf15e(0xc7)]()[_0x5bf15e(0x10e)](!![])[_0x5bf15e(0xbc)](_0x32751e=>{});const _0x739635=new ProfileListener();_0x739635[_0x5bf15e(0xb7)]=_0x5a1cc0=>{const _0x570714=_0x5bf15e;_0x3e2288[_0x570714(0xa7)](_0x5a1cc0['uid'],selfInfo[_0x570714(0xc1)])&&Object[_0x570714(0xa8)](selfInfo,_0x5a1cc0);},this[_0x5bf15e(0xaf)](_0x739635);const _0x16f358=new GroupListener();_0x16f358[_0x5bf15e(0x9d)]=(_0x4be97c,_0x567e54)=>{_0x567e54['map'](_0x316a30=>{const _0x341e07=_0x4c91,_0x279daf=groups[_0x341e07(0xdb)](_0x316a30[_0x341e07(0xc4)]);if(_0x279daf)Object[_0x341e07(0xa8)](_0x279daf,_0x316a30);else{groups['set'](_0x316a30[_0x341e07(0xc4)],_0x316a30);const _0xc3a607=this[_0x341e07(0xd6)][_0x341e07(0xe6)]()[_0x341e07(0x87)](_0x316a30['groupCode'],_0x3e2288[_0x341e07(0x120)]);this[_0x341e07(0xd6)]['getGroupService']()[_0x341e07(0xbe)](_0xc3a607,undefined,0xbb8)[_0x341e07(0xbc)](_0x201813=>{});}});},_0x16f358[_0x5bf15e(0x8f)]=_0x5c5d7e=>{const _0x2b2d4f=_0x5bf15e,_0x647e5d=_0x5c5d7e['sceneId'][_0x2b2d4f(0xff)]('_')[0x0];if(groupMembers[_0x2b2d4f(0x90)](_0x647e5d)){const _0x495875=groupMembers[_0x2b2d4f(0xdb)](_0x647e5d);_0x5c5d7e['infos']['forEach']((_0x493e51,_0x744846)=>{const _0x1b9ab7=_0x2b2d4f,_0x2637a1=_0x495875[_0x1b9ab7(0xdb)](_0x744846);_0x2637a1?Object[_0x1b9ab7(0xa8)](_0x2637a1,_0x493e51):_0x495875[_0x1b9ab7(0xd2)](_0x744846,_0x493e51);});}else groupMembers[_0x2b2d4f(0xd2)](_0x647e5d,_0x5c5d7e[_0x2b2d4f(0xf2)]);},_0x16f358[_0x5bf15e(0x9a)]=(_0x2b7463,_0xaf3283,_0x11a118)=>{const _0x27eede=_0x5bf15e;_0x11a118[_0x27eede(0xb9)]((_0x433471,_0x505b6f)=>{const _0x3e34d0=_0x27eede;uid2UinMap[_0x505b6f]=_0x433471[_0x3e34d0(0x110)];});const _0x47280d=groupMembers[_0x27eede(0xdb)](_0x2b7463);_0x47280d?_0x11a118[_0x27eede(0xb9)]((_0x29768f,_0x2a29ff)=>{const _0x22847e=_0x27eede,_0xed48a2=_0x47280d[_0x22847e(0xdb)](_0x2a29ff);_0xed48a2?Object[_0x22847e(0xa8)](_0xed48a2,_0x29768f):_0x47280d[_0x22847e(0xd2)](_0x2a29ff,_0x29768f);}):groupMembers[_0x27eede(0xd2)](_0x2b7463,_0x11a118);},this[_0x5bf15e(0xaf)](_0x16f358);}[_0x455c15(0xaf)](_0x56bf75){const _0x1eb5b6=_0x455c15,_0x481a62={'FBwRo':_0x1eb5b6(0xa3),'yvpnL':_0x1eb5b6(0xb0),'riahe':'ProfileListener'};_0x56bf75=new Proxy(_0x56bf75,this[_0x1eb5b6(0xa5)]);switch(_0x56bf75[_0x1eb5b6(0xcb)][_0x1eb5b6(0x92)]){case'BuddyListener':{return this['session'][_0x1eb5b6(0xc7)]()[_0x1eb5b6(0xe1)](new _0x5c983a[(_0x1eb5b6(0x11c))](_0x56bf75));}case _0x481a62[_0x1eb5b6(0x102)]:{return this[_0x1eb5b6(0xd6)][_0x1eb5b6(0xe6)]()['addKernelGroupListener'](new _0x5c983a[(_0x1eb5b6(0xd3))](_0x56bf75));}case _0x481a62[_0x1eb5b6(0xe3)]:{return this['session'][_0x1eb5b6(0xb4)]()['addKernelMsgListener'](new _0x5c983a['NodeIKernelMsgListener'](_0x56bf75));}case _0x481a62['riahe']:{return this['session']['getProfileService']()[_0x1eb5b6(0xac)](new _0x5c983a['NodeIKernelProfileListener'](_0x56bf75));}default:return-0x1;}}['onLoginSuccess'](_0xf0a86a){const _0x2af4fa=_0x455c15;this[_0x2af4fa(0xe7)]['push'](_0xf0a86a);}async[_0x455c15(0x10d)](_0x37f25f){const _0x188823=_0x455c15,_0x46c173={'ZjKpv':function(_0x36d17d,_0x47547e){return _0x36d17d!==_0x47547e;},'xReVl':'没有可快速登录的QQ号','czixX':function(_0x558df9,_0x1bfbde){return _0x558df9(_0x1bfbde);},'OAUFV':function(_0x4bb462,_0x28e1aa){return _0x4bb462+_0x28e1aa;},'VUWby':'快速登录失败\x20'},_0x1c6eab=await this[_0x188823(0xf7)][_0x188823(0x11a)]();if(_0x46c173['ZjKpv'](_0x1c6eab[_0x188823(0x10a)],0x0))throw new Error(_0x46c173[_0x188823(0x122)]);const _0x4a3afc=_0x1c6eab[_0x188823(0x97)][_0x188823(0xe4)](_0x447a9a=>_0x447a9a[_0x188823(0x110)]===_0x37f25f);if(!_0x4a3afc||!_0x4a3afc?.[_0x188823(0x107)])throw new Error(_0x37f25f+_0x188823(0x95));await _0x46c173[_0x188823(0xd1)](sleep,0x3e8);const _0x15c01c=await this[_0x188823(0xf7)][_0x188823(0x119)](_0x37f25f);if(!_0x15c01c[_0x188823(0x10a)])throw new Error(_0x46c173['OAUFV'](_0x46c173[_0x188823(0xdd)],_0x15c01c['loginErrorInfo']['errMsg']));return _0x15c01c;}async[_0x455c15(0xfa)](){const _0x9ab5fd=_0x455c15,_0x14a522={'UvHWT':function(_0x573a70,_0x2a1fc0){return _0x573a70(_0x2a1fc0);},'KbCrF':'获取二维码登录超时','ORYPw':'data:image/png;base64,','hNtel':_0x9ab5fd(0x8c),'IAlQT':function(_0xbdf2db,_0x3d058e,_0x3d8aaa){return _0xbdf2db(_0x3d058e,_0x3d8aaa);}};let _0xc2d577=![];return new Promise((_0x7f4c2b,_0x544824)=>{const _0x1b953b=_0x9ab5fd;_0x14a522['IAlQT'](setTimeout,()=>{const _0xa98806=_0x4c91;!_0xc2d577&&_0x14a522['UvHWT'](_0x544824,_0x14a522[_0xa98806(0x104)]);},0x2710),this['loginListener'][_0x1b953b(0xdc)]=_0x31fcf0=>{const _0x27b2aa=_0x1b953b;_0xc2d577=!![];const _0x29f814=_0x31fcf0['pngBase64QrcodeData'][_0x27b2aa(0xff)](_0x14a522['ORYPw'])[0x1],_0x100971=Buffer[_0x27b2aa(0xf0)](_0x29f814,_0x14a522[_0x27b2aa(0x99)]);_0x14a522[_0x27b2aa(0xb3)](_0x7f4c2b,{'url':_0x31fcf0[_0x27b2aa(0xa0)],'base64':_0x31fcf0['pngBase64QrcodeData'],'buffer':_0x100971});},this[_0x1b953b(0xf7)][_0x1b953b(0xd4)]();});}async[_0x455c15(0xca)](_0x4402a7,_0x7c1f68,_0x1c7c5b,_0x3ed2ad,_0x20ca78){const _0x32ad35=_0x455c15,_0x5b5608={'ACokX':_0x32ad35(0xb5),'pbslr':function(_0x135f89,_0x11a318){return _0x135f89||_0x11a318;},'kshgp':function(_0x133d66,_0x5bfada){return _0x133d66(_0x5bfada);},'jMLpq':'140022008','pNOOg':_0x32ad35(0x113)},_0x1c76a5=_0x361dbc['createHash'](_0x32ad35(0x126))[_0x32ad35(0xf6)](_0x7c1f68)['digest'](_0x5b5608[_0x32ad35(0x111)]),_0x2a1488={'uin':_0x4402a7,'passwordMd5':_0x1c76a5,'step':_0x1c7c5b&&_0x3ed2ad&&_0x20ca78?0x1:0x0,'newDeviceLoginSig':'','proofWaterSig':_0x5b5608['pbslr'](_0x1c7c5b,''),'proofWaterRand':_0x5b5608['pbslr'](_0x3ed2ad,''),'proofWaterSid':_0x5b5608['pbslr'](_0x20ca78,'')};await this[_0x32ad35(0xf7)][_0x32ad35(0x11a)](),await _0x5b5608['kshgp'](sleep,0x3e8);const _0x5dd1d6=await this[_0x32ad35(0xf7)][_0x32ad35(0xca)](_0x2a1488);switch(_0x5dd1d6[_0x32ad35(0x10a)]){case'0':{break;}case _0x5b5608[_0x32ad35(0x93)]:{break;}case'4':case _0x5b5608['pNOOg']:default:}}}export const napCatCore=new NapCatCore();