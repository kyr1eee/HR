<template>
  <div class="main-content">
    <title-divider title="讨论区"/>
    <div class="sort">
      <span>最新发表</span>
      <el-divider direction="vertical" />
      <span>最新回复</span>
      <el-divider direction="vertical" />
      <span>热门</span>
      <el-divider direction="vertical" />
      <span>精华</span>
    </div>
    <div class="discuss-content">
      <li
        @click="selectUser(item)"
        v-for="(item, index) in test"
        :key="index">
        <discuss-item />
      </li>
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider';
import DiscussItem from './discuss-item';
export default {
  components: {
    TitleDivider,
    DiscussItem
  },
  data() {
    return {
      test: [1,12,13,11,21,121,13,14,1221,134,431,3131,4131,161,231],
      t: [1,1]
    };
  },
  methods: {
    selectUser(item) {
      // 父组件指定子路由参数
      this.$router.push(`/user/${item}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.main-content {
  .sort {
    font-size: 15px;
    font-weight: 588;
    padding: 20px 20px;
    color: #797979;

    span {
      &:hover {
        color: #409eff;
        cursor: pointer;
      }
    }
  }

  .discuss-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    li {
      list-style: none;
      margin: 0;
      padding: 0;
      width: 90%;
    }
  }
}
</style>


