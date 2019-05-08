<template>
  <div class="main">
    <div class="wrapper">
      <title-divider title="职位管理" />
      <post-job />
      <div class="job-manage-list">
        <li
          v-for="(item, index) in test"
          :key="index">
          <job-manage-item />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDivider from '~/components/title-divider';
import JobManageItem from '~/components/job-manage-item';
import PostJob from '~/components/post-job';
export default {
  components: {
    TitleDivider,
    JobManageItem,
    PostJob
  },
  data() {
    return {
      test: [1,3,4,5,6,7,8,12]
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  .wrapper {
    min-width: 800px;
    min-height: 200px;
    background-color: #fff;
    margin-top: 50px;

    .job-manage-list {
      margin-top: 35px;

    }
  }
}
</style>

