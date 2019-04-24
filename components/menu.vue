<template>
  <header id="header">
    <div class="blur-bg" />
    <navigator ref="nav"/>
    <div class="jojo-bg" />
  </header>
</template>

<script>
import Navigator from './Navigator';
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
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(6px);
}
.jojo-bg {
  width: 100%;
  min-width: 960px;
  height: 240px;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../static/jojo.png");
  margin-top: -70px;
}
</style>
