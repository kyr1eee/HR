<template>
  <div class="main-content">
    <div class="box-card">
      <el-button @click="test">點我</el-button>
      <div class="company-name">
        <img
          class="company-icon"
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=384335294,2228800258&fm=27&gp=0.jpg">
          <!-- <span>公司名: {{ company[0].name }}</span> -->
      </div>
      <!-- <div class="company-id">
        <span>公司经营号: {{ company[0].regNum }}</span>
      </div>
      <div class="company-business">
        <span>主要业务: {{ company[0].business }}</span>
      </div>
      <div class="company-people">
        <span>公司人数: {{ company[0].people }}</span>
      </div>
      <div class="company-info">
        <span>公司介绍: {{ company[0].info }}</span>
      </div>
      <div class="company-address">
        <span> {{ company[0].address }}</span>
      </div>
      <div class="company-type">
        <span> {{ company[0].property }}</span>
      </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'company',
      'user'
    ])
  },
  methods: {
    test() {
      console.log(this.user);
      console.log('公司',this.company);
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  width: 90%;
  min-height: 300px;
  padding-top: 30px;

  .box-card {
    width: 100%;
    height: 100%;

    .company-name {

      .company-icon {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }
}
</style>
