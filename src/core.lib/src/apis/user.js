const _0x2d81b2=_0x34d2;(function(_0x2b935c,_0x4927eb){const _0x468e52=_0x34d2,_0x48a9db=_0x2b935c();while(!![]){try{const _0x595b18=parseInt(_0x468e52(0x1e4))/0x1+-parseInt(_0x468e52(0x19a))/0x2+-parseInt(_0x468e52(0x1a8))/0x3*(parseInt(_0x468e52(0x1da))/0x4)+-parseInt(_0x468e52(0x1cb))/0x5*(parseInt(_0x468e52(0x1cc))/0x6)+-parseInt(_0x468e52(0x1d5))/0x7+parseInt(_0x468e52(0x1d8))/0x8+-parseInt(_0x468e52(0x1e0))/0x9*(-parseInt(_0x468e52(0x1f4))/0xa);if(_0x595b18===_0x4927eb)break;else _0x48a9db['push'](_0x48a9db['shift']());}catch(_0x1d96c1){_0x48a9db['push'](_0x48a9db['shift']());}}}(_0x58fd,0x6da06));import{Credentials,selfInfo}from'@/core/data';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';import{RequestUtil}from'@/common/utils/request';function _0x34d2(_0x558d3d,_0x1c524a){const _0x58fdfa=_0x58fd();return _0x34d2=function(_0x34d2cf,_0x4126f9){_0x34d2cf=_0x34d2cf-0x19a;let _0x3c8265=_0x58fdfa[_0x34d2cf];return _0x3c8265;},_0x34d2(_0x558d3d,_0x1c524a);}import{logDebug,logError}from'@/common/utils/log';import{NTEventDispatch}from'@/common/utils/EventTask';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();profileListener[_0x2d81b2(0x1c9)]=_0x203cf1=>{userInfoCache[_0x203cf1['uid']]=_0x203cf1,userDetailHandlers['forEach'](_0x4c8642=>_0x4c8642(_0x203cf1));},setTimeout(()=>{const _0x4a5687=_0x2d81b2;napCatCore[_0x4a5687(0x1e5)](()=>{const _0x1c98c7=_0x4a5687;napCatCore[_0x1c98c7(0x1b1)](profileListener);});},0x64);function _0x58fd(){const _0x34c5b6=['onProfileDetailInfoChanged','getPSkey','77710CXQvcB','120FYUoud','push','iDbBr','then','uinInfo','modifyDesktopMiniProfile','getProfileLikeService','CallNoListenerEvent','session','2792293eHAlRs','RdDWO','PskeyData','3301592Fwgmqn','skey','8HxnWPs','keyIndex','NodeIKernelProfileService/getUserDetailInfoByUin','ecULi','请求获取Cookies时失败','KeyIndex','4509QZWKhg','bJUzd','getSelfInfo','uin','192118cTzqMf','onLoginSuccess','eTjuJ','OqCfJ','请求获取Skey时失败','getSkey','mMjlO','getMsgService','tUzpY','getUserDetailInfoByUin','getBuddyService','setHeader','https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','forceFetchClientKey','uid','rJIjp','26900RSUsvZ','GMxAo','qEpnf','zqWhS','errMsg','&u1=https%3A%2F%2Fuser.qzone.qq.com%2F','result','1100904dmWipp','NodeIKernelUixConvertService/getUin','DQtSY','setSelfOnlineStatus','modifySelfProfile','getUinByUid','getProfileService','getQzoneCookies','获取Pskey失败','entries','get','PskeyTime','opfnB','getUserDetailInfo','364929wBaEhN','getUidByUin','Skey','&clientkey=','pFmWz','ClientKey','YMeJO','%2Finfocenter&keyindex=19%27','HttpsGetCookies','addListener','getUserDetailInfo\x20timeout','fromEntries','getUserInfo','PhLxH','XtYoz','TJdVk','vEMqK','getTicketService','OGaGP','kUzAP','length','gHRdx','CreatTime','getRobotUinRange','setBuddyProfileLike','delete','uidInfo','JFLze','set','setQQAvatar','LBZtC','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','now'];_0x58fd=function(){return _0x34c5b6;};return _0x58fd();}export class NTQQUserApi{static async[_0x2d81b2(0x19d)](_0x4561ce,_0x645300,_0xb145cd){const _0x41eb6e=_0x2d81b2;return napCatCore[_0x41eb6e(0x1d4)][_0x41eb6e(0x1eb)]()['setStatus']({'status':_0x4561ce,'extStatus':_0x645300,'batteryStatus':_0xb145cd});}static async['getBuddyRecommendContactArkJson'](_0x2c8a1e,_0x23fc8e=''){const _0x50924e=_0x2d81b2;return napCatCore[_0x50924e(0x1d4)][_0x50924e(0x1ee)]()['getBuddyRecommendContactArkJson'](_0x2c8a1e,_0x23fc8e);}static async['like'](_0x1d686f,_0x4143e2=0x1){const _0x24140e=_0x2d81b2;return napCatCore[_0x24140e(0x1d4)][_0x24140e(0x1d2)]()[_0x24140e(0x1c0)]({'friendUid':_0x1d686f,'sourceId':0x47,'doLikeCount':_0x4143e2,'doLikeTollCount':0x0});}static async[_0x2d81b2(0x1c5)](_0x1539a6){const _0x33aaf3=_0x2d81b2,_0x540074=await napCatCore[_0x33aaf3(0x1d4)][_0x33aaf3(0x1a0)]()[_0x33aaf3(0x1ef)](_0x1539a6);return{'result':_0x540074?.[_0x33aaf3(0x1fa)],'errMsg':_0x540074?.[_0x33aaf3(0x1f8)]};}static async[_0x2d81b2(0x1e2)](){}static async[_0x2d81b2(0x1b4)](_0x34e8b4){}static async[_0x2d81b2(0x1a7)](_0x289a7c){const _0x1e864d=_0x2d81b2,_0x1849f3={'bJUzd':function(_0x1b8920,_0x44cdff){return _0x1b8920(_0x44cdff);},'tUzpY':function(_0x3be868,_0xc98cff){return _0x3be868===_0xc98cff;},'PhLxH':function(_0x1a749a){return _0x1a749a();}},_0x793f8d=napCatCore[_0x1e864d(0x1d4)]['getProfileService']();return new Promise((_0x2ad4bd,_0x3dc097)=>{const _0x4fc5a4=_0x1e864d,_0x4d494d=_0x1849f3[_0x4fc5a4(0x1b5)](randomUUID);let _0x242256=![],_0x513c7f=undefined,_0x44bfaf=!![];setTimeout(()=>{const _0x23344e=_0x4fc5a4;!_0x242256&&(_0x513c7f?_0x1849f3['bJUzd'](_0x2ad4bd,_0x513c7f):_0x1849f3[_0x23344e(0x1e1)](_0x3dc097,_0x23344e(0x1b2))),userDetailHandlers[_0x23344e(0x1c1)](_0x4d494d);},0x1388),userDetailHandlers['set'](_0x4d494d,_0x2f5259=>{const _0x239fbd=_0x4fc5a4;_0x1849f3[_0x239fbd(0x1ec)](_0x2f5259[_0x239fbd(0x1f2)],_0x289a7c)&&(_0x44bfaf?(_0x513c7f=_0x2f5259,_0x44bfaf=![]):(_0x242256=!![],_0x2ad4bd(_0x2f5259)));}),_0x793f8d['getUserDetailInfoWithBizInfo'](_0x289a7c,[0x0])[_0x4fc5a4(0x1cf)](_0x3e5ae5=>{});});}static async[_0x2d81b2(0x19e)](_0x48986a){const _0x349fc0=_0x2d81b2;return napCatCore[_0x349fc0(0x1d4)][_0x349fc0(0x1a0)]()[_0x349fc0(0x1d1)](_0x48986a);}static async[_0x2d81b2(0x1ca)](_0x21c1a0,_0x4f9e7c=!![]){const _0x249100=_0x2d81b2,_0x595a15={'rJIjp':function(_0x22a7aa,_0xd3cde5){return _0x22a7aa||_0xd3cde5;},'GMxAo':function(_0xd279d8,_0x5094b7){return _0xd279d8-_0x5094b7;},'YMeJO':function(_0x5b9038,_0x253a66){return _0x5b9038*_0x253a66;},'TJdVk':function(_0x39527f,_0x35cdfb){return _0x39527f>_0x35cdfb;},'OqCfJ':function(_0x44a657,_0x4860b3){return _0x44a657===_0x4860b3;},'DQtSY':function(_0x55e952,_0x1eda33,_0x5e7140){return _0x55e952(_0x1eda33,_0x5e7140);},'RdDWO':_0x249100(0x1a2)},_0x148499=[],_0x80684c={};for(const _0x26d355 in _0x21c1a0){const _0x3271d3=Credentials[_0x249100(0x1d7)][_0x249100(0x1a4)](_0x21c1a0[_0x26d355]),_0xd56936=Credentials[_0x249100(0x1a5)]['get'](_0x21c1a0[_0x26d355]);_0x595a15[_0x249100(0x1f3)](!_0x3271d3,!_0xd56936)||_0x595a15[_0x249100(0x1f5)](Date[_0x249100(0x1c8)](),_0xd56936)>_0x595a15[_0x249100(0x1ae)](0x708,0x3e8)||!_0x4f9e7c?_0x148499[_0x249100(0x1cd)](_0x21c1a0[_0x26d355]):_0x80684c[_0x21c1a0[_0x26d355]]=_0x3271d3;}let _0x5d541d={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x595a15[_0x249100(0x1b7)](_0x148499[_0x249100(0x1bc)],0x0)&&(_0x5d541d=await napCatCore['session']['getTipOffService']()['getPskey'](_0x148499,!![]));const _0x3c0b52=_0x5d541d['domainPskeyMap'];for(const _0x2fdd3f of _0x3c0b52[_0x249100(0x1a3)]()){Credentials[_0x249100(0x1d7)][_0x249100(0x1c4)](_0x2fdd3f[0x0],_0x2fdd3f[0x1]),Credentials[_0x249100(0x1a5)][_0x249100(0x1c4)](_0x2fdd3f[0x0],Date[_0x249100(0x1c8)]());}const _0x1431e5=Object['assign'](Object[_0x249100(0x1b3)](_0x3c0b52),_0x80684c);if(_0x595a15[_0x249100(0x1e7)](_0x5d541d['result'],0x0))return _0x1431e5;else _0x595a15[_0x249100(0x19c)](logError,_0x595a15[_0x249100(0x1d6)],_0x5d541d[_0x249100(0x1f8)]);return{};}static async[_0x2d81b2(0x1bf)](){const _0x158ccc=_0x2d81b2,_0x7fb4c0=await napCatCore['session']['getRobotService']()[_0x158ccc(0x1bf)]({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x7fb4c0?.['response']?.['robotUinRanges'];}static async[_0x2d81b2(0x1a1)](){const _0x434052=_0x2d81b2,_0x4659ca={'zqWhS':function(_0x46e525,_0x56e0ee){return _0x46e525+_0x56e0ee;},'opfnB':function(_0x2dc2b0,_0x61f49){return _0x2dc2b0+_0x61f49;},'kUzAP':function(_0x512e8c,_0x358e62){return _0x512e8c+_0x358e62;},'qEpnf':_0x434052(0x1f0),'OGaGP':'&clientkey=','eTjuJ':_0x434052(0x1f9),'mMjlO':_0x434052(0x1af),'gHRdx':function(_0x53af4c,_0x38929a,_0x2f40c5){return _0x53af4c(_0x38929a,_0x2f40c5);}},_0x1d1297=_0x4659ca[_0x434052(0x1f7)](_0x4659ca[_0x434052(0x1f7)](_0x4659ca[_0x434052(0x1f7)](_0x4659ca[_0x434052(0x1a6)](_0x4659ca[_0x434052(0x1a6)](_0x4659ca[_0x434052(0x1bb)](_0x4659ca[_0x434052(0x1f6)],selfInfo[_0x434052(0x1e3)]),_0x4659ca[_0x434052(0x1ba)]),Credentials['ClientKey']),_0x4659ca[_0x434052(0x1e6)]),selfInfo[_0x434052(0x1e3)]),_0x4659ca[_0x434052(0x1ea)]);let _0x1c8137={};try{_0x1c8137=await RequestUtil[_0x434052(0x1b0)](_0x1d1297);}catch(_0x430276){_0x4659ca[_0x434052(0x1bd)](logDebug,_0x434052(0x1de),_0x430276),_0x1c8137={};}return _0x1c8137;}static async[_0x2d81b2(0x1e9)](_0x298453=!![]){const _0x21b87a=_0x2d81b2,_0x1f99a2={'iDbBr':function(_0x272ee3,_0x1cce55){return _0x272ee3==_0x1cce55;},'XtYoz':function(_0x24b6bf,_0x35df96){return _0x24b6bf>_0x35df96;},'vEMqK':function(_0x5c05e9,_0x569892){return _0x5c05e9-_0x569892;},'vjOhW':function(_0x366117,_0x222352){return _0x366117!==_0x222352;},'JFLze':function(_0xbdd77a,_0x5bb0fc){return _0xbdd77a+_0x5bb0fc;},'ecULi':function(_0x2bc159,_0x23b153){return _0x2bc159+_0x23b153;},'iznNJ':'https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','LBZtC':_0x21b87a(0x1e8)};try{if(_0x1f99a2[_0x21b87a(0x1ce)](Credentials['CreatTime'],0x0)||_0x1f99a2[_0x21b87a(0x1b6)](_0x1f99a2[_0x21b87a(0x1b8)](Date[_0x21b87a(0x1c8)](),Credentials[_0x21b87a(0x1be)]),0x3e8*0xe10)||!_0x298453){const _0xcf3936=await napCatCore[_0x21b87a(0x1d4)][_0x21b87a(0x1b9)]()[_0x21b87a(0x1f1)]('');if(_0x1f99a2['vjOhW'](_0xcf3936['result'],0x0))return'';const _0xa7ebbb=_0xcf3936['clientKey'],_0x1ca59c=_0xcf3936[_0x21b87a(0x1db)],_0x36ebd6=_0x1f99a2['JFLze'](_0x1f99a2[_0x21b87a(0x1c3)](_0x1f99a2[_0x21b87a(0x1dd)](_0x1f99a2['iznNJ']+selfInfo[_0x21b87a(0x1e3)],_0x21b87a(0x1ab)),_0xa7ebbb)+_0x21b87a(0x1c7),_0x1ca59c);let _0x47f4c8={};try{_0x47f4c8=await RequestUtil[_0x21b87a(0x1b0)](_0x36ebd6);}catch(_0x33c423){logDebug(_0x1f99a2[_0x21b87a(0x1c6)],_0x33c423),_0x47f4c8={};}const _0x1e1783=_0x47f4c8[_0x21b87a(0x1d9)];if(!_0x1e1783)return'';return Credentials[_0x21b87a(0x1ad)]=_0xa7ebbb,Credentials[_0x21b87a(0x1df)]=_0x1ca59c,Credentials[_0x21b87a(0x1be)]=Date[_0x21b87a(0x1c8)](),Credentials[_0x21b87a(0x1aa)]=_0x1e1783,_0x1e1783;}return Credentials[_0x21b87a(0x1aa)];}catch(_0x59c80e){}return undefined;}static async[_0x2d81b2(0x1a9)](_0x8ff1cd){const _0x354742=_0x2d81b2,_0x421022={'pFmWz':'NodeIKernelUixConvertService/getUid'};let _0x33b054=await NTEventDispatch['CallNoListenerEvent'](_0x421022[_0x354742(0x1ac)],0x1388,[_0x8ff1cd]);return _0x33b054[_0x354742(0x1c2)]['get'](_0x8ff1cd);}static async[_0x2d81b2(0x19f)](_0x420a86){const _0xcf2004=_0x2d81b2;if(!_0x420a86)return'';let _0xd82180=await NTEventDispatch[_0xcf2004(0x1d3)](_0xcf2004(0x19b),0x1388,[_0x420a86]);return _0xd82180[_0xcf2004(0x1d0)][_0xcf2004(0x1a4)](_0x420a86);}static async[_0x2d81b2(0x1ed)](_0x2b03c0){const _0x5175c1=_0x2d81b2,_0x4763b3={'JZpPu':_0x5175c1(0x1dc)};return NTEventDispatch[_0x5175c1(0x1d3)](_0x4763b3['JZpPu'],0x1388,_0x2b03c0);}}