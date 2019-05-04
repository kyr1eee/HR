<template>
  <div class="main-content">
    <title-divider title="热门话题"/>
    <div class="topic-wrapper">
      <div class="topic">
        <li
          v-for="(item, index) in test"
          :key="index">
          <el-tag type="info">{{ item }}</el-tag>
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
      test: ['jojo','饿了','改论文','又要十二点起床','回学校','困了','周日见老师','起床啦','呵呵','10:30']
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {

  .topic-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px;

    .topic {
      width: 90%;

      li {
        display: inline-block;
        margin: 2px 6px;
      }
    }
  }

}
</style>
