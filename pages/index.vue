<template>
  <div>
    <div>主页</div>
    <div
      class="test"
      @click="console.log(1)">
      我很长
    </div>
  </div>
</template>

<script>
export default {
  components: {

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
