<template>
  <main>
    <div class="top">
      <img src="../assets/img/kongwang.png" alt="" />
      <input type="text" placeholder="商品名称 作者 出版社 ISBN" />
    </div>
    <van-swipe :autoplay="1000">
      <van-swipe-item v-for="(image, index) in lists" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="four">
      <ul class="four1">
        <li>
          <img src="../assets/img/gu.png" alt="" />
          <p>线装古籍</p>
        </li>
        <li>
          <img src="../assets/img/jiu.png" alt="" />
          <p>民国旧书</p>
        </li>
        <li>
          <img src="../assets/img/mo.png" alt="" />
          <p>名人墨迹</p>
        </li>
        <li>
          <img src="../assets/img/wan.png" alt="" />
          <p>古玩杂项</p>
        </li>
        <li>
          <router-link to="/list"
            ><img src="../assets/img/wan.png" alt="" />
            <p>查看列表</p></router-link
          >
        </li>
      </ul>

      <div class="four2">
        <div class="left">
          <div class="left1">
            <p>今日上新</p>
            <p>发现新上好书</p>
          </div>
          <img src="../assets/img/cangshudan.png" alt="" />
        </div>
        <div class="right">
          <div class="right1">
            <p>书店排行榜</p>
            <p>发现口碑好店</p>
          </div>
          <img src="../assets/img/pindao.png" alt="" />
        </div>
      </div>
      <div class="four3">
        <div class="left">
          <div class="left2">
            <p>新书频道</p>
            <p>发现孔网新书</p>
          </div>
          <img src="../assets/img/paihangbang.png" alt="" />
        </div>
        <div class="right">
          <div class="right2">
            <p>藏书单</p>
            <p>为你推荐好书</p>
          </div>
          <img src="../assets/img/jinrishangxin.png" alt="" />
        </div>
      </div>
    </div>
    <div class="fenge"></div>
    <div class="recommend">
      <div class="torecommend">
        <h3>拍卖</h3>
        <div class="pmtop">
          <div class="pmleft">
            <p class="p1">全部拍卖</p>
            <p class="p2">日均4万余件拍品</p>
            <p class="p3 p4"><img src="../assets/img/pm1.png" alt="" /></p>
          </div>
          <div class="r">
            <div class="pmright">
              <div>
                <p class="p1">艺术品专场</p>
                <p class="p2">名人字画墨迹等</p>
              </div>
              <img src="../assets/img/pm2.png" alt="" />
            </div>
            <div class="xia">
              <div>
                <p class="p1">低价拍卖</p>
                <p class="p2">1元起拍捡漏</p>
              </div>
              <img src="../assets/img/pm3.png" alt="" />
            </div>
          </div>
        </div>
        <div class="pmbottom">
          <div class="pmleft1">
            <div>
              <p class="p1">珍本拍卖</p>
              <p class="p2">古籍善本</p>
            </div>
            <img src="../assets/img/pm4.png" alt="" />
          </div>
          <div class="pmright2">
            <div>
              <p class="p1">大众拍卖</p>
              <p class="p2">大家都在拍</p>
            </div>
            <img src="../assets/img/pm5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="fenge"></div>
    <div class="recommend">
      <div class="flex more">
        <h3>图书销售排行榜</h3>
        <router-link to="/list">更多 > </router-link>
      </div>
      <ul class="one">
        <li class="flex" v-for="(item, index) in list1" :key="index">
          <p class="p1"><img :src="item.src" alt="" /></p>
          <div class="prof">
            <p class="p2">{{ item.title }}</p>
            <p class="p3">{{ item.profile1 }}</p>
            <p class="p4">{{ item.profile2 }}</p>
          </div>
        </li>
      </ul>
      <div class="change">
        换一换<img src="../assets/img/change.png" alt="" />
      </div>
    </div>
    <div class="fenge"></div>
    <div class="recommend">
      <h3>为您推荐</h3>
      <div class="contain">
        <!-- 两端对齐 -->
        <van-row type="flex" justify="space-between">
          <van-col
            span="11"
            v-for="(item, index) in list2"
            :key="index"
            class="ctp1"
          >
            <img :src="item.src" alt="" />
            <div class="ctp2">
              <p>{{ item.title }}</p>
              <p>
                <span>{{ item.profile1 }}</span
                ><span>{{ item.place }}</span>
              </p>
              <p>￥ {{ item.money }}</p>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </main>
</template>




