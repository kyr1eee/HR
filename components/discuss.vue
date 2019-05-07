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
        v-for="(item, index) in data"
        :key="index">
        <discuss-item :data="item"/>
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
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {

    };
  },
  created() {
  },
  mounted() {

    setTimeout(() => {
      console.log('discuss', this.data);
    }, 100)
  },
  methods: {

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


