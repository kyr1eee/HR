<template>
  <div class="main">
    <div class="wrapper">
      <img
        class="icon"
        :src="avatar"
        @click="selectUser">
      <div class="content">
        <div
          class="title"
          @click="discussDetail">
          {{ data.title }}
        </div>
        <div class="bottom">
          <div class="autor">发表于 {{ translateTime }}</div>
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
import { mapMutations } from 'vuex';
import { getUserById } from '~/server/api';
export default {
  components: {
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      avatar: ''
    }
  },
  computed: {
    translateTime() {
      const time = new Date(this.data.updatedAt);
      const year = time.getFullYear();
      const month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
      const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
      const hours = time.getHours() < 10 ? '0' + time.getHours()  : time.getHours();
      const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
      const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
      return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    }
  },
  mounted() {
    this.getUserAvator();
  },
  methods: {
    discussDetail() {
      this.setCurrentPost(this.data);
      this.$router.push({
        path: '/discuss/detail',
        query: { pid: this.data.id },
      });
    },
    selectUser() {
      // 父组件指定子路由参数
      this.setPageUser(this.data);
      this.$router.push({
        path: '/user/detail',
        query: { uid : this.data.userId }
      });
    },
    getUserAvator() {
      getUserById(this.data.userId).then(res => {
        this.avatar = res.data.avatar;
      }).catch(e => {
        console.error('获取用户头像失败', e);
      })
    },
    ...mapMutations({
      setCurrentPost: 'setCurrentPost',
      setPageUser: 'setPageUser'
    })
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
    padding: 15px 0;
    &:hover {
      cursor: pointer;
      background-color: #f0f0f061;
    }

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

      .title:hover {
        color:#2867dd;
        cursor: pointer;
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

