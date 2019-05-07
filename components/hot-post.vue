<template>
  <div class="main-content">
    <title-divider title="热门帖子"/>
    <div class="post-wrapper">
      <div class="post-content">
        <li
          v-for="(item, index) in data"
          :key="index">
          <p>{{ item.title }}</p>
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
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  created() {
    // this.getDiscuss();
  },
  mounted() {

  },
  methods: {

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
