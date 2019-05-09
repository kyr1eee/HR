<template>
  <div class="editor-main">
    <div class="post-title">
      <el-input
        placeholder="请输入文章标题"
        suffix-icon="el-icon-notebook-2"
        v-model="postTitle" />
    </div>
    <div
      ref="editor"
      style="text-align:left"
      class="editor" />
    <div class="button-group">
      <el-button
        @click="onSubmit"
        type="primary">
        发布
      </el-button>
      <el-button
        type="danger"
        @click="onCancel">
        取消
      </el-button>
    </div>
  </div>
</template>

<script>
// import E from 'wangeditor';
import { getUserInfo, setPostMessage } from '~/server/api';
const dayjs = require('dayjs');
// const axios = require('axios');
export default {
  name: 'Editor',
  components: {

  },
  data () {
    return {
      postContent: '',
      postTitle: '',
      userId: 0,
      type: 4
    }
  },
  mounted() {
    // ssr 下刷新报错,采用require引入模块解决
    const E = require('wangeditor');
    const editor = new E(this.$refs.editor);
    editor.customConfig.onchange = (html) => {
      this.postContent = html
    }
    editor.create();
    // 修改文本域
    let textArea = document.querySelector(".w-e-text-container");
    textArea.style.height = '400px';
    textArea = null;
    this.getUserId();
  },
  methods: {
    getUserId() {
      getUserInfo().then(res => {
        this.userId = res.data.id
      }).catch(e => {
        console.error('Get User Failed: ',e);
      })
    },
    onSubmit() {
      console.log(this.postContent)
      setPostMessage({
          userId: this.userId,
          title: this.postTitle,
          content: this.postContent,
          type: this.type,
          // updatedAt: dayjs(new Date())
      }).then(res => {
        console.log('提交帖子成功', res);
        this.$notify({
          title: '发帖成功',
          message: '还需要管理员审核哦',
          position: 'top-left',
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.push('/discuss');
        }, 500);
      }).catch(e => {
        console.error('提交帖子失败',e);
      })
    },
    onCancel() {
      this.$notify({
          title: '即将离开',
          message: '你将返回求职区',
          position: 'top-left',
          duration: 1000,
        });
        setTimeout(() => {
          this.$router.push('/discuss');
        }, 500)
    }

  }
}
</script>

<style scoped>
.editor-main {
  width: 100%;
  margin-top: 50px;
  overflow:hidden;
}

.post-title {
  padding: 15px 0;
}

.editor {
  width: 100%;
}

.button-group {
  float: right;
  padding: 20px 0;
}

</style>
