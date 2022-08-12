<template>
  <main>
    <p class="login"><router-link to='/login'><img src="../assets/img/back.png" alt="" /></router-link> 注册</p>
    <div class="center">
      <p class="inone">
        <span>+86</span><input type="text" placeholder="请输入手机号" />
      </p>
      <p class="intwo">
        <input type="password" placeholder="请输入短信验证码" />
        <span>获取验证码</span>
      </p>

      <p class="btn"><button>注册</button></p>
      <p class="note">
        注册即表示您同意<router-link to=""
          >《孔夫子旧书网服务协议》</router-link
        >
      </p>
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
  margin-bottom: 6vh;
  margin-top: 1vh;
}

.btn {
  text-align: center;
  margin-top: 20px;
}
p input {
  border: none;
  border-bottom: 1px solid #eaeaea;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
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
.intwo {
  position: relative;
}
.intwo span {
  position: absolute;
  right: 0px;
  color: #c7c7c7;
  display: inline-block;
  padding: 6px;
  border: 1px solid #c7c7c7;
  border-radius: 5px;
  font-size: 13px;
  top: 10px;
}
.note {
  color: #999999;
  text-align: center;
  font-size: 13px;
  margin-top: 3vh;
}
.note a {
  color: #d13333;
}
.inone span {
  position: absolute;
  top: 17px;
  left: 20px;
}
.inone {
  position: relative;
}
.inone input {
  padding-left: 58px;
}
</style>