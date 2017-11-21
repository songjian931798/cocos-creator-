const global=require("global");
const fsm=require("fsmMachine");
var suanNiuAll=0;//计算牛牛的总和。
var cycleOne=0;//如果cycleOne等于0，说明还没有填充数据
var cycleTwo=0;//如果cycleTwo等于0，说明还没有填充数据
var cycleThree=0;//如果cycleThree等于0，说明还没有填充数据
var cardOne=false;//如果cardOne等于false，说明还没有被点击
var cardTwo=false;//如果cardTwo等于false，说明还没有被点击
var cardThree=false;//如果cardThree等于false，说明还没有被点击
var cardFour=false;//如果cardFour等于false，说明还没有被点击
var cardFive=false;//如果cardFive等于false，说明还没有被点击
var self;
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
        
        niuniu:{
            default:null,
            type:cc.Node
        },
        tishi:{
            default:null,
            type:cc.Node
        },
        oneNiu:{
            default:null,
            type:cc.Node
        },
        twoNiu:{
            default:null,
            type:cc.Node
        },
        threeNiu:{
            default:null,
            type:cc.Node
        },
        fourNiu:{
            default:null,
            type:cc.Node
        },
        fiveNiu:{
            default:null,
            type:cc.Node
        },
        addNum:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        
        self.oneNiu.active=false;
        self.twoNiu.active=false;
        self.threeNiu.active=false;
        self.fourNiu.active=false;
        self.fiveNiu.active=false;
        self.addNum.active=false;
        self.niuniu.active=false;
        self.tishi.active=false;

        fsm.onEnterOpenCard=function(){
            //状态机的处理
            suanNiuAll=self.calculationNiuNiu();//计算牛牛的总和。
            cycleOne=0;//如果cycleOne等于0，说明还没有填充数据
            cycleTwo=0;//如果cycleTwo等于0，说明还没有填充数据
            cycleThree=0;//如果cycleThree等于0，说明还没有填充数据
            cardOne=false;//如果cardOne等于false，说明还没有被点击
            cardTwo=false;//如果cardTwo等于false，说明还没有被点击
            cardThree=false;//如果cardThree等于false，说明还没有被点击
            cardFour=false;//如果cardFour等于false，说明还没有被点击
            cardFive=false;//如果cardFive等于false，说明还没有被点击

            self.one.getChildByName("Label").getComponent(cc.Label).string="0";
            self.two.getChildByName("Label").getComponent(cc.Label).string="0";
            self.three.getChildByName("Label").getComponent(cc.Label).string="0";
            self.four.getChildByName("Label").getComponent(cc.Label).string="0";
            self.addNum.active=true;
            self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
            self.niuniu.active=true;
            self.tishi.active=true;

            self.openAllCard();//开牌

            global.nodeArray[20].on(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack20);
            global.nodeArray[21].on(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack21);
            global.nodeArray[22].on(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack22);
            global.nodeArray[23].on(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack23);
            global.nodeArray[24].on(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack24);
            self.niuniu.on(cc.Node.EventType.TOUCH_START,self.clickNiuNiuCallBack);
            self.tishi.on(cc.Node.EventType.TOUCH_START,self.clickTipCallBack);
        };

        fsm.onLeaveOpenCard=function(){
            //状态机处理
            self.addNum.active=false;
            self.niuniu.active=false;
            self.tishi.active=false;

            global.nodeArray[20].off(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack20);
            global.nodeArray[21].off(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack21);
            global.nodeArray[22].off(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack22);
            global.nodeArray[23].off(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack23);
            global.nodeArray[24].off(cc.Node.EventType.TOUCH_START,self.managerNodeCallBack24);
            self.niuniu.off(cc.Node.EventType.TOUCH_START,self.clickNiuNiuCallBack);
            self.tishi.off(cc.Node.EventType.TOUCH_START,self.clickTipCallBack);
        }
    },

    managerNodeCallBack20:function(){
        //处理点击节点的事件
        if(!cardOne){
            if(self.whereCycleNoData()==1){
                self.clickCardMove(-200,-140,global.nodeArray[20]);
                self.one.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardOne=true;
                cycleOne=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==2){
                self.clickCardMove(-200,-140,global.nodeArray[20]);
                self.two.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardOne=true;
                cycleTwo=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==3){
                self.clickCardMove(-200,-140,global.nodeArray[20]);
                self.three.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardOne=true;
                cycleThree=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }
        }else{
            if(self.checkNumIsEqual(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string)==1){
                self.clickCardMove(-200,-150,global.nodeArray[20]);
                self.one.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardOne=false;
                cycleOne=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string)==2){
                self.clickCardMove(-200,-150,global.nodeArray[20]);
                self.two.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardOne=false;
                cycleTwo=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string)==3){
                self.clickCardMove(-200,-150,global.nodeArray[20]);
                self.three.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardOne=false;
                cycleThree=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }
        }
        
    },

    managerNodeCallBack21:function(){
        //处理点击节点的事件
        if(!cardTwo){
            
            if(self.whereCycleNoData()==1){
                self.clickCardMove(-130,-140,global.nodeArray[21]);
                self.one.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardTwo=true;
                cycleOne=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==2){
                self.clickCardMove(-130,-140,global.nodeArray[21]);
                self.two.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardTwo=true;
                cycleTwo=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==3){
                self.clickCardMove(-130,-140,global.nodeArray[21]);
                self.three.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardTwo=true;
                cycleThree=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }
        }else{
           
            if(self.checkNumIsEqual(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string)==1){
                self.clickCardMove(-130,-150,global.nodeArray[21]);
                self.one.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardTwo=false;
                cycleOne=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string)==2){
                self.clickCardMove(-130,-150,global.nodeArray[21]);
                self.two.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardTwo=false;
                cycleTwo=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string)==3){
                self.clickCardMove(-130,-150,global.nodeArray[21]);
                self.three.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardTwo=false;
                cycleThree=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }
        }
    },
    managerNodeCallBack22:function(){
        //处理点击节点的事件
        if(!cardThree){
            if(self.whereCycleNoData()==1){
                self.clickCardMove(-60,-140,global.nodeArray[22]);
                self.one.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardThree=true;
                cycleOne=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==2){
                self.clickCardMove(-60,-140,global.nodeArray[22]);
                self.two.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardThree=true;
                cycleTwo=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==3){
                self.clickCardMove(-60,-140,global.nodeArray[22]);
                self.three.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardThree=true;
                cycleThree=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }
        }else{
           
            if(self.checkNumIsEqual(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string)==1){
                self.clickCardMove(-60,-150,global.nodeArray[22]);
                self.one.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardThree=false;
                cycleOne=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string)==2){
                self.clickCardMove(-60,-150,global.nodeArray[22]);
                self.two.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardThree=false;
                cycleTwo=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string)==3){
                self.clickCardMove(-60,-150,global.nodeArray[22]);
                self.three.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardThree=false;
                cycleThree=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }
        }
    },
    managerNodeCallBack23:function(){
        //处理点击节点的事件
        if(!cardFour){
            if(self.whereCycleNoData()==1){
                self.clickCardMove(10,-140,global.nodeArray[23]);
                self.one.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFour=true;
                cycleOne=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==2){
                self.clickCardMove(10,-140,global.nodeArray[23]);
                self.two.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFour=true;
                cycleTwo=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==3){
                self.clickCardMove(10,-140,global.nodeArray[23]);
                self.three.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFour=true;
                cycleThree=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }
        }else{
           
            if(self.checkNumIsEqual(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string)==1){
                self.clickCardMove(10,-150,global.nodeArray[23]);
                self.one.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFour=false;
                cycleOne=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string)==2){
                self.clickCardMove(10,-150,global.nodeArray[23]);
                self.two.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFour=false;
                cycleTwo=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string)==3){
                self.clickCardMove(10,-150,global.nodeArray[23]);
                self.three.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFour=false;
                cycleThree=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }
        }
    },
    managerNodeCallBack24:function(){
        //处理点击节点的事件
        if(!cardFive){
            if(self.whereCycleNoData()==1){
                self.clickCardMove(80,-140,global.nodeArray[24]);
                self.one.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFive=true;
                cycleOne=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==2){
                self.clickCardMove(80,-140,global.nodeArray[24]);
                self.two.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFive=true;
                cycleTwo=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }else if(self.whereCycleNoData()==3){
                self.clickCardMove(80,-140,global.nodeArray[24]);
                self.three.getChildByName("Label").getComponent(cc.Label).string=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string).toString();
                suanNiuAll=suanNiuAll-self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFive=true;
                cycleThree=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                if(self.whereCycleNoData()==-1){
                    self.checkHasNiu();
                }
                return true;
            }
        }else{
           
            if(self.checkNumIsEqual(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string)==1){
                self.clickCardMove(80,-150,global.nodeArray[24]);
                self.one.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFive=false;
                cycleOne=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string)==2){
                self.clickCardMove(80,-150,global.nodeArray[24]);
                self.two.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFive=false;
                cycleTwo=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }else if(self.checkNumIsEqual(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string)==3){
                self.clickCardMove(80,-150,global.nodeArray[24]);
                self.three.getChildByName("Label").getComponent(cc.Label).string="0";
                suanNiuAll=suanNiuAll+self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
                self.four.getChildByName("Label").getComponent(cc.Label).string=self.calculationCycleSum();
                cardFive=false;
                cycleThree=0;
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
                return true;
            }
        }
    },

    clickCardMove:function(x,y,cardNode){
        //点击牌移动
        cardNode.runAction(cc.moveTo(0.5,cc.v2(x,y)));
    },

    clickNiuNiuCallBack:function(){
        //点击牛牛的事件处理
        if( self.niuniu.getChildByName("Label").getComponent(cc.Label).string=="没牛"){
            //如果用户不知道直接点击了，那就是没有牛了。
            global.peopleNiu4=-1;
            self.loadNiuNiuPicture(-1,self.fiveNiu);
        }else{
            var niuNum4=self.calculationFiveCardsNiuNiu(global.nodeArray[20],global.nodeArray[21],
                global.nodeArray[22],global.nodeArray[23],global.nodeArray[24]);
                global.peopleNiu4=niuNum4;
            self.loadNiuNiuPicture(niuNum4,self.fiveNiu);
        }   

        fsm.goSettlement();//进入结算状态
    },

    clickTipCallBack:function(){
        //点击提示的事件处理
        self.addNum.active=false;//直接关掉加减
        var niuniuNum=self.calculationFiveCardsNiuNiu(global.nodeArray[20],global.nodeArray[21],global.nodeArray[22],global.nodeArray[23],global.nodeArray[24]);
        if(niuniuNum==-1){
            self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
        }else if(niuniuNum==10){
            self.niuniu.getChildByName("Label").getComponent(cc.Label).string="牛牛";
        }else{
            self.niuniu.getChildByName("Label").getComponent(cc.Label).string="牛"+niuniuNum;
        }
        
    },

    openAllCard:function(){
        //这个函数主要用于在发完牌后开牌
        for(var i=0;i<25;i++){
            global.nodeArray[i].getComponent("card").fanCard( global.nodeArray[i]);
            if(i==4){
                var niuNum0=self.calculationFiveCardsNiuNiu(global.nodeArray[0],global.nodeArray[1],global.nodeArray[2],global.nodeArray[3],global.nodeArray[4]);
                global.peopleNiu0=niuNum0;
                self.loadNiuNiuPicture(niuNum0,self.oneNiu);
            }else if(i==9){
                var niuNum1=self.calculationFiveCardsNiuNiu(global.nodeArray[5],global.nodeArray[6],
                    global.nodeArray[7],global.nodeArray[8],global.nodeArray[9]);
                    global.peopleNiu1=niuNum1;
                self.loadNiuNiuPicture(niuNum1,self.twoNiu);
            }else if(i==14){
                var niuNum2=self.calculationFiveCardsNiuNiu(global.nodeArray[10],global.nodeArray[11],
                    global.nodeArray[12],global.nodeArray[13],global.nodeArray[14]);
                    global.peopleNiu2=niuNum2;
                self.loadNiuNiuPicture(niuNum2,self.threeNiu);
            }else if(i==19){
                var niuNum3=self.calculationFiveCardsNiuNiu(global.nodeArray[15],global.nodeArray[16],
                    global.nodeArray[17],global.nodeArray[18],global.nodeArray[19]);
                    global.peopleNiu3=niuNum3;
                self.loadNiuNiuPicture(niuNum3,self.fourNiu);
            }
        }
    },


    loadNiuNiuPicture:function(niuNiuNum,niuNiuNode){
        //加载牛牛的picture
        if(niuNiuNum==-1){
           self.loaderPicture("texture/meiniu",niuNiuNode)
           return true;
        }else if(niuNiuNum==1){
            self.loaderPicture("texture/niuding",niuNiuNode)
            return true;
        }else if(niuNiuNum==2){
            self.loaderPicture("texture/niuer",niuNiuNode)
            return true;
        }else if(niuNiuNum==3){
            self.loaderPicture("texture/niusan",niuNiuNode)
            return true;
        }else if(niuNiuNum==4){
            self.loaderPicture("texture/niusi",niuNiuNode)
            return true;
        }else if(niuNiuNum==5){
            self.loaderPicture("texture/niuwu",niuNiuNode)
            return true;
        }else if(niuNiuNum==6){
            self.loaderPicture("texture/niu6",niuNiuNode)
            return true;
        }else if(niuNiuNum==7){
            self.loaderPicture("texture/niu7",niuNiuNode)
            return true;
        }else if(niuNiuNum==8){
            self.loaderPicture("texture/niu8",niuNiuNode)
            return true;
        }else if(niuNiuNum==9){
            self.loaderPicture("texture/niu9",niuNiuNode)
            return true;
        }else if(niuNiuNum==10){
            self.loaderPicture("texture/niuniu",niuNiuNode)
            return true;
        }
    },

    loaderPicture:function(loadUrl,spriteNode){
        //加载texture资源
        cc.loader.loadRes(loadUrl, cc.SpriteFrame, function (err, SpriteFrame) {
            spriteNode.getComponent(cc.Sprite).spriteFrame = SpriteFrame;
            spriteNode.active=true;
        });
    
    },

    whereCycleNoData:function(){
        //判断哪个院里面还没有填充数据
        if(cycleOne==0){
            return 1;
        }else if(cycleTwo==0){
            return 2;
        }else if(cycleThree==0){
            return 3;
        }else{
            return -1;
        }
    },

    checkNumIsEqual:function(stringNum){
        //校验当前点击的扑克牌与圆圈内的数字是否相等，如果相等，就返回相应的位置。
        if(self.switchString(stringNum).toString()==self.one.getChildByName("Label").getComponent(cc.Label).string){
            return 1;
        }else if(self.switchString(stringNum).toString()==self.two.getChildByName("Label").getComponent(cc.Label).string){
            return 2;
        }else if(self.switchString(stringNum).toString()==self.three.getChildByName("Label").getComponent(cc.Label).string){
            return 3;
        }
    },
    checkHasNiu:function(){
        //检查是否有牛
        if(self.calculationCycleSum()%10==0){
            if(suanNiuAll%10==0){
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="牛牛";
                return true;
            }else{
                self.niuniu.getChildByName("Label").getComponent(cc.Label).string="牛"+suanNiuAll%10;
                return true;
            }
        }else{
            self.niuniu.getChildByName("Label").getComponent(cc.Label).string="没牛";
        }
    },

    calculationNiuNiu:function(){
        //计算牛牛
        var oneCardNum=self.switchString(global.nodeArray[20].getChildByName("point").getComponent(cc.Label).string);
        var twoCardNum=self.switchString(global.nodeArray[21].getChildByName("point").getComponent(cc.Label).string);
        var threeCardNum=self.switchString(global.nodeArray[22].getChildByName("point").getComponent(cc.Label).string);
        var fourCardNum=self.switchString(global.nodeArray[23].getChildByName("point").getComponent(cc.Label).string);
        var fiveCardNum=self.switchString(global.nodeArray[24].getChildByName("point").getComponent(cc.Label).string);
        return oneCardNum+twoCardNum+threeCardNum+fourCardNum+fiveCardNum;
    },

    calculationFiveCardsNiuNiu:function(oneCard,twoCard,threeCard,fourCard,fiveCard){
        //计算5张牌是否有牛牛
        var niuniuNum=-1;
        var oneCardNum=self.switchString(oneCard.getChildByName("point").getComponent(cc.Label).string);
        var twoCardNum=self.switchString(twoCard.getChildByName("point").getComponent(cc.Label).string);
        var threeCardNum=self.switchString(threeCard.getChildByName("point").getComponent(cc.Label).string);
        var fourCardNum=self.switchString(fourCard.getChildByName("point").getComponent(cc.Label).string);
        var fiveCardNum=self.switchString(fiveCard.getChildByName("point").getComponent(cc.Label).string);
        var fiveCardsSum=oneCardNum+twoCardNum+threeCardNum+fourCardNum+fiveCardNum;
        cc.log(fiveCardsSum);
        //123
        if((oneCardNum+twoCardNum+threeCardNum)%10==0){
            if((fiveCardsSum-(oneCardNum+twoCardNum+threeCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                niuniuNum=(fiveCardsSum-(oneCardNum+twoCardNum+threeCardNum))%10;
            }
        }

        //124
        if((oneCardNum+twoCardNum+fourCardNum)%10==0){
            if((fiveCardsSum-(oneCardNum+twoCardNum+fourCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(oneCardNum+twoCardNum+fourCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(oneCardNum+twoCardNum+fourCardNum))%10;
                }

            }
        }

        //125
        if((oneCardNum+twoCardNum+fiveCardNum)%10==0){
            if((fiveCardsSum-(oneCardNum+twoCardNum+fiveCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(oneCardNum+twoCardNum+fiveCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(oneCardNum+twoCardNum+fiveCardNum))%10;
                }

            }
        }
        
        //134
        if((oneCardNum+threeCardNum+fourCardNum)%10==0){
            if((fiveCardsSum-(oneCardNum+threeCardNum+fourCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(oneCardNum+threeCardNum+fourCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(oneCardNum+threeCardNum+fourCardNum))%10;
                }

            }
        }

        //135
        if((oneCardNum+threeCardNum+fiveCardNum)%10==0){
            if((fiveCardsSum-(oneCardNum+threeCardNum+fiveCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(oneCardNum+threeCardNum+fiveCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(oneCardNum+threeCardNum+fiveCardNum))%10;
                }

            }
        }

        //145
        if((oneCardNum+fourCardNum+fiveCardNum)%10==0){
            if((fiveCardsSum-(oneCardNum+fourCardNum+fiveCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(oneCardNum+fourCardNum+fiveCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(oneCardNum+fourCardNum+fiveCardNum))%10;
                }

            }
        }

        //234
        if((twoCardNum+threeCardNum+fourCardNum)%10==0){
            if((fiveCardsSum-(twoCardNum+threeCardNum+fourCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(twoCardNum+threeCardNum+fourCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(twoCardNum+threeCardNum+fourCardNum))%10;
                }

            }
        }

        //235
        if((twoCardNum+threeCardNum+fiveCardNum)%10==0){
            if((fiveCardsSum-(twoCardNum+threeCardNum+fiveCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(twoCardNum+threeCardNum+fiveCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(twoCardNum+threeCardNum+fiveCardNum))%10;
                }

            }
        }

        //245
        if((twoCardNum+fourCardNum+fiveCardNum)%10==0){
            if((fiveCardsSum-(twoCardNum+fourCardNum+fiveCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(twoCardNum+fourCardNum+fiveCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(twoCardNum+fourCardNum+fiveCardNum))%10;
                }

            }
        }

        //345
        if((threeCardNum+fourCardNum+fiveCardNum)%10==0){
            if((fiveCardsSum-(threeCardNum+fourCardNum+fiveCardNum))%10==0){
                niuniuNum=10;
                return niuniuNum;
            }else{
                if((fiveCardsSum-(threeCardNum+fourCardNum+fiveCardNum))%10>niuniuNum){
                    niuniuNum=(fiveCardsSum-(threeCardNum+fourCardNum+fiveCardNum))%10;
                }

            }
        }

        return niuniuNum;

    },

    calculationCycleSum:function(){
        //计算圆圈内的数字和
        return parseInt(self.one.getChildByName("Label").getComponent(cc.Label).string)
        +parseInt(self.two.getChildByName("Label").getComponent(cc.Label).string)
        +parseInt(self.three.getChildByName("Label").getComponent(cc.Label).string);
    },

    switchString:function(stringNum){
        //处理特殊字符
        if(stringNum=="A"){
            return 1;
        }else if(stringNum=="J"){
            return 10;
        }else if(stringNum=="Q"){
            return 10;
        }else if(stringNum=="K"){
            return 10;
        }else{
            return parseInt(stringNum);
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
