<template>
  <main>
    <div class="search">
      <div class="img">
        <router-link to="/index"
          ><img src="../assets/img/back.png" alt=""
        /></router-link>
      </div>

      <van-search
        v-model="value"
        shape="round"
        placeholder="商品名称 作者 出版社 ISBN"
        class="s"
      />

      <van-popover
        class="onsale"
        placement="bottom-end"
        v-model="showPopover"
        trigger="click"
        :actions="actions"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary" class="bt">在售</van-button>
        </template>
      </van-popover>
    </div>

    <van-tabs v-model="active">
      <van-tab title="商品">
        <van-sticky>
          <div class="con">
            <van-dropdown-menu class="flex1">
              <van-dropdown-item
                v-model="value1"
                :options="option1"
                title="综合"
              />

              <van-dropdown-item
                v-model="value2"
                :options="option2"
                title="价格"
              />

              <van-dropdown-item
                v-model="value2"
                :options="option3"
                title="品相"
              />

              <van-cell is-link @click="showPopup1" class="auto bshaow"
                >分类</van-cell
              >
              <van-popup
                v-model="show1"
                position="right"
                :style="{ width: '85%', height: '100%' }"
                >内容11</van-popup
              >

              <van-cell is-link @click="showPopup2" class="auto bshaow"
                >筛选</van-cell
              >
              <van-popup
                v-model="show2"
                position="right"
                :style="{ width: '85%', height: '100%' }"
                >内容22</van-popup
              >
            </van-dropdown-menu>
          </div>
        </van-sticky>

        <ul class="main">
          <p>共搜索到 <b>223</b> 件商品</p>
          <li v-for="(item, index) in list" :key="index" class="li">
            <div>
              <router-link to="/detail"
                ><img :src="item.src" alt=""
              /></router-link>
            </div>
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.address }}</p>
              <p>
                <span>￥{{ item.price }}</span
                ><span
                  >{{ item.grade }}&nbsp;&nbsp;&nbsp;&nbsp;{{
                    item.express
                  }}</span
                >
              </p>
              <p>{{ item.store }}</p>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="数目">内容 2</van-tab>
      <van-tab title="拍卖">内容 3</van-tab>
      <van-tab title="店铺">内容 4</van-tab>
    </van-tabs>
  </main>
</template>


<script>
export default {
  data() {
    return {
      active: 0,
      value1: 0,
      value: "",
      value2: "a",
      show1: false,
      show2: false,
      showPopover: false,
      // 通过 actions 属性来定义菜单选项
      actions: [{ text: "在售" }, { text: "已售" }],
      option1: [
        { text: "综合", value: 0 },
        { text: "上新", value: 1 },
        { text: "出版时间由近到远", value: 2 },
        { text: "出版时间由远到近", value: 2 },
      ],
      option2: [
        { text: "总价从低到高（含运费）", value: "a" },
        { text: "总价从高到低（含运费）", value: "b" },
        { text: "价格从低到高（不含运费）", value: "c" },
        { text: "价格从高到低（不含运费）", value: "d" },
      ],
      option3: [
        { text: "全新", value: "a" },
        { text: "九五品", value: "b" },
        { text: "九品以上", value: "c" },
        { text: "八五品以上", value: "d" },
        { text: "八品以上", value: "e" },
        { text: "七品以上", value: "f" },
        { text: "六品以上", value: "g" },
        { text: "五品以上", value: "h" },
        { text: "四品及以下", value: "i" },
        { text: "不限", value: "j" },
      ],
      list: [
        {
          src: "images/b1.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b2.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b3.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b4.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b5.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b6.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b7.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b8.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
        {
          src: "images/b1.jpg",
          title: "三国演义 连环画（60册全）",
          address: "上海人民美术出版社",
          price: "126.00",
          grade: "九品",
          express: "快递20.00",
          store: "余岩书屋 >",
        },
      ],
    };
  },
  methods: {
    showPopup1() {
      this.show1 = true;
    },
    showPopup2() {
      this.show2 = true;
    },
    onSelect(action) {
      Toast(action.text);
    },
  },
};
</script>
<style scoped>
/* main{
    background: #f3f3f3;
} */
.search {
  display: flex;
  justify-content: space-between;
}
.search .img {
  width: 10%;
  margin: auto 0px;
  text-align: right;
}
.search .img img {
  width: 60%;
}
.s {
  width: 90%;
  background: white;
}
.flex1 {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.auto {
  width: auto;
  font-size: 15px;
}
.main {
  width: 100%;
  padding: 0px 15px;
  margin-top: 15px;
  box-sizing: border-box;
}
.bshaow {
  box-shadow: 0 2px 12px rgb(100 101 102 / 12%);
  height: 48px;
}
.main > p {
  color: #888888;
  font-size: 13px;
  margin-bottom: 8px;
}
.li {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 6px;
  height: 130px;
  padding: 8px 0px;
}
.li div:nth-of-type(1) {
  width: 25%;
  margin-left: 18px;
  text-align: center;
  overflow: hidden;
}
.li div:nth-of-type(2) {
  width: 63%;
  padding-top: 2px;
}
.li img {
  height: 100%;
}
.li h3 {
  color: #262626;
  font-weight: 380;
  font-size: 15px;
}
.li p:nth-of-type(1) {
  color: #666666;
  font-size: 13px;
  margin-top: 6px;
}
.li p:nth-of-type(2) {
  color: #666666;
  font-size: 13px;
  margin-top: 23px;
}
.li p:nth-of-type(2) span:nth-of-type(1) {
  color: #9e100e;
  font-size: 18px;
  margin-right: 9px;
}
.li p:nth-of-type(2) span:nth-of-type(2) {
  color: #999999;
  font-size: 12px;
  position: relative;
  top: -2px;
}
.li p:nth-of-type(3) {
  color: #999999;
  font-size: 12px;
  margin-top: 6px;
}
.con {
  background: white;
  width: 100%;
}
.onsale {
  position: absolute;
  right: 5vw;
  top: 3px;
}
.bt {
  background-color: transparent;
  border: none;
  color: #969799;
}
</style>
<style >
.flex1 > div:nth-of-type(1) {
  display: flex;
  justify-content: space-around;
  flex-grow: 2;
}
</style>