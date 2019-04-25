<template>
  <div>
    <header id="header">
      <my-menu />
    </header>
    <main
      id="router-view"
      @scroll="throteScroll">
      <nuxt />
    </main>
  </div>
</template>

<script>
import ResumeManage from '../pages/resume-manage';
import Navigator from '../components/Navigator';
import User from '../components/User';
import throtte from '../common/throttle';
import MyMenu from '../components/menu';
export default {
  components: {
    Navigator,
    MyMenu, // HTML5存在menu标签,因此改为MyMenu
    User,
    ResumeManage,
  },
  methods: {
    _scroll: function() {
      let clientHeight = document.body.clientHeight;
      let scrollTop = window.scrollY;
      let opacity = (clientHeight - scrollTop) / clientHeight;
      this.$refs.nav.style.transition = "all 0.3s";
      this.$refs.nav.style.opacity = opacity;
    },
    throteScroll: function() {
      throtte(this._scroll, 300);
    }
  }
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
  background-color: #f4f5f5;
}
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
.search {
  position: absolute;
  width: 200px;
  background-color: hsla(0,0%,100%,.88);
  opacity: 0.91;
  bottom: 15px;
  right: 15px;
}
</style>
