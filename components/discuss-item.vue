<template>
  <div class="main">
    <div class="wrapper">
      <img
        class="icon"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1391408179,2191640814&fm=26&gp=0.jpg" >
      <div class="content">
        <div class="title">震惊!美女半夜不睡觉居然在...</div>
        <div class="bottom">
          <div class="autor">汕大阿毛  于  2019-05-03 03:19:05  发表</div>
          <div class="data">
            <span>回复 0</span>
            <el-divider direction="vertical" />
            <span>赞 6</span>
            <el-divider direction="vertical" />
            <span>浏览 99+</span>
          </div>
        </div>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    replyCount: {
      type: String,
      default: ''
    },
    starCount: {
      type: String,
      default: ''
    },
    readCount: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;

  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      border-radius: 50%;
      width: 50px;
      height: 50px;
      transition: all .4s;
      z-index: 120;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 85%;
      height: 60px;
      padding-left: 20px;

      .title {
        font-size: 15px;
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>

