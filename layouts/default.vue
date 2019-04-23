<template>
  <div
    id="default"
    @scroll="throteScroll">
    <header>
      <navigator ref="nav"/>
    </header>
    <nuxt />
  </div>
</template>

<script>
import Navigator from '../components/Navigator';
import throtte from '../common/throttle';
export default {
  components: {
    Navigator
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
}
</style>
