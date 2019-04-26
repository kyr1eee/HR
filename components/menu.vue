<template>
  <div id="header">
    <div class="blur-bg" />
    <navigator ref="nav"/>
    <el-input
      class="search"
      placeholder="搜索简历"
      suffix-icon="el-icon-search" />
    <div class="jojo-bg" />
  </div>
</template>

<script>
import Navigator from './Navigator';
import User from './User';
export default {
  components: {
    Navigator
  }
}
</script>

<style>
#header {
  position: relative;
}
.blur-bg {
  position: absolute;
  z-index: 50;
  width: 100%;
  height: 70px;
  background-color: hsla(0,0%,100%,.4);
  background-image: url("../static/jojo.png");
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(6px);
}
.jojo-bg {
  width: 100%;
  min-width: 960px;
  height: 240px;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../static/jojo.png");
  margin-top: -70px;
}
.search {
  position: absolute;
  width: 200px;
  background-color: hsla(0,0%,100%,.88);
  opacity: 0.91;
  bottom: 15px;
  right: 15px;
}
</style>