<script>
export default {
  data() {
    return {
      show: true,
      index: 0,
      lists: [
        "images/lunbo1.jpg",
        "images/lunbo2.jpg",
        "images/lunbo3.jpg",
        "images/lunbo4.jpg",
        "images/lunbo5.png",
        "images/lunbo6.jpg",
      ],
      list1: [
        {
          src: "images/rensheng.jpg",
          title: "人生不设限：我那好得不像话的生命体验",
          profile1:
            "[澳大利亚]力克·胡哲  著；彭蕙仙  译 / 天津社会科学院出版社 / 2011-06 / 平装",
          profile2:
            "没有一本书，比力克的故事，更能带给你希望！如果你怀疑自己的能力.",
        },
        {
          src: "images/hanyu.jpg",
          title: "现代汉语词典（第七版",
          profile1:
            "中国社会科学院语言研究所词典编辑室  编 / 商务印书馆 / 2016-09 / 精装",
          profile2:
            "《现代汉语词典》自1978年正式出版以来做过多次修订，以适应社会的发展.",
        },
        {
          src: "images/niujin.jpg",
          title: "牛津高阶英汉双解词典（第9版）",
          profile1:
            "[英]霍恩比  原著；李旭影  译 / 商务印书馆 / 2018-03 / 精装",
          profile2:
            "《牛津高阶英语词典》至今问世七十年，为世所公认的权威英语学习词典，惠及世界各地一代又一代学子。",
        },
      ],
      list2: [
        {
          src: "images/r1.jpg",
          title: "我的世界四本和售",
          profile1: "八五品",
          place: "天津",
          money: "10",
        },
        {
          src: "images/r2.jpg",
          title: "盗墓笔记同人志 弇",
          profile1: "九品",
          place: "桂林",
          money: "30",
        },
        {
          src: "images/r3.jpg",
          title: "金田一少年事件簿",
          profile1: "七品",
          place: "东莞",
          money: "10",
        },
        {
          src: "images/r4.jpg",
          title: "哈利·波特与混血王子",
          profile1: "九五品",
          place: "北京",
          money: "158",
        },
        {
          src: "images/r5.jpg",
          title: "抱抱丛书（9册合售）山鼠叔叔的欢送会",
          profile1: "八五品",
          place: "上海",
          money: "10",
        },
        {
          src: "images/r6.jpg",
          title: "哪咤",
          profile1: "八五品",
          place: "上海",
          money: "75",
        },
      ],
    };
  },
  methods: {
    onChange(index) {
      this.index = index;
    },
  },
};
</script>

<style scoped>
.top {
  /* padding:10px 15px; */
  display: flex;
  justify-content: space-between;
  /* background: pink; */
  margin: 10px 10px;
}
.top img {
  width: 10%;
  height: 100%;
  margin: auto 0px;
}
.top input {
  width: 85%;
  border: none;
  outline: none;
  background: url(../assets/img/fangdajing.png) no-repeat;
  background-size: 15px;
  background-position: 12px 7px;
  background-color: #f5f5f5;
  color: #aabad1;
  border-radius: 22px;
  padding: 6px 34px;
  box-sizing: border-box;
  font-size: 13px;
}
/* 轮播： */
.van-swipe .van-swipe-item img {
  width: 100%;
  height: 25vh;
}
.four {
  margin: 19px 10px;
  /* background: pink; */
}
.four1 {
  display: flex;
  margin-bottom: 25px;
}
.four1 li {
  width: 20%;
  font-size: 12px;
  color: #666;
  text-align: center;
}
.four1 li img {
  width: 70%;
}

.four2,
.four3 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.four2 .left,
.four3 .left {
  width: 49%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #fafafa;
}
.four2 .left1,
.four3 .left2 {
  padding: 10px;
  padding-right: 0px;
}
.four2 .right1,
.four3 .right2 {
  padding: 10px;
  padding-right: 0px;
}

.four2 .left1 p:nth-of-type(1),
.four3 .left2 p:nth-of-type(1),
.four2 .right1 p:nth-of-type(1),
.four3 .right2 p:nth-of-type(1) {
  color: #333;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
}
.four2 .left1 p:nth-of-type(2),
.four3 .left2 p:nth-of-type(2),
.four2 .right1 p:nth-of-type(2),
.four3 .right2 p:nth-of-type(2) {
  color: #999;
  font-size: 12px;
}
.four2 .right,
.four3 .right {
  width: 49%;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #fafafa;
}
.four2 img,
.four3 img {
  width: 25%;
  padding: 10px;
}
.fenge {
  width: 100%;
  height: 1.5vh;
  background: #f3f3f3;
}
.recommend {
  padding-top: 28px;
  margin: 0px 10px;
  /* background: pink; */
}
.recommend .torecommend {
  margin-bottom: 28px;
}
.recommend .torecommend a {
  color: #365899;
  font-size: 13px;
  display: block;
  margin-top: 9px;
}
.recommend .pmtop {
  display: flex;
  justify-content: space-between;
}
.recommend .pmbottom {
  display: flex;
  justify-content: space-between;
}

