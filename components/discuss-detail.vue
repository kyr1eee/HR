<template>
  <div class="main">
    <div class="top-wrapper">
      <div class="post-message">
        1
        <!-- <discuss-item :data="data" /> -->
      </div>
      <div class="post-content">
        2
      </div>
    </div>
    <div class="center-wrapper">
      3
    </div>
    <div class="bottom-wrapper">
      4
    </div>
  </div>
</template>

<script>
import DiscussItem from './discuss-item';
export default {
  components: {
    DiscussItem
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('详情页',this.data);
    },200)
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 700px;
  max-width: 800px;


  .top-wrapper {
    background-color: #fff;
    width: 100%;
    min-height: 300px;
    margin-top: 50px;
  }

  .center-wrapper {
    background-color: #fff;
    width: 100%;
    min-height: 600px;
    margin-top: 50px;
  }

  .bottom-wrapper {
    background-color: #fff;
    width: 100%;
    min-height: 300px;
    margin-top: 50px;
  }
}
</style>
