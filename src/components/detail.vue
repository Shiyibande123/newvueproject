<template>
  <main>
    <div class="main">
      <div class="top">
        <van-swipe @change="onChange" class="lbcenter">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/5</div>
          </template>
        </van-swipe>

        <p>
          <router-view></router-view>
          <router-link to="/list">
            <img src="../assets/img/back2.png" alt="" class="img1"
          /></router-link>
          <img src="../assets/img/blackcart.png" alt="" class="img2" />
          <img src="../assets/img/blackmore.png" alt="" class="img3" />
        </p>
      </div>
    </div>

    <div class="center1">
      <img src="../assets/img/centerred.png" alt="" class="img4" />
      <h3>三国演义 连环画（60册全）</h3>
      <p class="money">
        <span>￥ 1 2 6 </span><span class="jiupin">九品</span>
      </p>
      <p class="only">仅一件</p>
    </div>
    <div class="fenge"></div>
    <div class="center1">
      <p class="address">上海长宁</p>
      <p class="fl">
        <span class="to">送至</span
        ><van-cell is-link title="广西崇左市" @click="show = true" class="pl" />
      </p>
      <p class="fl">
        <span class="to">运费</span
        ><van-cell
          is-link
          title="快递 ￥20.00"
          @click="show1 = true"
          class="pl"
        />
      </p>
      <p class="fl">
        <span class="to1"
          ><img src="../assets/img/kongwangbaoz .png" alt="" /></span
        ><van-cell
          is-link
          title="认证卖家 担保交易 快速发货 售后保障"
          @click="show2 = true"
          class="promise pl"
        />
      </p>
      <van-action-sheet
        title="配送至"
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
      />
      <van-action-sheet v-model="show1" title="运费">
        <div class="content">内容</div>
      </van-action-sheet>
      <van-action-sheet v-model="show2" title="孔夫子旧书网交易保障">
        <div class="content">内容</div>
      </van-action-sheet>
    </div>
    <div class="fenge"></div>
    <div class="center1">
      <div class="p">
        <p>
          <span class="p1">作者</span><span class="p2">上海人民美术出版社</span>
        </p>
        <p>
          <span class="p1">出版社</span
          ><span class="p2">上海人民美术出版社</span>
        </p>
        <p><span class="p1">年代</span><span class="p2">不详</span></p>
        <p><span class="p1">装帧</span><span class="p2">其他</span></p>
        <p><span class="p1">货号</span><span class="p2">AQ-5</span></p>
        <p>
          <span class="p1">上书时间</span><span class="p2">2021-09-26</span>
        </p>
      </div>
    </div>
    <div class="fenge1">
      <p>——&nbsp;&nbsp;&nbsp;商品详情&nbsp;&nbsp;&nbsp;——</p>
    </div>
    <div class="detailimg">
      <img src="../assets/img/logo.png" alt="" />
      <h3>品相描述：九品</h3>
      <img v-for="(img, index) in images" v-lazy="img" :key="index" />
      <h4>配送说明</h4>
      <p class="reference">运费价格仅供参考</p>
    </div>
    <div class="fenge1">
      <p>——&nbsp;&nbsp;&nbsp;没有更多了&nbsp;&nbsp;&nbsp;——</p>
    </div>

    <van-goods-action>
      <van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="联系" />
      <van-goods-action-icon icon="like-o" text="收藏" />
      <van-goods-action-button type="warning" text="加入购物车" to='/cart'/>
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </main>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      show: false,
      show1: false,
      show2: false,
      actions: [{ name: "广西崇左市江州区广西民族师范学院" }],
      images: ["images/pic1.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg", "images/pic6.jpg"],
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    onCancel() {
      Toast("取消");
    },
  },
};
</script>
<style scoped>
main {
  margin-bottom: 100px;
}
.main {
  background: #f3f3f3;
}
.bottom {
  background: pink;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
.lbcenter {
  text-align: center;
}
.lbcenter img {
  width: 78%;
}
.top p img {
  width: 8%;
}
.top p {
  position: absolute;
  top: 20px;
  width: 100%;
}
.top p .img3 {
  position: absolute;
  right: 6px;
}
.top p .img2 {
  position: absolute;
  right: 49px;
}
.top p .img1 {
  position: absolute;
  left: 7px;
}
.img4 {
  width: 100%;
}
.center1 {
  background: white;
  padding: 15px;
  padding-bottom: 3px;
  box-sizing: border-box;
}
.center1 h3 {
  color: #262626;
  font-size: 17px;
  margin-top: 18px;
}
.center1 .money {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
}
.center1 .money span {
  color: #9e100e;
  margin: auto 0px;
  font-size: 20px;
}
.center1 .money .jiupin {
  color: #666;
  display: inline-block;
  font-size: 12px;
  background: #f7f7f7;
  border-radius: 9px;
  padding: 9px;
}
.only {
  color: #9e100e;
  font-size: 15px;
  margin-top: 6px;
  margin-bottom: 6px;
}
.fenge {
  width: 100%;
  height: 12px;
  background: #f3f3f3;
}
.fenge1 {
  width: 100%;
  background: #f3f3f3;
  font-size: 12px;
  color: #c7c7c7;
  height: 20px;
  padding: 17px 0px;
}
.fenge1 > p {
  text-align: center;
}
.address {
  color: #999;
  font-size: 12px;
}
.fl {
  display: flex;
}
.to {
  font-size: 13px;
  width: 10%;
  margin: auto 0px;
  color: #999;
  display: inline-block;
}
.pl {
  padding-right: 0px;
}
.to1 {
  width: 30%;
  margin: auto 0px;
}
.to1 img {
  width: 100%;
}
.promise {
  font-size: 12px;
  color: #666;
}
.p1 {
  font-size: 13px;
  width: 20%;
  display: inline-block;
  color: #c7c7c7;
}
.p2 {
  color: #262626;
  font-size: 14px;
}
.p p {
  margin-bottom: 8px;
}
.detailimg img {
  width: 100%;
}
.detailimg h3 {
  font-size: 16px;
  margin: 16px 0px 35px 16px;
  box-sizing: border-box;
  color: #262626;
}
.detailimg h4 {
  font-size: 16px;
  margin: 16px 0px 15px 16px;
  box-sizing: border-box;
  color: #262626;
}

.detailimg .reference {
  margin-left: 18px;
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}
</style>