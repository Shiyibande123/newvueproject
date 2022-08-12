<template>
  <main>
    <p class="login">
      <router-link to="/me"
        ><img src="../assets/img/cancel.png" alt="" /></router-link
      >登录
    </p>
    <div class="center">
      <p class="inone">
        <input type="text" placeholder="请输入用户名/手机号/邮箱" />
      </p>
      <p class="intwo">
        <input type="password" placeholder="请输入密码" /><img
          src="../assets/img/cannotsee.png"
          alt=""
        />
      </p>
      <p class="forget"><router-link to="/register">忘记密码？</router-link></p>
      <p class="btn"><button>登录</button></p>
      <p class="two">
        <span>短信验证码登录</span
        ><span><router-link to="/register">注册</router-link></span>
      </p>
      <p class="other">
        <span></span>&nbsp; 使用社交账号登录 &nbsp;<span></span>
      </p>
      <div class="pic">
        <img src="../assets/img/qq.png" alt="" />
        <img src="../assets/img/weibo.png" alt="" />
        <img src="../assets/img/wechat.png" alt="" />
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 10px;
}
.login img {
  position: absolute;
  width: 5%;
  left: 0px;
  top: 2px;
}
.login {
  text-align: center;
  position: relative;
  margin-bottom: 10vh;
  margin-top: 1vh;
}

.btn {
  text-align: center;
}
p input {
  border: none;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
}
.forget {
  border: none;
  text-align: right;
  margin: 12px 0px;
}
.forget a {
  font-size: 13px;
  color: #999;
}
button {
  width: 100%;
  border-radius: 3px;
  background: #c7c7c7;
  border: none;
  outline: none;
  color: white;
  padding: 12px 0px;
}
/* #9E100E; */

.two {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: #666;
  margin-top: 16px;
  margin-bottom: 111px;
}
.two a {
  font-size: 13px;
  color: #666;
}
.center {
  margin: 0px 18px;
}
.other {
  color: #999999;
  font-size: 13px;
  text-align: center;
}
.other span {
  border-bottom: 1px solid #e6e6e6;
  display: inline-block;
  width: 25vw;
  position: relative;
  top: -4px;
}

.pic {
  margin-top: 25px;
}

.pic img {
  width: 13%;
  margin-right: 30px;
}
.pic img:nth-of-type(3) {
  margin-right: 0px;
}

.pic {
  text-align: center;
}
.intwo {
  position: relative;
}
.intwo img {
  position: absolute;
  right: 0px;
  width: 7%;
  top: 13px;
}
</style>