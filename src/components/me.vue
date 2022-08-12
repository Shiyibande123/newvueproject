<template>
  <main>
    <p class="p1">
      <img src="../assets/img/m.png" alt="" /><img
        src="../assets/img/youshagnjiao.png"
        alt=""
      />
    </p>
    <div class="account">
      <div><img src="../assets/img/tx.gif" alt="" /></div>
      <div class="name">
        <h3> <router-link to="/login">登录</router-link></h3>
        <p>买家好评 0 | 信誉 0</p>
      </div>
    </div>

    <div class="one">
      <div>0 <br /><span> 我的竞拍</span></div>
      <div>
        0 <br />
        <span>收藏夹</span>
      </div>
      <div>
        0 <br />
        <span>足迹</span>
      </div>
    </div>
<div class="pic1">
    <img src="../assets/img/gi.gif" alt="">
</div>
<div class="myorder">
    <div class='tw'>
        <span>我的订单</span><span>查看更多<img src="../assets/img/tor.png" alt=""></span>
    </div>
    <van-grid :column-num="4">
  <van-grid-item v-for="item in list" :key="item" :icon="item.src" :text="item.title" />
</van-grid>
</div>

<div class="mypm">
    <div class='tw'>
        <span>我的拍卖</span><span>查看更多<img src="../assets/img/tor.png" alt=""></span>
    </div>
    <van-grid :column-num="4">
  <van-grid-item v-for="item in list1" :key="item" :icon="item.src" :text="item.title" />
</van-grid>
</div>

<div class="mymoney">
    <div class='tw'>
        <span>我的资金账户</span><span>查看<img src="../assets/img/tor.png" alt=""></span>
    </div>
   <div class='thmon'>
    <div><p>购书/拍卖款</p>0.00</div>
    <div><p>竞拍保证金</p>0.00</div>
    <div><p>赔付/奖励/补偿款</p>0.00</div>
   </div>
</div>

<div class="pic2">
    <img src="../assets/img/gi2.jpg" alt="">
</div>
<div class="myservice">
     <div class='tw'>
        <span>我的服务</span>
    </div>
    <van-grid :column-num="4">
  <van-grid-item v-for="item in list2" :key="item" :icon="item.src" :text="item.title" />
</van-grid>
</div>













   
  </main>
</template>
<script>
export default {
    data() {
       return{
        list:[
            {
                src:'images/dqr.png',
                title:'待确认'
            },  {
                src:'images/dfk.png',
                title:'待付款'
            },  {
                src:'images/dfh.png',
                title:'待发货'
            },{
                src:'images/dsh.png',
                title:'待收货'
            },{
                src:'images/dpj.png',
                title:'待评价'
            },{
                src:'images/dtk.png',
                title:'退货退款'
            },
        ],
        list1:[  {
                src:'images/dfk.png',
                title:'待付款'
            },  {
                src:'images/dfh.png',
                title:'待发货'
            },{
                src:'images/dsh.png',
                title:'待收货'
            },{
                src:'images/dpj.png',
                title:'待评价'
            },
        ],
        list2:[
            {
                src:'images/shdz.png',
                title:'收货地址'
            },  {
                src:'images/wddy.png',
                title:'我的订阅'
            },{
                src:'images/lxkf.png',
                title:'联系客服'
            },{
                src:'images/xyda.png',
                title:'信誉档案'
            }, {
                src:'images/jd.png',
                title:'监督与建议'
            },{
                src:'images/fk.png',
                title:'意见反馈'
            }, 
        ]
       } 
    },
}
</script>

<style scoped>
.p1 {
  text-align: right;
}
.p1 img {
  width: 7%;
  margin-left: 8vw;
}
.account img {
  border-radius: 50%;
  width: 100%;
}
.account {
  width: 100%;
  display: flex;
}
.account div:nth-of-type(1) {
  width: 19%;
  margin-right: 3vw;
}
.account .name {
  margin: auto 0px;
}
.account .name h3{
  font-weight: normal;
  margin-bottom: 8px;
}
.account .name a{
  color: #262626;
}
.account .name p {
  font-size: 12px;
  color: #666;
}
.one {
  display: flex;
  justify-content: space-around;
  background: white;
  border-radius: 12px;
  margin-top: 12px;
}
.one div {
  text-align: center;
  width: 33%;
  padding: 14px 0px;
  color: #262626;
  font-size: 15px;
}
.one span {
  display: inline-block;
  margin-top: 2px;
  font-size: 13px;
}
.pic1{
      margin-top: 13px;
}
.pic1 img,.pic2 img{
    width:100%;
    border-radius: 13px;
}


.myorder,.mypm,.mymoney,.myservice{
 border-radius: 12px;
 background: white;
 margin: 12px 0px;
}
.tw{
    display: flex;
     padding: 13px 0px 13px 14px;
    border-bottom: 1px solid #eaeaea;
    justify-content:space-between;
}
.tw span:nth-of-type(1){
    color: #262626;
    font-size: 14px;
}
.tw span:nth-of-type(2){
    color: #999;
    font-size: 13px;
}
.tw img{
    width: 20%;
    vertical-align: middle; 
}
.thmon{
    display: flex;
     padding: 15px 10px;
    justify-content: space-between;
}
.thmon{
        font-weight: 700;
    color: #1a1a1a;
}
.thmon p{
font-weight: 400;
    font-size: 13px;
    color: #666;
     margin-bottom: 8px;
}
.thmon div:nth-of-type(1),.thmon div:nth-of-type(2){
border-right: 1px solid #e9e9e9;
padding-right: 28px;
}
















main {
  padding: 13px;
  background: url("../assets/img/bg.png") no-repeat;
  background-size: 100vw;
  background-color: #f1f1f1;
  margin-bottom: 45px;
}
</style>