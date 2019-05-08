<template>
  <div class="main-discuss-detail">
    <div class="top-wrapper">
      <div class="top-content">
        <div class="post-message">
          <div class="top-icon"><i class="el-icon-chat-line-round" /></div>
          <discuss-item :data="data" />
        </div>
        <div class="post-content">
          <div class="main-content">
            {{ data.content }}
          </div>
          <div class="bottom-group">
            <span><i class="el-icon-star-on" />赞</span>
            <el-divider direction="vertical" />
            <span><i class="el-icon-s-platform" />回帖</span>
            <el-divider direction="vertical" />
            <span><i class="el-icon-warning" />举报</span>
          </div>
        </div>
      </div>
    </div>
    <div class="center-wrapper">
      <div class="no-repay">
        <div class="no-repay-icon"><i class="el-icon-toilet-paper" /></div>
        <p>还没人回帖，快抢沙发哦</p>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div
        class="editor"
        ref="discussRepay" />
      <div class="btn">
        <el-button
          type="primary"
          icon="el-icon-edit">回帖</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import DiscussItem from './discuss-item';
import Editor from './editor';
export default {
  components: {
    DiscussItem,
    Editor
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  mounted() {
    const E = require('wangeditor');
    const editor = new E(this.$refs.discussRepay);
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create();
    setTimeout(() => {
      console.log('详情页',this.data);
    },200)
  }
}
</script>

<style lang="scss" scoped>
.main-discuss-detail {
  display: flex;
  flex-direction: column;
  min-width: 800px;
  max-width: 800px;


  .top-wrapper {
    position: relative;
    background-color: #fff;
    width: 100%;
    min-height: 500px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .top-content {
      width: 90%;

      .post-message {
        width: 100%;



        .top-icon {
          color: #31cd4c;
          font-size: 30px;
          padding: 12px 0;
        }
      }

      .post-content {

        .bottom-group {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }
      }
    }

  }

  .center-wrapper {
    background-color: #fff;
    width: 100%;
    min-height: 600px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .no-repay {
      width: 100%;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .no-repay-icon {
        font-size: 200px;
      }
    }
  }

  .bottom-wrapper {
    background-color: #fff;
    width: 100%;
    min-height: 300px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .editor {
      width: 90%;
      margin-top: 30px;
    }

    .btn {
      margin: 20px 0;
      button {
      }
    }
  }
}
</style>
