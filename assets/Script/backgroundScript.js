cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        var self=this;
        var headUrl="http://p1.ifengimg.com/a/2017_26/6b429e677db4df2_size131_w800_h532.jpg";
        cc.loader.load(headUrl,function(err,textrue){
            if(err){
                cc.error(err.message);
            }else{
            var frame=new cc.SpriteFrame(textrue);
            self.getComponent(cc.Sprite).spriteFrame=frame;
        }
        });
        

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
