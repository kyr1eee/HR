<template>
  <div class="message-page">
    <title-divider title="基本信息" />
    <div class="under-message">
      <ul>
        <li>昵称: {{ data.nickName }}</li>
        <li>个性签名: {{ data.personSign }}</li>
        <li>年龄: {{ data.age }}</li>
        <li>学历: {{ data.eduLevel }}</li>
        <li>联系方式: {{ data.phone }}</li>
        <li>生日日期: {{ data.birthTime }}</li>
        <li>学号: {{ data.idCard }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider'
export default {
  components: {
    TitleDivider
  },
  props: {
    data: {
      type: Object,
      default: null
    }
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

