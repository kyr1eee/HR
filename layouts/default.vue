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
</style>
