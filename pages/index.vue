<template>
  <div>
    <div>主页</div>
    <div class="test">我很长</div>
  </div>
</template>

<script>
import Home from './home';
export default {
  components: {
    Home
  }
}
</script>

<style>
  #app {
    background-color: #f4f5f5;
  }
  .test {
    height: 2000px;
  }
</style>
