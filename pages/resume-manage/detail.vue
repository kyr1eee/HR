<template>
  <div class="main">
    <div class="main-content">
      <div class="poster-message">
        <div class="poster-name">{{ currentResume.name }}</div>
        <div class="message-wrapper">
          <span class="phone">{{ currentResume.phone }}</span>
          <el-divider direction="vertical" />
          <span class="email">{{ currentResume.email }}</span>
          <el-divider direction="vertical" />
          <span class="major">{{ currentResume.major }}</span>
        </div>
        <div class="work-time">
          <span class="job-name">{{ currentResume.favor }}</span>
          <el-divider direction="vertical" />
          <span class="graduate">{{ currentResume.graduate }}</span>
        </div>
      </div>
      <div class="poster-skill">
        <p class="resume-title"><i class="el-icon-s-help" /> 个人技能</p>
        <el-divider />
        <pre class="pre-content">{{ currentResume.skill }}</pre>
      </div>
      <div class="poster-item">
        <p class="resume-title"><i class="el-icon-s-help" /> 项目经历</p>
        <el-divider />
        <pre class="pre-content">{{ currentResume.item }}</pre>
      </div>
      <div class="poster-work">
        <p class="resume-title"><i class="el-icon-s-help" /> 工作经历</p>
        <el-divider />
        <pre class="pre-content">{{ currentResume.work }}</pre>
      </div>
      <div class="poster-intro">
        <p class="resume-title"><i class="el-icon-s-help" /> 自我介绍</p>
        <el-divider />
        <pre class="pre-content">{{ currentResume.intro }}</pre>
      </div>
      <div class="btn-group">
        <el-button
          type="primary"
          @click="ok">合适</el-button>
        <el-button
          type="danger"
          @click="removeResume">不合适</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { removeResumesMessage } from '~/server/api'
export default {
  data() {
    return {
      resume: null
    }
  },
  computed: {
    ...mapGetters([
      'currentResume'
    ])
  },
  methods: {
    removeResume() {
      removeResumesMessage({
        id: this.currentResume.id
      }).then(res => {
        console.log('删除成功', res);
        this.$notify({
          title: '不合适',
          message: '删除简历成功',
          type: 'waring',
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.push('/resume-manage');
        }, 500);
      }).catch(e => {
        console.error('删除失败', e);
      });
    },
    ok() {
      this.$notify({
        title: '合适',
        message: '记得联系投递人哦',
        type: 'success',
        duration: 1000,
      });
      setTimeout(() => {
          this.$router.push('/resume-manage');
      }, 500);
    }
  }
}
</script>

<style lang="scss" scoped>
.resume-title {
  color:#dd1515;
  font-size: 20px;
}

.pre-content {
  min-width: 100px;
  padding-bottom: 30px;
}

.main {
  margin-top: 50px;
  min-width: 800px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .main-content {
    width: 90%;

    .poster-message {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 150px;

      .poster-name {
        font-size: 25px;
        font-weight: 600;
      }

      .message-wrapper {
        font-size: 17px;
        color: gray;
      }

      .work-time {
        font-size: 15px;
        color: gray;
      }


    }

    .btn-group {
      padding: 20px 0;
    }


  }
}
</style>