.recommend .torecommend .p1 {
  color: #333;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 5px;
}
.recommend .torecommend .p2 {
  color: #999;
  font-size: 12px;
}
.recommend .torecommend h3 {
  margin-bottom: 10px;
}
.recommend .torecommend img {
  width: 25%;
}
.recommend .torecommend .p4 img {
  width: 100%;
}
.xia {
  display: flex;
  justify-content: space-between;
  background: #fafafa;
  margin-top: 13px;
  border-radius: 3px;
  padding-left: 8px;
  padding-top: 12px;
  padding-right: 8px;
  padding-bottom: 7px;
}
.pmleft1,
.pmright2 {
  width: 49%;
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  padding-left: 8px;
  padding-top: 12px;
  box-sizing: border-box;
  padding-right: 8px;
  padding-bottom: 7px;
  background: #fafafa;
}
.pmbottom {
  margin-top: 10px;
}

.torecommend .pmleft,
.torecommend .pmright1 {
  background: #fafafa;
  width: 49%;
  border-radius: 3px;
  padding-left: 8px;
  padding-top: 12px;
  box-sizing: border-box;
}
.r {
  width: 49%;
}
.torecommend .pmright {
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  background: #fafafa;
  padding-left: 8px;
  padding-top: 12px;
  padding-right: 8px;
  padding-bottom: 7px;
}

.torecommend .p3 {
  text-align: right;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.more a {
  font-size: 13px;
  color: #365899;
  display: block;
  margin-top: 6px;
}
.more {
  margin-bottom: 10px;
}
.one .p1 {
  width: 30vw;
  text-align: center;
  margin: auto 0px;
}
.one .p1 img {
  width: 85%;
}
.prof {
  width: 63vw;
  border-bottom: 1px solid #f3f3f3;
  padding-bottom: 26px;
  padding-top: 10px;
}
.one .p2 {
  width: 63vw;
  height: 23px;
  line-height: 23px;
  font-size: 15px;
  font-weight: 700;
  color: #262626;
  overflow: hidden;
  margin-bottom: 10px;
}
.one .p3 {
  font-size: 12px;
  color: #262626;
  margin-bottom: 10px;
  line-height: 18px;
}
.one .p4 {
  color: #999;
  text-align: justify;
  font-size: 12px;
  line-height: 18px;
}
.change {
  text-align: center;
  font-size: 13px;
  padding: 18px 0px;
  color: #365899;
}
.change img {
  width: 6%;
  vertical-align: middle;
  position: relative;
  top: -2px;
}
h3 {
  color: #262626;
}
.contain {
  list-style: none;
  overflow: hidden;
  margin-top: 15px;
  /* background-color: #f3f3f3; */
}
/* .contain div:nth-of-type(1){
text-align: center;
  
}
.contain div:nth-of-type(2){
  width:100%;
  position: absolute;
  bottom:0px;
  padding: 10px;
  box-sizing: border-box;
} */
.contain p:nth-of-type(3) {
  color: #9e100e;
  margin-bottom: 5px;
}
.ctp1 {
  background: #f3f3f3;
  margin-bottom: 10px;
  border-radius: 3px;
  display: flex;
  align-items: end;
  flex-wrap: wrap;
}
.ctp2 {
  padding: 0px 10px;
}
.contain p:nth-of-type(2) {
  font-size: 12px;
  color: #999;
  display: flex;
  justify-content: space-between;
}
.contain p:nth-of-type(1) {
  font-size: 12px;
  font-size: 12px;
  color: #333;
}
.contain p {
  margin-top: 5px;
}
.four1 li a {
  font-size: 12px;
  color: #666;
}

/* .contain li {
  width: 49%;
   background: #f3f3f3;
  float:left;
  overflow: hidden;  
  position: relative;
} */
/* .contain li{
    margin-right: 7px;
    box-sizing: border-box;
    margin-bottom: 10px;
    border-radius: 3px;
    height: 44vh;
} */
/* .contain li:nth-of-type(2n) {
  margin-right: 0px;
} */
.contain img {
  /* height: 83%; */
  width: 100%;
}
main {
  margin-bottom: 100px;
}
</style>