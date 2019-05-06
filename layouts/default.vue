<template>
  <div id="app">
    <header id="header">
      <my-menu />
    </header>
    <main
      id="router-view"
      @scroll="throteScroll"
      ref="main">
      <nuxt />
    </main>
    <my-footer />
  </div>
</template>

<script>
import ResumeManage from '../pages/resume-manage';
import Navigator from '../components/Navigator';
import User from '../components/User';
import throtte from '../common/throttle';
import MyMenu from '../components/menu';
import MyFooter from '../components/my-footer';
import {getDiscuss} from '../server/api/discuss';
export default {
  components: {
    Navigator,
    MyMenu, // HTML5存在menu标签,因此改为MyMenu
    User,
    ResumeManage,
    MyFooter,
  },
  mounted() {
    this.getDiscuss();
    this.$refs.main.style.minHeight = window.innerHeight - 240 + 'px';
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
    },
    getDiscuss() {
      getDiscuss().then(res => {
        console.log('Get Discuss: ', res);
      }).catch(e => {
        console.error('Get Discuss Failed: ',e);
      })
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  background-color: #f4f5f5;
}

#app {
  // position: relative;
}
#router-view {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

