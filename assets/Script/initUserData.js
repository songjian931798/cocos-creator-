cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // use this for initialization
    onLoad: function () {
        if(!cc.sys.localStorage.getItem("userOne")){
            this.userFirstPlayGame();
        };
    },

    userFirstPlayGame:function(){
        //用户第一次玩这个游戏，需要初始化数据
        var userOne={
            userName:"败家娘儿",
            gold:1000000,
            userHead:"user-image2"
        };

        var userTwo={
            userName:"丝袜诱惑",
            gold:1000000,
            userHead:"user-image4"
        };
        var userThree={
            userName:"社会我宋哥",
            gold:1000000,
            userHead:"user-image5"
        };
        var userFour={
            userName:"莫批话",
            gold:1000000,
            userHead:"user-image3"
        };
        var userMy={
            userName:"song贱贱",
            gold:1000000,
            userHead:"circle_2"
        }
        cc.sys.localStorage.setItem('userOne', JSON.stringify(userOne));
        cc.sys.localStorage.setItem('userTwo', JSON.stringify(userTwo));
        cc.sys.localStorage.setItem('userThree', JSON.stringify(userThree));
        cc.sys.localStorage.setItem('userFour', JSON.stringify(userFour));
        cc.sys.localStorage.setItem('userMy', JSON.stringify(userMy));
    }
});
