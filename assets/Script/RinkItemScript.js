
cc.Class({
    extends: cc.Component,

    properties: {
        RinkNumber:cc.Label,
        RinkUserName:cc.Label,
        RinkGoldNumber:cc.Label,
    },


    insertData: function(rink,UserInfo,headName,myNode){

        cc.loader.loadRes(headName, cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(UserInfo.userHead );
            myNode.getChildByName("UserHeadSprite").getComponent(cc.Sprite).spriteFrame = frame;
        });
       
        // cc.loader.load(UserInfo.userHead,function(err,texture){
        //     if(err){
        //         cc.error(err.message);
        //     }else{
        //     var frame=new cc.SpriteFrame(texture);
        //     myNode.getChildByName("UserHeadSprite").getComponent(cc.Sprite).spriteFrame = frame;
        //     }
            
        // });
        this.RinkNumber.string=(rink+1).toString();
        this.RinkUserName.string=UserInfo.userName;
        this.RinkGoldNumber.string=UserInfo.gold.toString();

    }

});
