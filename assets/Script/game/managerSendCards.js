var self;
const global=require("global");
const fsm=require("fsmMachine");
var sendActionArray;
cc.Class({
    extends: cc.Component,

    properties: {
        card:{
            default:null,
            type:cc.Prefab
        }
        
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        fsm.onEnterSendCard=function(){
            //状态机处理
            for(var i=0;i<25;i++){
                global.nodeArray[i].setPosition(cc.v2(0,0));
                if(!global.nodeArray[i].isChildOf(self.node)){
                    //如果不是该节点的子节点，那么就把这个节点添加到当前结点
                    self.node.addChild(global.nodeArray[i]);
                }else{
                    global.nodeArray[i].active=true;
                    global.nodeArray[i].getChildByName("markCard").active=true;//加上遮罩
                }
                
            }

            setTimeout(function() {
                self.startSendCardAnimation();
                //这等500豪秒后发牌
                fsm.goRobZhuang();
            }, 500);
            
        };

        sendActionArray=new Array();
        
        sendActionArray[0]=cc.moveTo(0.5,cc.v2(-310,130));
        sendActionArray[1]=cc.moveTo(0.5,cc.v2(-290,130));
        sendActionArray[2]=cc.moveTo(0.5,cc.v2(-270,130));
        sendActionArray[3]=cc.moveTo(0.5,cc.v2(-250,130));
        sendActionArray[4]=cc.moveTo(0.5,cc.v2(-230,130));

        sendActionArray[5]=cc.moveTo(0.5,cc.v2(-130,130));
        sendActionArray[6]=cc.moveTo(0.5,cc.v2(-110,130));
        sendActionArray[7]=cc.moveTo(0.5,cc.v2(-90,130));
        sendActionArray[8]=cc.moveTo(0.5,cc.v2(-70,130));
        sendActionArray[9]=cc.moveTo(0.5,cc.v2(-50,130));

        sendActionArray[10]=cc.moveTo(0.5,cc.v2(50,130));
        sendActionArray[11]=cc.moveTo(0.5,cc.v2(70,130));
        sendActionArray[12]=cc.moveTo(0.5,cc.v2(90,130));
        sendActionArray[13]=cc.moveTo(0.5,cc.v2(110,130));
        sendActionArray[14]=cc.moveTo(0.5,cc.v2(130,130));

        sendActionArray[15]=cc.moveTo(0.5,cc.v2(230,130));
        sendActionArray[16]=cc.moveTo(0.5,cc.v2(250,130));
        sendActionArray[17]=cc.moveTo(0.5,cc.v2(270,130));
        sendActionArray[18]=cc.moveTo(0.5,cc.v2(290,130));
        sendActionArray[19]=cc.moveTo(0.5,cc.v2(310,130));

        sendActionArray[20]=cc.moveTo(0.5,cc.v2(-200,-150));
        sendActionArray[21]=cc.moveTo(0.5,cc.v2(-130,-150));
        sendActionArray[22]=cc.moveTo(0.5,cc.v2(-60,-150));
        sendActionArray[23]=cc.moveTo(0.5,cc.v2(10,-150));
        sendActionArray[24]=cc.moveTo(0.5,cc.v2(80,-150));


        if(!global.nodeArray){
            global.nodeArray=new Array();
        }

        for(var i=0;i<25;i++){
            if(global.nodeArray[i]){
                global.nodeArray[i].destroy();
            }
            global.nodeArray[i]=cc.instantiate(self.card);
        }
    },

    startSendCardAnimation:function(){
        //随机生成牌的点数
        //如果以后联网的话，这个数据是从后台拿过来的，不用在在前端自动生成。
        for(var i=0;i<25;i++){
            global.nodeArray[i].runAction(sendActionArray[i]);
        }

        for(var i=0;i<25;i++){
            global.nodeArray[i].getComponent("card").initCardData( global.nodeArray[i],Math.ceil(Math.random()*13),i%4);
            if(i==20||i==21||i==22){
                global.nodeArray[i].getComponent("card").fanCard( global.nodeArray[i]); 
            }
        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
