<template>
  <div class="main">
    <div class="wrapper-left">
      <a style="color:#35a99f">时间</a>
      <el-divider direction="vertical" />
      <a>职位</a>
      <el-divider direction="vertical" />
      <a>地点</a>
      <el-divider direction="vertical" />
      <a>投递</a>
    </div>
    <div class="wrapper-center">
      <el-input
        placeholder="搜索职位信息"
        suffix-icon="el-icon-search" />
    </div>
    <div class="wrapper-right">
      <nuxt-link
        tag="span"
        to="/job-recruit">
        <el-button
          type="primary"
          icon="el-icon-edit"
          circle />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
  height: 100px;
  padding: 15p;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .wrapper-left {
    a {
      font-size: 15px;
      color: #000;
    }

    // 参照 LVHA 顺序::link — :visited — :hover — :active
    a:visited {
      color: #35a99f;
    }

    a:hover {
      color: #35a99f;
      cursor: pointer;
    }



  }

}
</style>


