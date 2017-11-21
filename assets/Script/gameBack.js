var self;
const global=require("global");
cc.Class({
    extends: cc.Component,

    properties: {
      
    },

    // use this for initialization
    onLoad: function () {
        if(!global.fsm){
            global.fsm=require("fsmMachine");
        };
        
        self=this;
        self.node.on(cc.Node.EventType.TOUCH_START,self.clickBack,self.node);
    },

    clickBack:function(){
        cc.director.loadScene("main");
    },

    onDestroy:function(){
        if(!global.fsm.is("ready")){
            global.fsm.goBack();
        }
        
        self.node.off(cc.Node.EventType.TOUCH_START,self.clickBack,self.node);

    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
