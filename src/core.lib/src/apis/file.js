const _0x573006=_0xbf54;(function(_0x2148f7,_0x2dcf77){const _0x3676a4=_0xbf54,_0x12b33a=_0x2148f7();while(!![]){try{const _0x5c1298=-parseInt(_0x3676a4(0xe9))/0x1*(parseInt(_0x3676a4(0xf2))/0x2)+-parseInt(_0x3676a4(0xe3))/0x3+-parseInt(_0x3676a4(0xec))/0x4+-parseInt(_0x3676a4(0xac))/0x5+-parseInt(_0x3676a4(0xee))/0x6*(-parseInt(_0x3676a4(0x10f))/0x7)+-parseInt(_0x3676a4(0xb0))/0x8+-parseInt(_0x3676a4(0xaf))/0x9*(-parseInt(_0x3676a4(0xcc))/0xa);if(_0x5c1298===_0x2dcf77)break;else _0x12b33a['push'](_0x12b33a['shift']());}catch(_0x24fa20){_0x12b33a['push'](_0x12b33a['shift']());}}}(_0x1ce8,0x7432a));import{ChatType,ElementType,IMAGE_HTTP_HOST,IMAGE_HTTP_HOST_NT}from'@/core/entities';function _0x1ce8(){const _0x158047=['bvIRX','getChatCacheInfo','9UJuXwa','4873408VIxJwi','&rkey=','toUpperCase','chatType','now','Fmgeh','gWSQO','JOgCC','downloadMedia\x20complete','mQYSe','CkeCW','msgId','Awjgq','clearChatCacheInfo','md5HexStr','defaultFileDownloadPath','find','getFileCacheInfo','statusCode','ext','elementId','SqbTZ','group','filePath','UDakL','eMmEO','onRichMediaDownloadComplete','util','16432560DjTJox','getFileSize','addListener','setCacheSilentScan','vsjrK','fileTypeFromFile','fileUuid','originImageUrl','hCdbG','error','hotUpdate','clearChatCache','get','addCacheScanedPaths','zMOmn','/download','Xzodq','ncsqt','WgBcM','getImageSize','clearCache','getRKey','XbxZK','148494lYQikT','getChatCacheList','copyFile','existsSync','getRichMediaFilePathForGuild','图片rkey有效','92lesPZm','downloadRichMedia','getCacheSessionPathList','3726164XxWrrb','elements','149970ecsFZs','检查rkey是否有效','picElement','catch','4298JKFgNH','hookApi\x20is\x20not\x20available','获取图片rkey...','tmp','图片url获取失败','downloadMedia','wHfiz','getStorageCleanService','MLiEA','kcNnK','图片rkey获取失败','set','getHotUpdateCachePath','LpoQA','receive\x20downloadMedia\x20task','downloadPath','ibFdP','includes','getImageUrl','session','startsWith','BeHlM','ioaVw','kZVVJ','indexOf','图片rkey有误','unlink','PRkiT','getFileType','238TkLQWR','ncKme','scanCache','isAvailable','/gchatpic_new/0/0-0-','QWEpD','1146085UQzdkk'];_0x1ce8=function(){return _0x158047;};return _0x1ce8();}import _0x2b955d from'path';import _0xa98c39 from'fs';import _0x3ece71 from'fs/promises';function _0xbf54(_0x1fda41,_0x20a249){const _0x1ce8aa=_0x1ce8();return _0xbf54=function(_0xbf5403,_0xff036){_0xbf5403=_0xbf5403-0xab;let _0xc1d47=_0x1ce8aa[_0xbf5403];return _0xc1d47;},_0xbf54(_0x1fda41,_0x20a249);}import{logDebug,logError}from'@/common/utils/log';import{napCatCore}from'@/core';import{calculateFileMD5}from'@/common/utils/file';import*as _0x4d1008 from'file-type';import{MsgListener}from'@/core/listeners';import _0x1755a6 from'image-size';import{sessionConfig}from'@/core/sessionConfig';import{hookApi}from'@/core/external/hook';import{randomUUID}from'crypto';import{AsyncQueue}from'@/common/utils/AsyncQueue';import{sleep}from'@/common/utils/helper';import _0x4a4a98 from'https';let privateImageRKey='',groupImageRKey='',lastGetPrivateRKeyTime=0x0,lastGetGroupRKeyTime=0x0;const rkeyExpireTime=0x3e8*0x3c*0x1e,getRKeyTaskQueue=new AsyncQueue(),downloadMediaTasks=new Map(),downloadMediaListener=new MsgListener();downloadMediaListener[_0x573006(0xca)]=_0x1d77fa=>{for(const [_0x5cb0ac,_0x1f41ea]of downloadMediaTasks){_0x1f41ea(_0x1d77fa),downloadMediaTasks['delete'](_0x5cb0ac);}},setTimeout(()=>{napCatCore['onLoginSuccess'](()=>{const _0x21746b=_0xbf54;napCatCore[_0x21746b(0xce)](downloadMediaListener);});},0x64);export class NTQQFileApi{static async[_0x573006(0x10e)](_0x206949){const _0x16c137=_0x573006;return _0x4d1008[_0x16c137(0xd1)](_0x206949);}static async[_0x573006(0xe5)](_0x546936,_0x443f53){const _0x542919=_0x573006;await napCatCore['util'][_0x542919(0xe5)](_0x546936,_0x443f53);}static async[_0x573006(0xcd)](_0x93cab9){const _0x3dce1f=_0x573006;return await napCatCore[_0x3dce1f(0xcb)]['getFileSize'](_0x93cab9);}static async['uploadFile'](_0x1671db,_0x40f8b9=ElementType['PIC'],_0x3a3aec=0x0){const _0x245be1=_0x573006,_0x140a9c={'gWSQO':function(_0x26f691,_0x5ad477){return _0x26f691(_0x5ad477);},'LpoQA':function(_0x7fd6e5,_0x5956bc){return _0x7fd6e5===_0x5956bc;}},_0xef7ff8=await _0x140a9c[_0x245be1(0xb6)](calculateFileMD5,_0x1671db);let _0x1b75a4=(await NTQQFileApi[_0x245be1(0x10e)](_0x1671db))?.[_0x245be1(0xc3)]||'';_0x1b75a4&&(_0x1b75a4='.'+_0x1b75a4);let _0x456d15=''+_0x2b955d['basename'](_0x1671db);_0x140a9c[_0x245be1(0xff)](_0x456d15[_0x245be1(0x10a)]('.'),-0x1)&&(_0x456d15+=_0x1b75a4);const _0x210423=napCatCore[_0x245be1(0x105)]['getMsgService']()[_0x245be1(0xe7)]({'md5HexStr':_0xef7ff8,'fileName':_0x456d15,'elementType':_0x40f8b9,'elementSubType':_0x3a3aec,'thumbSize':0x0,'needCreate':!![],'downloadType':0x1,'file_uuid':''});await NTQQFileApi['copyFile'](_0x1671db,_0x210423);const _0x30fbcc=await NTQQFileApi[_0x245be1(0xcd)](_0x1671db);return{'md5':_0xef7ff8,'fileName':_0x456d15,'path':_0x210423,'fileSize':_0x30fbcc,'ext':_0x1b75a4};}static async[_0x573006(0xf7)](_0x20d9ac,_0x237b74,_0x42c4f7,_0x467fcc,_0x47963f,_0x1c3a43,_0x58079c=0x3e8*0x3c*0x2,_0x5ee90d=![]){const _0xc42905=_0x573006,_0x69d240={'vsjrK':function(_0xc5df6b,_0xa5d596,_0x264fcf,_0x4f05d2){return _0xc5df6b(_0xa5d596,_0x264fcf,_0x4f05d2);},'Xzodq':_0xc42905(0xb8),'eMmEO':function(_0x593676,_0x4a1914){return _0x593676===_0x4a1914;},'wRxfq':function(_0x35b4ab,_0x38e47e,_0x4a8a50){return _0x35b4ab(_0x38e47e,_0x4a8a50);},'wHfiz':_0xc42905(0x101),'ibFdP':function(_0x2ecd3b){return _0x2ecd3b();},'wIsOD':function(_0x444c1f,_0x359a3d,_0x2dd226){return _0x444c1f(_0x359a3d,_0x2dd226);},'CkeCW':function(_0x18aefc,_0x36b170,_0x10deaf,_0x10eba1,_0x28564d,_0x493c69,_0x2ea770,_0x4ebe0c,_0x1c6175,_0x5e473c){return _0x18aefc(_0x36b170,_0x10deaf,_0x10eba1,_0x28564d,_0x493c69,_0x2ea770,_0x4ebe0c,_0x1c6175,_0x5e473c);},'Fmgeh':_0xc42905(0x100)};_0x69d240[_0xc42905(0xba)](logDebug,_0x69d240[_0xc42905(0xb5)],_0x20d9ac,_0x237b74,_0x42c4f7,_0x467fcc,_0x47963f,_0x1c3a43,_0x58079c,_0x5ee90d);if(_0x1c3a43&&_0xa98c39[_0xc42905(0xe6)](_0x1c3a43)){if(_0x5ee90d)try{await _0x3ece71[_0xc42905(0x10c)](_0x1c3a43);}catch(_0x205162){}else return _0x1c3a43;}return logDebug('start\x20downloadMedia',_0x20d9ac,_0x237b74,_0x42c4f7,_0x467fcc,_0x47963f,_0x1c3a43,_0x58079c,_0x5ee90d),new Promise((_0x106647,_0xd928c5)=>{const _0x4b0b6a=_0xc42905;let _0x4e3918=![];const _0x1bae7c=_0x85f914=>{const _0x40808b=_0xbf54;_0x69d240[_0x40808b(0xd0)](logDebug,_0x69d240[_0x40808b(0xdc)],_0x85f914,_0x20d9ac);if(_0x69d240[_0x40808b(0xc9)](_0x85f914[_0x40808b(0xbb)],_0x20d9ac)){_0x4e3918=!![];let _0x32adfd=_0x85f914[_0x40808b(0xc7)];if(_0x32adfd[_0x40808b(0x106)]('\x5c')){const _0x3daa31=sessionConfig[_0x40808b(0xbf)];_0x69d240['wRxfq'](logDebug,_0x69d240[_0x40808b(0xf8)],_0x3daa31),_0x32adfd=_0x2b955d['join'](_0x3daa31,_0x32adfd);}_0x106647(_0x32adfd);}};downloadMediaTasks[_0x4b0b6a(0xfd)](_0x69d240[_0x4b0b6a(0x102)](randomUUID),_0x1bae7c),_0x69d240['wIsOD'](setTimeout,()=>{!_0x4e3918&&_0xd928c5('下载超时');},_0x58079c),napCatCore['session']['getMsgService']()[_0x4b0b6a(0xea)]({'fileModelId':'0','downloadSourceType':0x0,'triggerType':0x1,'msgId':_0x20d9ac,'chatType':_0x237b74,'peerUid':_0x42c4f7,'elementId':_0x467fcc,'thumbSize':0x0,'downloadType':0x1,'filePath':_0x47963f});});}static async[_0x573006(0xdf)](_0x35fa19){const _0x5bd2d4={'wewtj':function(_0xfcfc1c,_0x3e5b4d){return _0xfcfc1c(_0x3e5b4d);},'bvIRX':function(_0x1f75a9,_0x74fb0f,_0x20e39b){return _0x1f75a9(_0x74fb0f,_0x20e39b);}};return new Promise((_0x1503a5,_0x145ba1)=>{const _0x15b111=_0xbf54;_0x5bd2d4[_0x15b111(0xad)](_0x1755a6,_0x35fa19,(_0x14aabb,_0x2d152f)=>{_0x14aabb?_0x5bd2d4['wewtj'](_0x145ba1,_0x14aabb):_0x5bd2d4['wewtj'](_0x1503a5,_0x2d152f);});});}static async[_0x573006(0x104)](_0x12a35f){const _0x43e521=_0x573006,_0x159669={'XbxZK':_0x43e521(0xd5),'UDakL':function(_0x58585b,_0x1211a8){return _0x58585b(_0x1211a8);},'kZVVJ':function(_0x5200e0,_0x11f238){return _0x5200e0(_0x11f238);},'kcNnK':_0x43e521(0xf4),'WgBcM':function(_0x5536a3,_0x320bd6){return _0x5536a3(_0x320bd6);},'mQYSe':'开始调用moeHook获取rkey','zMOmn':function(_0x354613,_0x3cfc30){return _0x354613+_0x3cfc30;},'uulkP':function(_0x5139f4,_0x4e0c7a){return _0x5139f4(_0x4e0c7a);},'QWEpD':_0x43e521(0x10b),'BeHlM':function(_0x168058,_0x176332){return _0x168058!==_0x176332;},'hCdbG':_0x43e521(0xdb),'DZUyh':_0x43e521(0xb1),'Awjgq':_0x43e521(0xf3),'PRkiT':function(_0x43bd01,_0x4a64b5){return _0x43bd01>_0x4a64b5;},'KyZRg':function(_0x19297f,_0x17167d){return _0x19297f-_0x17167d;},'MLiEA':function(_0xd2e927,_0x403d84,_0x4070dc){return _0xd2e927(_0x403d84,_0x4070dc);},'ncKme':_0x43e521(0xfc),'ncsqt':function(_0xa4e6bd,_0x17cf65){return _0xa4e6bd+_0x17cf65;},'SqbTZ':function(_0x358ad3,_0x271ab7){return _0x358ad3||_0x271ab7;}},_0x5991e0=_0x159669[_0x43e521(0x107)](_0x12a35f['chatType'],ChatType[_0x43e521(0xc6)]),_0x4cc235=_0x12a35f[_0x43e521(0xed)][_0x43e521(0xc0)](_0x212fd2=>!!_0x212fd2['picElement']);if(!_0x4cc235)return'';const _0x5d026c=_0x4cc235[_0x43e521(0xf0)][_0x43e521(0xd3)],_0x4b523f=_0x4cc235['picElement'][_0x43e521(0xbe)],_0x4d48f5=_0x4cc235[_0x43e521(0xf0)]['md5HexStr'],_0x3a9cf4=_0x4cc235['picElement'][_0x43e521(0xd2)],_0x45793a=_0xa3a3a3=>{const _0x431d22=_0x43e521;_0x5991e0?(privateImageRKey=_0xa3a3a3,lastGetPrivateRKeyTime=Date[_0x431d22(0xb4)]()):(groupImageRKey=_0xa3a3a3,lastGetGroupRKeyTime=Date[_0x431d22(0xb4)]());};if(_0x5d026c){if(_0x5d026c[_0x43e521(0x106)](_0x159669[_0x43e521(0xd4)])){if(_0x5d026c[_0x43e521(0x103)](_0x159669['DZUyh']))return _0x159669[_0x43e521(0xda)](IMAGE_HTTP_HOST_NT,_0x5d026c);if(!hookApi[_0x43e521(0x112)]())return _0x159669[_0x43e521(0xde)](logDebug,_0x159669[_0x43e521(0xbc)]),'';const _0x4c23af=async()=>{const _0x2065cf=_0x43e521,_0x252bc1={'ioaVw':function(_0x5d58ba,_0x291f37){const _0x41a275=_0xbf54;return _0x159669[_0x41a275(0xc8)](_0x5d58ba,_0x291f37);},'fMgys':function(_0x356b0b,_0x2d22b5){return _0x356b0b(_0x2d22b5);}};_0x159669[_0x2065cf(0x109)](logDebug,_0x159669[_0x2065cf(0xfb)]),NTQQFileApi['downloadMedia'](_0x12a35f[_0x2065cf(0xbb)],_0x12a35f[_0x2065cf(0xb3)],_0x12a35f['peerUid'],_0x4cc235[_0x2065cf(0xc4)],'',_0x4cc235['picElement']['sourcePath'],0x3e8*0x1e,![])['then'](_0x5ab3c5=>{})[_0x2065cf(0xf1)](logError),await _0x159669['UDakL'](sleep,0x3e8),_0x159669['WgBcM'](logDebug,_0x159669[_0x2065cf(0xb9)]);const _0x5c20ca=hookApi[_0x2065cf(0xe1)]()||'',_0x113808=_0x159669[_0x2065cf(0xda)](IMAGE_HTTP_HOST_NT+_0x5d026c,_0x5c20ca);if(_0x5c20ca)try{logDebug(_0x2065cf(0xef),_0x113808),await new Promise((_0x60dd70,_0x381ff7)=>{const _0x12c1a7=_0x2065cf;_0x4a4a98[_0x12c1a7(0xd8)](_0x113808,_0x470a21=>{const _0x4ed582=_0x12c1a7;_0x470a21[_0x4ed582(0xc2)]!==0xc8?_0x252bc1[_0x4ed582(0x108)](_0x381ff7,_0x4ed582(0xfc)):_0x252bc1['fMgys'](_0x60dd70,_0x470a21);})['on'](_0x159669[_0x12c1a7(0xe2)],_0x51f444=>{_0x381ff7(_0x51f444);});}),logDebug(_0x2065cf(0xe8),_0x113808),_0x159669['uulkP'](_0x45793a,_0x5c20ca);}catch(_0x30a9ae){return logError(_0x159669[_0x2065cf(0xab)],_0x113808,_0x30a9ae),'';}return _0x5c20ca;},_0xbcdf3e=new Promise((_0x67751a,_0x3fa937)=>{const _0x4eb765={'JOgCC':function(_0x187241,_0x89c266){return _0x159669['uulkP'](_0x187241,_0x89c266);}};getRKeyTaskQueue['addTask'](async()=>{const _0x8c062f=_0xbf54,_0x2f970f=await _0x4c23af();_0x4eb765[_0x8c062f(0xb7)](_0x67751a,_0x2f970f);});}),_0x2436f2=_0x5991e0?privateImageRKey:groupImageRKey,_0x1dcd9f=_0x5991e0?lastGetPrivateRKeyTime:lastGetGroupRKeyTime;if(_0x159669[_0x43e521(0x10d)](_0x159669['KyZRg'](Date['now'](),_0x1dcd9f),rkeyExpireTime)||!_0x2436f2){const _0x274d5d=await _0xbcdf3e;if(_0x274d5d)return _0x159669[_0x43e521(0xda)](IMAGE_HTTP_HOST_NT,_0x5d026c)+(''+_0x274d5d);else _0x159669['MLiEA'](logError,_0x159669[_0x43e521(0x110)],_0x5d026c);}if(_0x2436f2)return _0x159669['ncsqt'](_0x159669[_0x43e521(0xdd)](IMAGE_HTTP_HOST_NT,_0x5d026c),''+_0x2436f2);return'';}else return IMAGE_HTTP_HOST+_0x5d026c;}else{if(_0x159669[_0x43e521(0xc5)](_0x4d48f5,_0x4b523f))return IMAGE_HTTP_HOST+_0x43e521(0x113)+(_0x4d48f5||_0x4b523f)[_0x43e521(0xb2)]()+'/0';}return _0x159669[_0x43e521(0xfa)](logDebug,_0x43e521(0xf6),_0x12a35f),'';}}export class NTQQFileCacheApi{static async[_0x573006(0xcf)](_0x22beb8=!![]){return'';}static[_0x573006(0xeb)](){return'';}static[_0x573006(0xe0)](_0x4347ea=[_0x573006(0xf5),_0x573006(0xd6)]){const _0x6cdff6=_0x573006;return napCatCore[_0x6cdff6(0x105)][_0x6cdff6(0xf9)]()['clearCacheDataByKeys'](_0x4347ea);}static['addCacheScannedPaths'](_0x48d3b6={}){const _0x3ac48c=_0x573006;return napCatCore['session']['getStorageCleanService']()[_0x3ac48c(0xd9)](_0x48d3b6);}static[_0x573006(0x111)](){const _0x38ebeb=_0x573006;return napCatCore[_0x38ebeb(0x105)][_0x38ebeb(0xf9)]()[_0x38ebeb(0x111)]();}static[_0x573006(0xfe)](){return'';}static['getDesktopTmpPath'](){return'';}static[_0x573006(0xe4)](_0x4002c9,_0x1d6191=0x3e8,_0x43aff3=0x0){const _0x3ea9dd=_0x573006;return napCatCore['session'][_0x3ea9dd(0xf9)]()[_0x3ea9dd(0xae)](_0x4002c9,_0x1d6191,0x1,_0x43aff3);}static[_0x573006(0xc1)](_0x4e744e,_0x166903=0x3e8,_0x174b96){const _0x2e78f6=_0x174b96?_0x174b96:{'fileType':_0x4e744e};}static async[_0x573006(0xd7)](_0x5ab93b=[],_0x3d2ff7=[]){const _0x52ae3a=_0x573006;return napCatCore[_0x52ae3a(0x105)][_0x52ae3a(0xf9)]()[_0x52ae3a(0xbd)](_0x5ab93b,_0x3d2ff7);}}