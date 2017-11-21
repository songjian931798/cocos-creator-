var self;
cc.Class({
    extends: cc.Component,

    properties: {
        userName:{
            default:null,
            type:cc.Node
        },

        userHead:{
            default:null,
            type:cc.Node
        },

        userGold:{
            default:null,
            type:cc.Node
        }

    },

    onLoad:function(){
        self=this;
    },

    initUserHead:function(headUrl){
        //初始化用户的头像
        
        cc.loader.load(headUrl,function(err,texture){
            if(err){
                cc.error(err.message);
            }else{
            var frame=new cc.SpriteFrame(texture);
            self.userHead.getComponent(cc.Sprite).spriteFrame = frame;
            }
        });       
    },

    initUserName:function(userName){
        //初始化用户姓名
        self.userName.string=userName;
    },

    initUserGold:function(userGold){
        //初始化用户的金币
        self.userGold.string=userGold;
    },

    initAllData:function(userName,headUrl,userGold){
        //一次性初始化完成
        self.initUserName(userName);
        self.initUserHead(headUrl);
        self.initUserGold(userGold);
    },

    getCurrentGoldNumber:function(){
        //获取当前用户的金币数
        return self.userGold.string;
    }
});
