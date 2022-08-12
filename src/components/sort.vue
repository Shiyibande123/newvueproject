<template>
  <main>
    <div class="top">
      <h3>全部分类-孔夫子旧书网</h3>
      <img src="../assets/img/more.png" alt="" />
    </div>
    <ul class="zj">
      <van-tree-select
        height="84vh"
        :items="list"
        :main-active-index.sync="active"
        class="center"
      >
        <template #content class="l">
          <div v-if="active === 0">
            <div v-for="(item, index) in list1" :key="index" class="l">
              <p class="titl">{{ item.title }}</p>
              <img :src="item.src" alt="">
            </div>
          </div>

          <div v-if="active === 1">
            <div v-for="(item, index) in list2" :key="index" class="l">
            <p class="titl">{{ item.title }}</p>
              <p>{{ item.content }}</p>
            </div>
          </div>
        </template>
      </van-tree-select>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      active: 0,
      list: [
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
        {
          text: "特色",
        },
        {
          text: "图书",
        },
        {
          text: "艺术收藏",
        },
        {
          text: "文创周边",
        },
      ],
      list1: [
        {
            title:'特色',
          src: 'images/baozhi.png'
        },
        {
             title:'图书',
         src: 'images/book1.png'
        },
        {
             title:'艺术收藏',
         src: 'images/baozhi.png'
        },
        {
            title:'文创周边',
          src: 'images/book2.png'
        },
        {
          title:'文创周边',
          src: 'images/baozhi.png'
        },
        {
          title:'文创周边',
          src: 'images/baozhi.png'
        },
        {
       title:'文创周边',
          src: 'images/baozhi.png'
        },
        {
        title:'文创周边',
          src: 'images/baozhi.png'
        },
        {
        title:'文创周边',
          src: 'images/baozhi.png'
        },
        {
          title:'文创周边',
          src: 'images/baozhi.png'
        },
        
      ],
      list2: [
        {
            title:'特色1',
          content: "特色内容",
        },
        {
             title:'图书2',
          content: "图书内容",
        },
        {
             title:'艺术收藏3',
          content: "艺术收藏内容",
        },
        {
            title:'文创周边4',
          content: "文创周边内容",
        },
        {
          content: "特色内容",
        },
        {
          content: "图书内容",
        },
        {
          content: "艺术收藏内容",
        },
        {
          content: "文创周边内容",
        },
        {
          content: "特色内容",
        },
        {
          content: "图书内容",
        },
        
      ],
    };
  },
  methods: {
   
  },
};
</script>

<style scoped>
.current {
  background: red;
}
.top {
  /* background: pink; */
  align-items: center;
  padding: 10px 7px;
  position: fixed;
  top: 0px;
  left: 0px;
  text-align: center;
  width: 100%;
  z-index: 100;
}
.top img {
  width: 8%;
  position: absolute;
  right: 10px;
  top: 7px;
}
.top h3 {
  color: #262626;
}
.main {
  display: flex;
  height: calc(100vh - 55px);
  overflow: auto;
  margin-top: 45px;
}
.right {
  /* text-align: center; */
  width: 70%;
  height: calc(100vh - 55px);
  overflow: auto;
}
.right li {
  padding: 10px;
}
.left {
  text-align: center;
  width: 30%;
  height: calc(100vh - 55px);
  overflow: auto;
}
.left li {
  padding: 12px;
  background: greenyellow;
}
.zj {
  margin-top: 54px;
}
.center{
    text-align: center;
}
.center .l{
    text-align: left;
}
.titl{
    font-size: 12px;
       color: #666;
           margin: 10px 0px;
}
.l img{
    width:20%;
}
</style>