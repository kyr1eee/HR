<template>
  <div class="main">
    <div class="main-wrapper">
      <title-divider title="简历管理"/>
      <div class="resume-manage-list">
        <li
          v-for="(item, index) in data"
          :key="index">
          <resume-manage-item :data="item"/>
          <el-divider />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDivider from '~/components/title-divider';
import ResumeManageItem from '~/components/resume-manage-item';
import { getResumesMessage } from '~/server/api';
export default {
  components: {
    TitleDivider,
    ResumeManageItem
  },
  data() {
    return {
      test: [1,1,1,1,1,1,1]
    }
  },
  async asyncData() {
    let { data } = await getResumesMessage();
    return { data };
  },
}
</script>

<style lang="scss" scoped>
.main {
  background: #fff;
  min-width: 800px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  .main-wrapper {
    width: 90%;

    .resume-manage-list {
      padding: 20px 0;
    }
  }
}
</style>


