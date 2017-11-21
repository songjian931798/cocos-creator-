const global=require("global");
cc.Class({
    extends: cc.Component,

    properties: {
        userNumber:{
            default:1,
            type:cc.Integer
        },

        userPre:{
            default:null,
            type:cc.Prefab
        }

    },

    // use this for initialization
    onLoad: function () {
        if(!global.nodeUserArray){
            global.nodeUserArray=new Array();
        }
        this.initUserData();
    },

    initUserData:function(){

        for(var i=0;i<this.userNumber;i++){
            if(i==0){
                // this.myPostion.setPosition(-501,-225);
                var myNode=cc.instantiate(this.userPre);
                myNode.setPosition(cc.v2(-400,-200));
                this.node.addChild(myNode);
                global.nodeUserArray[i]=myNode;
                myNode.getComponent("initUserMessage").ininUserMessage(JSON.parse(cc.sys.localStorage.getItem('userMy')),myNode);
            }

            if(i==1){
                var oneNode=cc.instantiate(this.userPre);
                oneNode.setPosition(cc.v2(-280,240));
                this.node.addChild(oneNode);
                global.nodeUserArray[i]=oneNode;
                oneNode.getComponent("initUserMessage").ininUserMessage(JSON.parse(cc.sys.localStorage.getItem('userOne')),oneNode);
            }

            if(i==2){
                var userTwo=cc.instantiate(this.userPre);
                userTwo.setPosition(cc.v2(-100,240));
                this.node.addChild(userTwo);
                global.nodeUserArray[i]=userTwo;
                userTwo.getComponent("initUserMessage").ininUserMessage(JSON.parse(cc.sys.localStorage.getItem('userTwo')),userTwo);
            }

            if(i==3){
                var userThree=cc.instantiate(this.userPre);
                userThree.setPosition(cc.v2(80,240));
                this.node.addChild(userThree);
                global.nodeUserArray[i]=userThree;
                userThree.getComponent("initUserMessage").ininUserMessage(JSON.parse(cc.sys.localStorage.getItem('userThree')),userThree);
            }

            if(i==4){
                var userFour=cc.instantiate(this.userPre);
                userFour.setPosition(cc.v2(260,240));
                this.node.addChild(userFour);
                global.nodeUserArray[i]=userFour;
                userFour.getComponent("initUserMessage").ininUserMessage(JSON.parse(cc.sys.localStorage.getItem('userFour')),userFour);
            }
        }
    },

    onDestroy:function(){
        for(var i=0;i<5;i++){
            global.nodeUserArray[i].destroy();
        }
        global.nodeUserArray.length=0;
        global.nodeUserArray=null;
        //清空存放user结点的数组。
    }

    
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
