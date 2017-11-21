var self;
var global=require("global");
cc.Class({
    extends: cc.Component,

    properties: {
       quickStart:{
           default:null,
           type:cc.Node
       },
       jingjie:{
            default:null,
            type:cc.Node
        },
        zhenba:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        self.quickStart.on(cc.Node.EventType.TOUCH_START,self.clickQuickStart);
        self.jingjie.on(cc.Node.EventType.TOUCH_START,self.clickJingJie);
        self.zhenba.on(cc.Node.EventType.TOUCH_START,self.clickZhenBa);

        // cc.director.preloadScene('game', function () {
        //     //场景的预加载
        //     cc.log('Next scene preloaded');
        // });
    },

    onDestroy:function(){
        self.quickStart.off(cc.Node.EventType.TOUCH_START,self.clickQuickStart);
        self.jingjie.off(cc.Node.EventType.TOUCH_START,self.clickJingJie);
        self.zhenba.off(cc.Node.EventType.TOUCH_START,self.clickZhenBa);
    },

    clickQuickStart:function(){
        global.diFen=500;
        cc.director.loadScene('game');
    },

    clickJingJie:function(){
        global.diFen=500;
        cc.director.loadScene('game');
    },

    clickZhenBa:function(){
        global.diFen=1000;
        cc.director.loadScene('game');
    }

});
