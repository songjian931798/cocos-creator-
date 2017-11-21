//这个js用于定义全局变量。
module.exports={
    currentZhuang:-1,//当前是谁的庄
    diFen:0,//底分

    people0:1,//第0个位置的倍数
    people1:1,//第二个位置的倍数
    people2:1,//第一个位置的倍数
    people3:1,//第三个位置的倍数
    people4:1,//第四个位置的倍数

    peopleNiu0:-1,//第0个位置的牛数
    peopleNiu1:-1,//第1个位置的牛数
    peopleNiu2:-1,//第2个位置的牛数
    peopleNiu3:-1,//第3个位置的牛数
    peopleNiu4:-1,//第4个位置的牛数

    isSendCard0:true,//玩家1是否还有钱，是否破产
    isSendCard1:true,//玩家2是否还有钱，是否破产
    isSendCard2:true,//玩家3是否还有钱，是否破产
    isSendCard3:true,//玩家4是否还有钱，是否破产

    nodeArray:null,//定义存放card节点的array
    nodeUserArray:null,//定义存放user节点的array
    fsm:null,
}
