<template>
  <div class="editor-main">
    <div class="post-title">
      <el-input
        placeholder="请输入文章标题"
        suffix-icon="el-icon-notebook-2" />
    </div>
    <div
      ref="editor"
      style="text-align:left"
      class="editor" />
    <div class="button-group">
      <el-button
        @click="getContent"
        type="primary">
        发布
      </el-button>
      <el-button
        @click="getContent"
        type="danger">
        取消
      </el-button>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor';
export default {
  name: 'Editor',
  components: {

  },
  data () {
    return {
      editorContent: ''
    }
  },
  mounted() {
    let editor = new E(this.$refs.editor);
    editor.customConfig.onchange = (html) => {
      this.editorContent = html
    }
    editor.create();
    // 修改文本域
    let textArea = document.querySelector(".w-e-text-container");
    textArea.style.height = '600px';
    textArea = null;
  },
  methods: {
    getContent: function () {
        alert(this.editorContent)
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
