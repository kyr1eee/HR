<template>
  <div class="main-content">
    <title-divider title="热门帖子"/>
    <div class="post-wrapper">
      <div class="post-content">
        <li
          v-for="(item, index) in data"
          :key="index">
          <p @click="selectPost(item)">{{ item.title }}</p>
          <div class="title-bottom">
            <span>发表于 {{ translateTime(item.updatedAt) }}</span>
            <span>回复(6)</span>
          </div>
          <el-divider />
        </li>
      </div>
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider';
export default {
  components: {
    TitleDivider,
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  computed: {

  },
  created() {
    // this.getDiscuss();
  },
  mounted() {

  },
  methods: {
    translateTime(oldTime) {
      const time = new Date(oldTime);
      const year = time.getFullYear();
      const month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
      const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
      const hours = time.getHours() < 10 ? '0' + time.getHours()  : time.getHours();
      const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
      const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
      return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    },
    selectPost(item) {
      this.$router.push({
        path: '/discuss/detail',
        query: { pid: item.id }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  .post-wrapper {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .post-content {
      width: 90%;

      p:hover {
        cursor: pointer;
        color: #f56c6c;
      }

      .title-bottom {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
      }
    }
  }
}
</style>
