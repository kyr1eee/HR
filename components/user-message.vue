<template>
  <div class="message-page">
    <title-divider title="基本信息" />
    <div class="under-message">
      <ul>
        <li>昵称 : </li>
        <li>个性签名</li>
        <li>性别</li>
        <li>学历</li>
        <li>联系方式</li>
        <li>身份类型</li>
        <li>学号</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider'
export default {
  components: {
    TitleDivider
  }
}
</script>

<style lang="scss" scoped>
.message-page {
  background-color: #fff;
  min-width: 500px;


  .under-message {


    ul {

      li {
        display: flex;
        align-items: center;
        height: 70px;
        margin-left: 75px;
        font-size: 16px;
      }
    }
  }
}
</style>

