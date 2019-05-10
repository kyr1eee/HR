<template>
  <div class="home">
    <div class="home-wrapper">
      <company-message />
    </div>
  </div>
</template>

<script>
import { getUserInfo, getCompanyMessage } from '~/server/api';
import { mapMutations } from 'vuex';
import CompanyMessage from '~/components/company-message';
export default {
  components: {
    CompanyMessage
  },
  data() {
    return {
      user: null
    }
  },
  created() {
    this.getUserMessage();
    this.getCompanyMessage();
  },
  mounted() {
  },
  methods: {
    getUserMessage() {
      getUserInfo().then(res => {
        this.setUser(res.data);
        console.log('Get User Success', res.data);
      }).catch(e => {
        console.error('Get User Failed: ',e);
      })
    },
    getCompanyMessage() {
      getCompanyMessage().then(res => {
        this.setCompany(res.data);
      }).catch(e => {
        console.error('获取公司信息失败',e)
      })
    },
    ...mapMutations({
      setUser: 'setUser',
      setCompany: 'setCompany'
    })
  }
}
</script>

<style>
  #app {
    background-color: #f4f5f5;
  }
  .test {
    height: 2000px;
  }

  .home-wrapper {
    min-width: 800px;
    background: #fff;
    display: flex;
    justify-content: center;
  }
</style>
