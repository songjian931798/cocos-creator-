const global=require("global");
const fsm=require("fsmMachine");
var self;

var userOne={
    userName:"败家娘儿",
    gold:0,
    userHead:"user-image2"
};

var userTwo={
    userName:"丝袜诱惑",
    gold:0,
    userHead:"user-image4"
};
var userThree={
    userName:"社会我宋哥",
    gold:0,
    userHead:"user-image5"
};
var userFour={
    userName:"莫批话",
    gold:0,
    userHead:"user-image3"
};
var userMy={
    userName:"song贱贱",
    gold:0,
    userHead:"circle_2"
}

cc.Class({
    extends: cc.Component,

    properties: {
       jieSuan0:{
           default:null,
           type:cc.Node
       },
       jieSuan1:{
            default:null,
            type:cc.Node
        },
        jieSuan2:{
            default:null,
            type:cc.Node
        },
        jieSuan3:{
            default:null,
            type:cc.Node
        },
        jieSuan4:{
            default:null,
            type:cc.Node
        },

        showTipe:{
            default:null,
            type:cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        self=this;
        self.jieSuan0.active=false;
        self.jieSuan1.active=false;
        self.jieSuan2.active=false;
        self.jieSuan3.active=false;
        self.jieSuan4.active=false;
        self.showTipe.active=false;

        fsm.onEnterSettlement=function(){
            //状态机的处理
            self.jieSuanData();
            self.showTipe.active=true;
            setTimeout(function() {
                fsm.goBack();
            }, 2000);
        };

        fsm.onLeaveSettlement=function(){
            //状态机的处理
            self.jieSuan0.active=false;
            self.jieSuan1.active=false;
            self.jieSuan2.active=false;
            self.jieSuan3.active=false;
            self.jieSuan4.active=false;
            self.showTipe.active=false;

            var zhuangNode=cc.find("Canvas/qiangzhuang/zhuang");
            zhuangNode.active=false;
            zhuangNode.setPosition(cc.v2(0,0));

            cc.find("Canvas/beishu/bei0").active=false;
            cc.find("Canvas/beishu/bei1").active=false;
            cc.find("Canvas/beishu/bei2").active=false;
            cc.find("Canvas/beishu/bei3").active=false;
            cc.find("Canvas/beishu/bei4").active=false;

            cc.find("Canvas/openCard/oneNiu").active=false;
            cc.find("Canvas/openCard/twoNiu").active=false;
            cc.find("Canvas/openCard/threeNiu").active=false;
            cc.find("Canvas/openCard/fourNiu").active=false;
            cc.find("Canvas/openCard/fiveNiu").active=false;

            for(var i=0;i<25;i++){
                global.nodeArray[i].active=false;//隐藏所有的牌
            }

            global.people0=1;//第0个位置的倍数
            global.people1=1;//第二个位置的倍数
            global.people2=1;//第一个位置的倍数
            global.people3=1;//第三个位置的倍数
            global.people4=1;//第四个位置的倍数
        
            global.peopleNiu0=-1;//第0个位置的牛数
            global.peopleNiu1=-1;//第1个位置的牛数
            global.peopleNiu2=-1;//第2个位置的牛数
            global.peopleNiu3=-1;//第3个位置的牛数
            global.peopleNiu4=-1;//第4个位置的牛数

        };
    },

    jieSuanData:function(){
        //结算当前局
        var curren0=0;
        var curren1=0;
        var curren2=0;
        var curren3=0;
        var curren4=0;

        if(global.currentZhuang==0){
            //如果第一个人是庄
            if(global.peopleNiu1>global.peopleNiu0){
                curren0=curren0-global.diFen*global.people1;
                curren1=curren1+global.diFen*global.people1
            }else{
                curren0=curren0+global.diFen*global.people1;
                curren1=curren1-global.diFen*global.people1;
            }

            if(global.peopleNiu2>global.peopleNiu0){
                curren0=curren0-global.diFen*global.people2;
                curren2=curren2+global.diFen*global.people2;
            }else{
                curren0=curren0+global.diFen*global.people2;
                curren2=curren2-global.diFen*global.people2;
            }

            if(global.peopleNiu3>global.peopleNiu0){
                curren0=curren0-global.diFen*global.people3;
                curren3=curren3+global.diFen*global.people3;
            }else{
                curren0=curren0+global.diFen*global.people3;
                curren3=curren3-global.diFen*global.people3;
            }

            if(global.peopleNiu4>global.peopleNiu0){
                curren0=curren0-global.diFen*global.people4;
                curren4=curren4+global.diFen*global.people4;
            }else{
                curren0=curren0+global.diFen*global.people4;
                curren4=curren4-global.diFen*global.people4;
            }

        }else if(global.currentZhuang==1){
            //如果第二个人是庄
            if(global.peopleNiu0>global.peopleNiu1){
                curren0=curren0+global.diFen*global.people0;
                curren1=curren1-global.diFen*global.people0
            }else{
                curren0=curren0-global.diFen*global.people0;
                curren1=curren1+global.diFen*global.people0;
            }

            if(global.peopleNiu2>global.peopleNiu1){
                curren1=curren1-global.diFen*global.people2;
                curren2=curren2+global.diFen*global.people2;
            }else{
                curren1=curren1+global.diFen*global.people2;
                curren2=curren2-global.diFen*global.people2;
            }

            if(global.peopleNiu3>global.peopleNiu1){
                curren1=curren1-global.diFen*global.people3;
                curren3=curren3+global.diFen*global.people3;
            }else{
                curren1=curren1+global.diFen*global.people3;
                curren3=curren3-global.diFen*global.people3;
            }

            if(global.peopleNiu4>global.peopleNiu1){
                curren1=curren1-global.diFen*global.people4;
                curren4=curren4+global.diFen*global.people4;
            }else{
                curren1=curren1+global.diFen*global.people4;
                curren4=curren4-global.diFen*global.people4;
            }
        }else if(global.currentZhuang==2){
            //如果第三个人是庄
            if(global.peopleNiu0>global.peopleNiu2){
                curren0=curren0+global.diFen*global.people0;
                curren2=curren2-global.diFen*global.people0
            }else{
                curren0=curren0-global.diFen*global.people0;
                curren2=curren2+global.diFen*global.people0;
            }

            if(global.peopleNiu1>global.peopleNiu2){
                curren1=curren1+global.diFen*global.people1;
                curren2=curren2-global.diFen*global.people1;
            }else{
                curren1=curren1-global.diFen*global.people1;
                curren2=curren2+global.diFen*global.people1;
            }

            if(global.peopleNiu3>global.peopleNiu2){
                curren2=curren2-global.diFen*global.people3;
                curren3=curren3+global.diFen*global.people3;
            }else{
                curren2=curren2+global.diFen*global.people3;
                curren3=curren3-global.diFen*global.people3;
            }

            if(global.peopleNiu4>global.peopleNiu2){
                curren2=curren2-global.diFen*global.people4;
                curren4=curren4+global.diFen*global.people4;
            }else{
                curren2=curren2+global.diFen*global.people4;
                curren4=curren4-global.diFen*global.people4;
            }
        }else if(global.currentZhuang==3){
            //如果第四个人是庄
            if(global.peopleNiu0>global.peopleNiu3){
                curren0=curren0+global.diFen*global.people0;
                curren3=curren3-global.diFen*global.people0
            }else{
                curren0=curren0-global.diFen*global.people0;
                curren3=curren3+global.diFen*global.people0;
            }

            if(global.peopleNiu1>global.peopleNiu3){
                curren1=curren1+global.diFen*global.people1;
                curren3=curren3-global.diFen*global.people1;
            }else{
                curren1=curren1-global.diFen*global.people1;
                curren3=curren3+global.diFen*global.people1;
            }

            if(global.peopleNiu2>global.peopleNiu3){
                curren2=curren2+global.diFen*global.people2;
                curren3=curren3-global.diFen*global.people2;
            }else{
                curren2=curren2-global.diFen*global.people2;
                curren3=curren3+global.diFen*global.people2;
            }

            if(global.peopleNiu4>global.peopleNiu3){
                curren4=curren4+global.diFen*global.people4;
                curren3=curren3-global.diFen*global.people4;
            }else{
                curren4=curren4-global.diFen*global.people4;
                curren3=curren3+global.diFen*global.people4;
            }
        }else if(global.currentZhuang==4){
            //如果第五个人是庄
            if(global.peopleNiu0>global.peopleNiu4){
                curren0=curren0+global.diFen*global.people0;
                curren4=curren4-global.diFen*global.people0
            }else{
                curren0=curren0-global.diFen*global.people0;
                curren4=curren4+global.diFen*global.people0;
            }

            if(global.peopleNiu1>global.peopleNiu4){
                curren1=curren1+global.diFen*global.people1;
                curren4=curren4-global.diFen*global.people1;
            }else{
                curren1=curren1-global.diFen*global.people1;
                curren4=curren4+global.diFen*global.people1;
            }

            if(global.peopleNiu2>global.peopleNiu4){
                curren2=curren2+global.diFen*global.people2;
                curren4=curren4-global.diFen*global.people2;
            }else{
                curren2=curren2-global.diFen*global.people2;
                curren4=curren4+global.diFen*global.people2;
            }

            if(global.peopleNiu3>global.peopleNiu4){
                curren3=curren3+global.diFen*global.people3;
                curren4=curren4-global.diFen*global.people3;
            }else{
                curren3=curren3-global.diFen*global.people3;
                curren4=curren4+global.diFen*global.people3;
            }
        }

        if(curren0>=0){
            self.jieSuan0.getComponent(cc.Label).string="+"+curren0;
        }else{
            self.jieSuan0.getComponent(cc.Label).string=curren0;
        }
        self.jieSuan0.active=true;

        if(curren1>=0){
            self.jieSuan1.getComponent(cc.Label).string="+"+curren1;
        }else{
            self.jieSuan1.getComponent(cc.Label).string=curren1;
        }
        self.jieSuan1.active=true;

        if(curren2>=0){
            self.jieSuan2.getComponent(cc.Label).string="+"+curren2;
        }else{
            self.jieSuan2.getComponent(cc.Label).string=curren2;
        }
        self.jieSuan2.active=true;

        if(curren3>=0){
            self.jieSuan3.getComponent(cc.Label).string="+"+curren3;
        }else{
            self.jieSuan3.getComponent(cc.Label).string=curren3;  
        }
        self.jieSuan3.active=true;

        if(curren4>=0){
            self.jieSuan4.getComponent(cc.Label).string="+"+curren4;
        }else{
            self.jieSuan4.getComponent(cc.Label).string=curren4;
        }
        self.jieSuan4.active=true;

        global.nodeUserArray[1].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string=(parseInt(
            global.nodeUserArray[1].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren0).toString();
            userOne.gold=parseInt(global.nodeUserArray[1].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren0;
            cc.sys.localStorage.setItem('userOne', JSON.stringify(userOne));
        
        global.nodeUserArray[2].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string=(parseInt(
            global.nodeUserArray[2].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren1).toString();
            userTwo.gold=parseInt(global.nodeUserArray[2].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren1;
            cc.sys.localStorage.setItem('userTwo', JSON.stringify(userTwo));

        global.nodeUserArray[3].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string=(parseInt(
            global.nodeUserArray[3].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren2).toString();
            userThree.gold=parseInt(global.nodeUserArray[3].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren2;
            cc.sys.localStorage.setItem('userThree', JSON.stringify(userThree));

        global.nodeUserArray[4].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string=(parseInt(
            global.nodeUserArray[4].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren3).toString();
            userFour.gold=parseInt(global.nodeUserArray[4].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren3;
            cc.sys.localStorage.setItem('userFour', JSON.stringify(userFour));

        global.nodeUserArray[0].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string=(parseInt(
            global.nodeUserArray[0].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren4).toString();
            userMy.gold=parseInt(global.nodeUserArray[0].getChildByName("glode").getChildByName("glode_number").getComponent(cc.Label).string)+curren4;
            cc.sys.localStorage.setItem('userMy', JSON.stringify(userMy));
            
        self.showTipe.active=true;
    },

    overThisState:function(){
        //结束该状态。
        self.showTipe.active=false;
        self.jieSuan0.active=false;
        self.jieSuan1.active=false;
        self.jieSuan2.active=false;
        self.jieSuan3.active=false;
        self.jieSuan4.active=false;

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
