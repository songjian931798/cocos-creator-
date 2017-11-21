var self;
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    initCardData:function(node1,cardNumber,huaColor){
        //初始化card
        //0——红桃,1——黑桃,2——方块,3——梅花
       
        if(cardNumber==1){
            node1.getChildByName("point").getComponent(cc.Label).string="A";
            if(huaColor==0){
                this.loadSpriteFrameResources("atlas/card","hongtao_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));
                this.loadSpriteFrameResources("atlas/card","hongtao_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==1){   
                this.loadSpriteFrameResources("atlas/card","heitao_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));           
                this.loadSpriteFrameResources("atlas/card","heitao_small",node1.getChildByName("suit").getComponent(cc.Sprite));               
            }else if(huaColor==2){
                this.loadSpriteFrameResources("atlas/card","fangkuai_big",node1.getChildByName("mainPic").getComponent(cc.Sprite)); 
                this.loadSpriteFrameResources("atlas/card","fangkuai_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==3){
                this.loadSpriteFrameResources("atlas/card","heimei_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));
                this.loadSpriteFrameResources("atlas/card","heimei_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }

            return true;

        }else if(cardNumber==11){
            this.loadSpriteFrameResources("atlas/card","ranker",node1.getChildByName("mainPic").getComponent(cc.Sprite));
            node1.getChildByName("point").getComponent(cc.Label).string="J";
            if(huaColor==0){
                this.loadSpriteFrameResources("atlas/card","hongtao_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==1){              
                this.loadSpriteFrameResources("atlas/card","heitao_small",node1.getChildByName("suit").getComponent(cc.Sprite));               
            }else if(huaColor==2){
                this.loadSpriteFrameResources("atlas/card","fangkuai_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==3){
                this.loadSpriteFrameResources("atlas/card","heimei_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }
            return true;
        }else if(cardNumber==12){
            this.loadSpriteFrameResources("atlas/card","kueen",node1.getChildByName("mainPic").getComponent(cc.Sprite));
            node1.getChildByName("point").getComponent(cc.Label).string="Q";
            if(huaColor==0){
                this.loadSpriteFrameResources("atlas/card","hongtao_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==1){              
                this.loadSpriteFrameResources("atlas/card","heitao_small",node1.getChildByName("suit").getComponent(cc.Sprite));               
            }else if(huaColor==2){
                this.loadSpriteFrameResources("atlas/card","fangkuai_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==3){
                this.loadSpriteFrameResources("atlas/card","heimei_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }
            return true;
        }else if(cardNumber==13){
            
            this.loadSpriteFrameResources("atlas/card","king",node1.getChildByName("mainPic").getComponent(cc.Sprite));
            node1.getChildByName("point").getComponent(cc.Label).string="K";
            if(huaColor==0){
                this.loadSpriteFrameResources("atlas/card","hongtao_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==1){              
                this.loadSpriteFrameResources("atlas/card","heitao_small",node1.getChildByName("suit").getComponent(cc.Sprite));               
            }else if(huaColor==2){
                this.loadSpriteFrameResources("atlas/card","fangkuai_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }else if(huaColor==3){
                this.loadSpriteFrameResources("atlas/card","heimei_small",node1.getChildByName("suit").getComponent(cc.Sprite));
            }
            return true;
        }else if(1<cardNumber<=10){
            
            if(huaColor==0){
                this.loadSpriteFrameResources("atlas/card","hongtao_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));
                this.loadSpriteFrameResources("atlas/card","hongtao_small",node1.getChildByName("suit").getComponent(cc.Sprite));
                node1.getChildByName("point").getComponent(cc.Label).string=cardNumber.toString();
            }else if(huaColor==1){
                this.loadSpriteFrameResources("atlas/card","heitao_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));
                this.loadSpriteFrameResources("atlas/card","heitao_small",node1.getChildByName("suit").getComponent(cc.Sprite));
                node1.getChildByName("point").getComponent(cc.Label).string=cardNumber.toString();
            }else if(huaColor==2){
                this.loadSpriteFrameResources("atlas/card","fangkuai_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));
                this.loadSpriteFrameResources("atlas/card","fangkuai_small",node1.getChildByName("suit").getComponent(cc.Sprite));
                node1.getChildByName("point").getComponent(cc.Label).string=cardNumber.toString();
            }else if(huaColor==3){
                this.loadSpriteFrameResources("atlas/card","heimei_big",node1.getChildByName("mainPic").getComponent(cc.Sprite));
                this.loadSpriteFrameResources("atlas/card","heimei_small",node1.getChildByName("suit").getComponent(cc.Sprite));
                node1.getChildByName("point").getComponent(cc.Label).string=cardNumber.toString();
            }

            return true;

        }

    },

    loadSpriteFrameResources:function(loadUrl,spriteFrameName,spriteComponent){
        //加载spriteFrame
        cc.loader.loadRes(loadUrl, cc.SpriteAtlas, function (err, atlas) {
            var frame = atlas.getSpriteFrame(spriteFrameName);
            spriteComponent.spriteFrame = frame;
        });
    },

    fanCard:function(node1){
        //翻牌
        node1.getChildByName("markCard").active=false;
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
