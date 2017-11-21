var zhuangNum=null;
const global=require("global");
const fsm=require("fsmMachine");
var self;
var actionArray;
cc.Class({
    extends: cc.Component,

    properties: {
        qiang:{
            default:null,
            type:cc.Node
        },
        noQiang:{
            default:null,
            type:cc.Node
        },
        zhuang:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        actionArray=new Array();
        actionArray[0]=cc.moveTo(1,cc.v2(-280,240));
        actionArray[1]=cc.moveTo(1,cc.v2(-100,240));
        actionArray[2]=cc.moveTo(1,cc.v2(80,240));
        actionArray[3]=cc.moveTo(1,cc.v2(260,240));
        actionArray[4]=cc.moveTo(1,cc.v2(-400,-200));

        self.zhuang.active=false;
        self.qiang.active=false;
        self.noQiang.active=false;
        fsm.onEnterRobZhuang=function(){
            //状态机处理
            self.qiang.active=true;
            self.noQiang.active=true;

        };

        fsm.onLeaveRobZhuang=function(){
            //状态机处理
            self.qiang.active=false;
            self.noQiang.active=false;

        }
        self.qiang.on(cc.Node.EventType.TOUCH_START,self.touchQiangCallBack);
        self.noQiang.on(cc.Node.EventType.TOUCH_START,self.touchNoQiangCallBack);

    },

    touchQiangCallBack:function(){
        zhuangNum=self.whoGetzhuang(5);
        fsm.goMultiple();
    },

    touchNoQiangCallBack:function(){
        zhuangNum=self.whoGetzhuang(4);
        fsm.goMultiple();
    },

    whoGetzhuang:function(number){
        self.zhuang.active=true;
        self.qiang.active=false;
        self.noQiang.active=false;
        var random=Math.floor((Math.random()*number));
        global.currentZhuang=random;
        if(random==0){
            self.zhuang.runAction(actionArray[0]);
            return true;
        }

        if(random==1){
            self.zhuang.runAction(actionArray[1]);
            return true;
        }

        if(random==2){
            self.zhuang.runAction(actionArray[2]);
            return true;
        }

        if(random==3){
            self.zhuang.runAction(actionArray[3]);
            return true;
        }
        
        if(random==4){
            self.zhuang.runAction(actionArray[4]);
            return true;
        }
    },

    getCurrentZhuang:function(){
        //返回当前当装的人的num
        return zhuangNum;
    },
    onDestroy:function(){
        self.qiang.off(cc.Node.EventType.TOUCH_START,self.touchQiangCallBack);
        self.noQiang.off(cc.Node.EventType.TOUCH_START,self.touchNoQiangCallBack);
    }


    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
