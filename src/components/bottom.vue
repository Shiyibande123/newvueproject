<template>
  <main>
    <router-view></router-view>
    <div class="bottom">
      <van-tabbar v-model="active">
        <van-tabbar-item replace to="/index">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? icon1.active : icon1.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/sort">
          <span>分类</span>
          <template #icon="props">
            <img :src="props.active ? icon2.active : icon2.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/cart">
          <span>购物车</span>
          <template #icon="props">
            <img :src="props.active ? icon3.active : icon3.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/me">
          <span>我的</span>
          <template #icon="props">
            <img :src="props.active ? icon4.active : icon4.inactive" />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      icon1: {
        active: "images/index.png",
        inactive: "images/index2.png",
      },
      icon2: {
        active: "images/fenlei2.png",
        inactive: "images/fenlei.png",
      },
      icon3: {
        active: "images/cart.png",
        inactive: "images/cart2.png",
      },
      icon4: {
        active: "images/me.png",
        inactive: "images/me2.png",
      },
    };
  },
};
</script>



<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}
</style>
// 加了scoped只对当前页面有效:
<style scoped>
.bottom .van-tabbar-item--active {
  color: #c21b29;
}
</style>
