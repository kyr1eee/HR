<template>
  <div>
    <user-detail :user="currentUser"/>
  </div>
</template>

<script>
import UserDetail from '~/components/user-detail';
import { mapGetters } from 'vuex';
import { getUserById } from '~/server/api';
export default {
  components: {
    UserDetail
  },
  data() {
    return {
      currentUser: null
    }
  },
  created() {
    this.getUser()
    console.log('路由',this.$route)
  },
  methods: {
    getUser() {
      getUserById(this.$route.params.id).then(res => {
        this.currentUser = res.data;
        console.log('当前用户', this.currentUser);
      }).catch(e => {
        console.error(e)
      })
    }
  }
}
</script>

