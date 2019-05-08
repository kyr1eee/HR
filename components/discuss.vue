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
      <loading v-if="data.length === 0"/>
      <li
        v-for="(item, index) in currentData"
        :key="index">
        <discuss-item :data="item"/>
      </li>
      <div
        class="page"
        v-show="data.length > 0">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="data.length"
          ref="page"
          @current-change="selectPage" />
      </div>
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider';
import DiscussItem from './discuss-item';
import Loading from './loading'
export default {
  components: {
    TitleDivider,
    DiscussItem,
    Loading
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentPage: 1,
      loaded: false,
    };
  },
  computed: {
    currentData: function() {
      return this.data.slice(this.currentPage * 10 - 10, this.currentPage * 10 - 1);
    }
  },
  created() {
  },
  mounted() {


  },
  methods: {
    // current-page事件获取当前页码
    selectPage(page) {
      this.currentPage = page;
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

    .page {
      padding-bottom: 30px;
    }
  }
}
</style>


