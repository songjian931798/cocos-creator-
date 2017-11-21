const StateMachine=require("state-machine");

var fsm =new StateMachine({
    init: 'ready',
    transitions: [
      { name: 'goSendCard',   from: 'ready',        to: 'sendCard'   },
      { name: 'goBack',       from: 'sendCard',     to: 'ready'   },
      { name: 'goRobZhuang',  from: 'sendCard',     to: 'robZhuang'  },
      { name: 'goBack',       from: 'robZhuang',    to: 'ready'   },
      {name:  'goMultiple',   from: 'robZhuang',    to: 'multiple'   },
      { name: 'goBack',       from: 'multiple',     to: 'ready'   },
      {name:  'goOpenCard',   from: 'multiple',     to: 'openCard'   },
      { name: 'goBack',       from: 'openCard',     to: 'ready'   },
      {name:  'goSettlement', from: 'openCard',     to: 'settlement' },
      {name:  'goBack',       from: 'settlement',   to: 'ready' }, 
    ]
});

module.exports=fsm;