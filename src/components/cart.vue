<template>
  <main>
    <div class="top">
        <router-link to='/detail'><span class='img2'><img src="../assets/img/back.png" alt=""></span></router-link>
      <span>购物车</span
      ><span class="img"
        ><img src="../assets/img/youshagnjiao.png" alt=""
      /></span>
    </div>

    <div class="con">
      <div class="store">
        <!-- <span><input type="radio"></span> -->
        <van-radio-group v-model="radio" class="il">
          <van-radio
            name="1"
            checked-color="#9e100e"
            icon-size="16px"
          ></van-radio>
        </van-radio-group>
        <span class="img2"
          ><img src="../assets/img/dianming.png" alt=""/></span>
        <span class="name"> 雅俗斋 ></span>
      </div>
      <div class="vmiddle">
        <van-radio-group v-model="radio" class="il">
          <van-radio
            name="1"
            checked-color="#9e100e"
            icon-size="16px"
          ></van-radio>
        </van-radio-group>

        <van-card
          class="il width"
          num="1"
          price="128.00"
          title="手抄本 事故周旋"
          thumb="images/b1.jpg"
        >
          <template #tags>
            <van-tag plain type="danger">六品</van-tag>
          </template>
          <template #footer>
            <van-button size="mini">编辑</van-button>
          </template>
        </van-card>
      </div>
    </div>

    <div class="bottom">
      <van-radio-group v-model="radio" class="il">
        <van-radio
          name="2"
          checked-color="#9e100e"
          icon-size="16px"
        ></van-radio> </van-radio-group
      ><span class="all">全选</span> <span class="express">不含运费</span
      ><span class="total">合计:</span><span class="price">￥128.00</span>
      <button class="btn">解算(1)</button>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
    };
  },
};
</script>
<style scoped>
main {
  background: #f3f3f3;
  height: 100vh;
}
.fenge {
  width: 100%;
  height: 12px;
  background: #f3f3f3;
}
.top {
  background: white;
  width: 100%;
  text-align: center;
  position: relative;
  height: 46px;
  line-height: 46px;
}
.top .img {
  position: absolute;

  right: 6px;
  top: 5px;
}
.top .img2 {
  position: absolute;

  left: 0px;
  top: 5px;
}
.top .img img,.top .img2 img {
  width: 50%;
  margin-right: 4px;
}
.con {
  background: white;
  border-radius: 13px;
  margin: 12px;
  padding: 20px 0px 0px 14px;
}
.store img {
  width: 5%;
  vertical-align: middle;
}
.store .name {
  font-size: 13px;
}
.il {
  display: inline-block;
  margin: auto 0px;
}
.img2 {
  margin: 0px 2px 0px 14px;
}
.vmiddle {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}
.width {
  width: 90%;
}
.bottom {
  width: 100%;
  background: white;
  display: flex;
  padding: 7px 12px;
  box-sizing: border-box;
}
.btn {
  border: none;
  outline: none;
  background: #9e100e;
  border-radius: 4px;
  height: -10%;
  padding: 11px 13px;
  color: white;
  margin-left: 24px;
}
.bottom span {
  margin: auto 0px;
}
.bottom {
  position: absolute;
  bottom: 50px;
  border-bottom: 1px solid #f3f3f3;
}
.bottom .all {
  color: #000;
  font-size: 13px;
  margin-right: 62px;
  margin-left: 6px;
  display: inline-block;
}
.bottom .express {
  color: #999;
  font-size: 12px;
  margin-right: 5px;
}
.bottom .total {
  color: #262626;
  font-size: 12px;
}
.bottom .price {
  font-size: 14px;
  color: #9e100e;
}
</style>