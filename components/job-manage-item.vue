<template>
  <div class="main">
    <div
      class="item-wrapper"
      @click="selectJob">
      <div class="item-left">
        <img
          class="hr-icon"
          src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=384335294,2228800258&fm=27&gp=0.jpg">
        <div class="job-name">
          {{ data.name }}
        </div>
        <!-- <el-divider direction="vertical" /> -->
      </div>
      <div class="item-middle">
        <div class="item-middle-top">
          <div class="job-city">
            <i class="el-icon-location-information" />
            <span>{{ data.place.slice(0,2) }}</span>
          </div>
          <div class="job-pay">
            <i class="el-icon-money" />
            <span>{{ data.salary }}</span>
          </div>
        </div>
        <div class="job-tip">
          <li
            class="workfare"
            v-for="(item, index) in workfare"
            :key="index">
            <el-divider
              direction="vertical"
              v-if="index !== 0"/>
            <span>{{ item }}</span>
          </li>
        </div>
      </div>
      <div class="item-right">
        <el-tag type="success">投递：99+</el-tag>
      </div>
    </div>
    <el-divider />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  computed: {
    workfare : function() {
      return this.data.workfare ? this.data.workfare.split('-') : '无';
    }
  },
  methods: {
    selectJob() {
      this.setCurrentJobInfo(this.data);
      this.$router.push({
        path: '/job-manage/detail',
        query: { jobId : this.data.id }
      });
    },
    ...mapMutations({
      setCurrentJobInfo : 'setCurrentJobInfo'
    })
  }
}
</script>

<style lang="scss" scoped>
.main {
  .item-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;

    &:hover {
      cursor: pointer;
      background-color: #f0f0f061;
    }

    .hr-icon {
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    .item-left {
      display: flex;
      align-items: center;
      height: 100%;
      width: 300px;
      overflow: hidden;

      .job-name {
        display: inline-block;
        font-weight:600;
        font-size: 17px;
        margin-left: 25px;
      }

    }

    .item-middle {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
      width: 200px;

      .item-middle-top {

        div {
          display: inline-block;
        }

        .job-city {
          color: #21b9ed;
          font-weight:600;
          font-size: 14px;
        }

        .job-pay {
          color: #f32121;
          font-size: 14px;
          font-weight:600;
          margin-left: 15px;
        }
      }

      .job-tip {
        font-size: 12px;
        color: #7d7d7d;

        .workfare {
          display: inline-block;
        }
      }

    }

    .item-right {
      width: 100px;
    }
  }
}
</style>


