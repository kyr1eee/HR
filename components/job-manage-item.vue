<template>
  <div class="main">
    <div class="item-wrapper">
      <div class="item-left">
        <img
          class="hr-icon"
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=384335294,2228800258&fm=27&gp=0.jpg">
        <div class="job-name">
          Web前端开发工程师
        </div>
      </div>
      <el-divider direction="vertical" />
      <div class="item-middle">
        <div class="item-middle-top">
          <div class="job-city">
            <i class="el-icon-location-information" />
            <span>上海</span>
          </div>
          <div class="job-pay">
            <i class="el-icon-money" />
            <span>50W/年</span>
          </div>
        </div>
        <div class="job-tip">
          <span>五险一金</span>
          <el-divider direction="vertical" />
          <span>年终福利</span>
          <el-divider direction="vertical" />
          <span>扁平化管理</span>
        </div>
      </div>
      <div class="item-right">
        <el-tag type="success">投递：99+</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main {
  .item-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;

    .hr-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    .item-left {
      display: flex;
      align-items: center;
      height: 100%;

      .job-name {
        display: inline-block;
        font-weight:600;
        font-size: 17px;
        margin-left: 25px;
      }

    }

    .item-middle {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      .item-middle-top {

        div {
          display: inline-block;
        }

        .job-city {
          color: #21b9ed;
          font-weight:600;
          font-size: 14px;
        }

        .job-pay {
          color: #f32121;
          font-size: 14px;
          font-weight:600;
          margin-left: 15px;
        }
      }

      .job-tip {
        font-size: 12px;
        color: #7d7d7d;
      }

    }
  }
}
</style>


