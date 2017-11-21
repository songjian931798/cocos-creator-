const global=require("global");
const fsm=require("fsmMachine");
var self;
cc.Class({
    extends: cc.Component,

    properties: {
        bei0:{
            default:null,
            type:cc.Node
        },
        bei1:{
            default:null,
            type:cc.Node
        },
        bei2:{
            default:null,
            type:cc.Node
        },
        bei3:{
            default:null,
            type:cc.Node
        },
        bei4:{
            default:null,
            type:cc.Node
        },
        selectBei:{
            default:null,
            type:cc.Node
        }
        
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        self.startBeiShuState();
        fsm.onEnterMultiple=function(){
            //状态机的处理
            self.produceBeishu();
        };
    },

    startBeiShuState:function(){
        //处理倍数的初始状态
        self.bei0.active=false;
        self.bei1.active=false;
        self.bei2.active=false;
        self.bei3.active=false;
        self.bei4.active=false;
        self.selectBei.active=false;
    },

    produceBeishu:function(){
        //用于产生倍数
        if(global.currentZhuang==0){
            //当庄是第一位
            self.bei1.active=true;
            self.bei2.active=true;
            self.bei3.active=true;
            self.selectBei.active=true;

            global.people1=self.randomBeishu();
            global.people2=self.randomBeishu();
            global.people3=self.randomBeishu();
            self.bei1.getChildByName("Label").getComponent(cc.Label).string=global.people1.toString();
            self.bei2.getChildByName("Label").getComponent(cc.Label).string=global.people2.toString();
            self.bei3.getChildByName("Label").getComponent(cc.Label).string=global.people3.toString();
            return true;
        }

        if(global.currentZhuang==1){
            //当庄是第二位
            self.bei0.active=true;
            self.bei2.active=true;
            self.bei3.active=true;
            self.selectBei.active=true;

            global.people0=self.randomBeishu();
            global.people2=self.randomBeishu();
            global.people3=self.randomBeishu();
            self.bei0.getChildByName("Label").getComponent(cc.Label).string=global.people0.toString();
            self.bei2.getChildByName("Label").getComponent(cc.Label).string=global.people2.toString();
            self.bei3.getChildByName("Label").getComponent(cc.Label).string=global.people3.toString();
            return true;
        }

        if(global.currentZhuang==2){
            //当庄是第三位
            self.bei0.active=true;
            self.bei1.active=true;
            self.bei3.active=true;
            self.selectBei.active=true;

            global.people0=self.randomBeishu();
            global.people1=self.randomBeishu();
            global.people3=self.randomBeishu();
            self.bei0.getChildByName("Label").getComponent(cc.Label).string=global.people0.toString();
            self.bei1.getChildByName("Label").getComponent(cc.Label).string=global.people1.toString();
            self.bei3.getChildByName("Label").getComponent(cc.Label).string=global.people3.toString();
            return true;
        }

        if(global.currentZhuang==3){
            //当庄是第四位
            self.bei0.active=true;
            self.bei1.active=true;
            self.bei2.active=true;
            self.selectBei.active=true;

            global.people0=self.randomBeishu();
            global.people1=self.randomBeishu();
            global.people2=self.randomBeishu();
            self.bei0.getChildByName("Label").getComponent(cc.Label).string=global.people0.toString();
            self.bei1.getChildByName("Label").getComponent(cc.Label).string=global.people1.toString();
            self.bei2.getChildByName("Label").getComponent(cc.Label).string=global.people2.toString();
            return true;
        }

        if(global.currentZhuang==4){
            //当庄是第五位，用户自己
            self.bei0.active=true;
            self.bei1.active=true;
            self.bei2.active=true;
            self.bei3.active=true;

            global.people0=self.randomBeishu();
            global.people1=self.randomBeishu();
            global.people2=self.randomBeishu();
            global.people3=self.randomBeishu();
            self.bei0.getChildByName("Label").getComponent(cc.Label).string=global.people0.toString();
            self.bei1.getChildByName("Label").getComponent(cc.Label).string=global.people1.toString();
            self.bei2.getChildByName("Label").getComponent(cc.Label).string=global.people2.toString();
            self.bei3.getChildByName("Label").getComponent(cc.Label).string=global.people3.toString();
            setTimeout(function() {
                //如果是自己当庄，那么就先让程序停止200毫秒在运行。
                fsm.goOpenCard();
            }, 200);
            return true;
        }

    },

    userClickBei1:function(){
        //用户点击1倍
        self.bei4.active=true;
        global.people4=1;
        self.bei4.getChildByName("Label").getComponent(cc.Label).string=global.people4.toString();
        self.selectBei.active=false;
        fsm.goOpenCard();
    },
    userClickBei5:function(){
        //用户点击5倍
        self.bei4.active=true;
        global.people4=5;
        self.bei4.getChildByName("Label").getComponent(cc.Label).string=global.people4.toString();
        self.selectBei.active=false;
        fsm.goOpenCard();
    },
    userClickBei10:function(){
        //用户点击10倍
        self.bei4.active=true;
        global.people4=10;
        self.bei4.getChildByName("Label").getComponent(cc.Label).string=global.people4.toString();
        self.selectBei.active=false;
        fsm.goOpenCard();
    },
    userClickBei20:function(){
        //用户点击20倍
        self.bei4.active=true;
        global.people4=20;
        self.bei4.getChildByName("Label").getComponent(cc.Label).string=global.people4.toString();
        self.selectBei.active=false;
        fsm.goOpenCard();
    },

    randomBeishu:function(){
        //用于生产1到20之间的随机整数
        return Math.ceil(Math.random()*20);
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
