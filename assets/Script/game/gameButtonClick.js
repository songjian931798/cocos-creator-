cc.Class({
    extends: cc.Component,

    properties: {
        pressScale: 1,
        nomallScale: 0,

        clickButtonMusic:{
            default:null,
            url:cc.AudioClip,
        }
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        self.button = self.getComponent(cc.Button);
        self.scaleDownAction = cc.scaleTo(self.nomallScale, self.pressScale);
        self.scaleUpAction = cc.scaleTo(self.nomallScale, this.node.scale);
        function onTouchDown (event) {
            cc.audioEngine.play(self.clickButtonMusic,false);
            this.runAction(self.scaleDownAction);
        }
        function onTouchUp (event) {
            this.runAction(self.scaleUpAction);
        }
        this.node.on('touchstart', onTouchDown, this.node);
        this.node.on('touchend', onTouchUp, this.node);
        this.node.on('touchcancel', onTouchUp, this.node);

    },
    
});
