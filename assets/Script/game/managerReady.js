var self;
const fsm=require("fsmMachine");
const global=require("global");
cc.Class({
    extends: cc.Component,

    properties: {
        one:{
            default:null,
            type:cc.Node
        },

        two:{
            default:null,
            type:cc.Node
        },
        three:{
            default:null,
            type:cc.Node
        },
        four:{
            default:null,
            type:cc.Node
        },

        diFen:cc.Label,
        
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        self.diFen.string="底分:"+global.diFen;
        self.node.on(cc.Node.EventType.TOUCH_START,self.clickReadyCallBack,self);
        fsm.onLeaveReady=function(){
            //状态机
            self.disableReadyButton();
        };

        fsm.onEnterReady=function(){
            self.showReadyButton();
        };

    },

    disableReadyButton:function(){
        //隐藏所有按钮
        self.one.active=false;
        self.two.active=false;
        self.three.active=false;
        self.four.active=false;
        self.node.active=false;
    },
    showReadyButton:function(){
        //显示所有按钮
        self.one.active=true;
        self.two.active=true;
        self.three.active=true;
        self.four.active=true;
        self.node.active=true;
    },
    clickReadyCallBack:function(){
        fsm.goSendCard();
    },

    onDestroy:function(){
        self.node.off(cc.Node.EventType.TOUCH_START,self.disableReadyButton,self);
    }
   
});
