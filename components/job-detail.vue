<template>
  <div class="job-detail-wrapper">
    <div class="content-wrapper">
      <div class="job-message">
        <h1>{{ currentJobInfo.name }}</h1>
        <span class="job-salary">{{ currentJobInfo.salary }}</span>
        <el-divider direction="vertical" />
        <span class="job-place">{{ currentJobInfo.place.slice(0,2) }}</span>
      </div>
      <el-divider />
      <div class="workfare">
        <h3>职位诱惑：</h3>
        <span>{{ currentJobInfo.workfare.split('-').join(' ') }}</span>
      </div>
      <div class="job-desc">
        <h3>岗位要求：</h3>
        <pre>{{ currentJobInfo.req }}</pre>
      </div>
      <div class="job-address">
        <h3>工作地址</h3>
        <span>{{ currentJobInfo.place }}</span>
      </div>
      <div class="btn">
        <el-button
          @click="onCancel"
          type="danger">删除职位</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { removeJobMessage } from '~/server/api';
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'currentJobInfo'
    ])
  },
  methods: {
    onCancel() {
      removeJobMessage({
        id: this.currentJobInfo.id
      }).then(res => {
        this.$notify({
          title: '删除职位成功',
          message: '正在回到职位管理页',
          type: 'waring',
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.push('/job-manage');
        }, 500);
      }).catch(e => {
        console.error('删除职位失败',e);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.job-detail-wrapper {
  min-width: 800px;
  min-height: 400px;
  background: #fff;
  margin-top: 50px;
  display: flex;
  justify-content: center;

  .content-wrapper {
    min-width: 90%;

    h1 {
      font-weight: 600;
    }
    h3 {
      font-weight: 600;
    }

    .job-message {
      padding-top: 50px;
      .job-salary {
        color: red;
      }

      .job-place {
        color: blue;
      }

    }

    .workfare {
      padding-bottom: 30px;
    }

    .job-desc {
      padding-bottom: 30px;
    }

    .job-address {
      padding-bottom: 20px;
    }

    .btn {
      padding: 20px 0;
    }
  }
}

</style>
