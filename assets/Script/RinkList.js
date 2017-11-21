const players = require('UserData').players;
var userData;
cc.Class({
    extends: cc.Component,
    properties: {
        scrollView: cc.ScrollView,
        prefabRankItem: cc.Prefab,
        rankCount: 0
    },

    // use this for initialization
    onLoad: function () {
        this.content = this.scrollView.content;
    
        userData=new Array();//存放用户数据

        if(JSON.parse(cc.sys.localStorage.getItem('userOne')).gold<1){
            var userOne={
                userName:"败家娘儿",
                gold:1000000,
                userHead:"user-image2"
            };
            cc.sys.localStorage.setItem('userOne', JSON.stringify(userOne));
            userData[0]=JSON.parse(cc.sys.localStorage.getItem('userOne'));
        }else{
            userData[0]=JSON.parse(cc.sys.localStorage.getItem('userOne'));
        }

        if(JSON.parse(cc.sys.localStorage.getItem('userTwo')).gold<1){
            var userTwo={
                userName:"丝袜诱惑",
                gold:1000000,
                userHead:"user-image4"
            };
            cc.sys.localStorage.setItem('userTwo', JSON.stringify(userTwo));
            userData[1]=JSON.parse(cc.sys.localStorage.getItem('userTwo'));
        }else{
            userData[1]=JSON.parse(cc.sys.localStorage.getItem('userTwo'));
        }

        if(JSON.parse(cc.sys.localStorage.getItem('userThree')).gold<1){
            var userThree={
                userName:"社会我宋哥",
                gold:1000000,
                userHead:"user-image5"
            };
            cc.sys.localStorage.setItem('userThree', JSON.stringify(userThree));
            userData[2]=JSON.parse(cc.sys.localStorage.getItem('userThree'));
        }else{
            userData[2]=JSON.parse(cc.sys.localStorage.getItem('userThree'));
        }

        if(JSON.parse(cc.sys.localStorage.getItem('userFour')).gold<1){
            var userFour={
                userName:"莫批话",
                gold:1000000,
                userHead:"user-image3"
            };
            cc.sys.localStorage.setItem('userFour', JSON.stringify(userFour));
            userData[3]=JSON.parse(cc.sys.localStorage.getItem('userFour'));
        }else{
            userData[3]=JSON.parse(cc.sys.localStorage.getItem('userFour'));
        }

        if(JSON.parse(cc.sys.localStorage.getItem('userMy')).gold<1){
            var userMy={
                userName:"song贱贱",
                gold:1000000,
                userHead:"circle_2"
            }
            cc.sys.localStorage.setItem('userMy', JSON.stringify(userMy));
            userData[4]=JSON.parse(cc.sys.localStorage.getItem('userMy'));
        }else{
            userData[4]=JSON.parse(cc.sys.localStorage.getItem('userMy'));
        }

        //cc.log(userData[4]);

        this.populateList();
    },


    start:function(){
        this.scrollView.scrollToTop(0,true);
    },

    populateList: function() {
        for (var i = 0; i < this.rankCount; ++i) {
            var item = cc.instantiate(this.prefabRankItem);
            item.getComponent('RinkItemScript').insertData(i, userData[i],"atlas/menu",item);
            this.content.addChild(item);
        }
    }

});
