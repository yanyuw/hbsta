<template>
  <div id="root">
    <div class="banner">
      <img src="./assets/banner.png" id="banner-img" />
    </div>
    <div class="nav">
      <router-link to="/">
        <div class="nav-btn">首页</div>
      </router-link>
      <router-link to="/list/0">
        <div class="nav-btn">中国科技史新闻</div>
      </router-link>
      <router-link to="/list/1">
        <div class="nav-btn">学会新闻</div>
      </router-link>
      <router-link to="/list/2">
        <div class="nav-btn">学会党建</div>
      </router-link>
      <router-link to="/info">
        <div class="nav-btn">学会信息</div>
      </router-link>
    </div>
    <router-view />
    <div class="footer">
      <div>湖北省科学技术学会 版权所有 </div>
      <div>地址：xxxxxxxxxxxxxxxxxxxxxxx 邮政编码：xxxxxxx</div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#root {
  width: 980px;
  margin: 0 auto;
}
/* .banner{
} */
.nav {
  background-color: #2d6bbd;
  border-radius: 5px;
  margin: 20px 0;
}
.nav-btn {
  width: 195px;
  height: 50px;
  /* background-color: #2d6bbd;
  border-radius: 5px; */
  border-right: 1px solid white;
  display: inline-block;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
}
.nav a {
  text-decoration: none;
  color: white;
}
.footer{
  background-color: #2d6bbd;
  width: 100%;
  text-align: center;
  color: #ffffff;
  padding: 20px 0;
  line-height: 30px;
  border-radius: 5px;
  margin-top: 40px;
}
</style>
