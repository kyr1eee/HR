<template>
  <div class="main-content">
    <title-divider title="热门帖子"/>
    <div class="post-wrapper">
      <div class="post-content">
        <li
          v-for="(item, index) in test"
          :key="index">
          <p>这是一个挺长的标题哦</p>
          <el-divider />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider';
export default {
  components: {
    TitleDivider,
  },
  data() {
    return {
      test: [1,1,1,1,1,1,11,1,1,1,1,1]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  .post-wrapper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .post-content {
      width: 90%;
    }
  }
}
</style>
