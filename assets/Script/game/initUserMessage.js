cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // use this for initialization
    onLoad: function () {
    },

    ininUserMessage:function(userData,userNode){
        cc.loader.loadRes("atlas/menu", cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(userData.userHead);
            userNode.getChildByName("userhead").getComponent(cc.Sprite).spriteFrame = frame;
        });

        userNode.getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string=userData.gold;
        userNode.getChildByName("username").getComponent(cc.Label).string=userData.userName;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
