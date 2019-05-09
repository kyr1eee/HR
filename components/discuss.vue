<template>
  <div class="main-content">
    <title-divider title="讨论区"/>
    <div class="sort">
      <a @click="showAll">所有</a>
      <el-divider direction="vertical" />
      <a
        @click="showRecruitData"
        href="#recruit">招聘</a>
      <el-divider direction="vertical" />
      <a
        @click="showHighLightData"
        href="#highlight">精华</a>
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
        v-show="showData.length > 0">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="showData.length"
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
const showColor = '#409eff';
const defaultColor = '#fff';
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
      showData: [],
      // all: document.querySelector("#all"),
      // recruit: document.querySelector("#recruit"),
      // highlight: document.querySelector("#highlight")
    };
  },
  computed: {
    currentData: function() {
      // props不可变
      let data = this.showData.slice().reverse()
      return data.slice(this.currentPage * 10 - 10, this.currentPage * 10 - 1);
    }
  },
  created() {
    this.showAll();
  },
  mounted() {


  },
  methods: {
    // current-page事件获取当前页码
    selectPage(page) {
      this.currentPage = page;
    },
    // 招聘帖子
    showRecruitData() {
      this.showData = this.data.filter(item => item.type === 4);
      // this.recruit.style.color = showColor;
      // this.all.style.color = defaultColor;
      // this.highlight.style.color = defaultColor;
    },
    // 精华帖子
    showHighLightData() {
      this.showData = this.data.filter(item => item.highlight == 1);
      // this.highlight.style.color = showColor;
      // this.recruit.style.color = defaultColor;
      // this.all.style.color = defaultColor;
    },
    // 所有帖子
    showAll() {
      this.showData = this.data;
      // this.all.style.color = showColor;
      // this.recruit.style.color = defaultColor;
      // this.highlight.style.color = defaultColor;
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

    a {
      color: #797979;
      &:hover {
        color: #409eff;
        cursor: pointer;
      }

      // &: {
      //   color: #409eff;
      //   cursor: pointer;
      // }
    }

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


