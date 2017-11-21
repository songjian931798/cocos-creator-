var self;
cc.Class({
    extends: cc.Component,

    properties: {
        userHead:{
            default:null,
            type:cc.Node
        },

        userGold:cc.Label,
        userName:cc.Label
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        var userData=JSON.parse(cc.sys.localStorage.getItem('userMy'));
        cc.loader.loadRes("atlas/menu", cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(userData.userHead);
            self.userHead.getComponent(cc.Sprite).spriteFrame = frame;
        });

        self.userGold.string=userData.gold;
        self.userName.string=userData.userName;

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
