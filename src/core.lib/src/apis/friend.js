function _0x5def(_0x29930b,_0x42ec4b){const _0x452a5b=_0x452a();return _0x5def=function(_0x5def09,_0x47ffb1){_0x5def09=_0x5def09-0xde;let _0x2d5feb=_0x452a5b[_0x5def09];return _0x2d5feb;},_0x5def(_0x29930b,_0x42ec4b);}const _0x6ca25e=_0x5def;function _0x452a(){const _0x53f258=['1944754GkgpuP','getBuddyService','friendUid','142470oxebZS','getFriends','NodeIKernelBuddyListener/onBuddyListChange','buddyList','push','2296vukdSg','526PvGIQW','201156yjjnOC','225628GdRBOC','269SZEOrB','712788rcTbBq','reqTime','17217BMCZkV'];_0x452a=function(){return _0x53f258;};return _0x452a();}(function(_0x403ef3,_0x5ec930){const _0x48b9de=_0x5def,_0x2e256a=_0x403ef3();while(!![]){try{const _0x422354=parseInt(_0x48b9de(0xe2))/0x1*(parseInt(_0x48b9de(0xdf))/0x2)+parseInt(_0x48b9de(0xe3))/0x3+parseInt(_0x48b9de(0xe1))/0x4+parseInt(_0x48b9de(0xe9))/0x5+parseInt(_0x48b9de(0xe0))/0x6+parseInt(_0x48b9de(0xe6))/0x7+parseInt(_0x48b9de(0xde))/0x8*(-parseInt(_0x48b9de(0xe5))/0x9);if(_0x422354===_0x5ec930)break;else _0x2e256a['push'](_0x2e256a['shift']());}catch(_0x413046){_0x2e256a['push'](_0x2e256a['shift']());}}}(_0x452a,0x25fa9));import{napCatCore}from'@/core';import{NTEventDispatch}from'@/common/utils/EventTask';export class NTQQFriendApi{static async[_0x6ca25e(0xea)](_0x4159ba=![]){const _0x46f302=_0x6ca25e;let [_0x5b3bf5,_0x3d88bd]=await NTEventDispatch['CallNormalEvent']('NodeIKernelBuddyService/getBuddyList',_0x46f302(0xeb),0x1,0x1388,_0x4159ba);const _0x2302c6=[];for(const _0x303147 of _0x3d88bd){for(const _0x3a5d35 of _0x303147[_0x46f302(0xec)]){_0x2302c6[_0x46f302(0xed)](_0x3a5d35);}}return _0x2302c6;}static async['handleFriendRequest'](_0x31764a,_0x44b53e){const _0x4d59e1=_0x6ca25e;napCatCore['session'][_0x4d59e1(0xe7)]()?.['approvalFriendRequest']({'friendUid':_0x31764a[_0x4d59e1(0xe8)],'reqTime':_0x31764a[_0x4d59e1(0xe4)],'accept':_0x44b53e});}}