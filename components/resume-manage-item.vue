<template>
  <div class="resume-main">
    <div
      class="resume-main-content"
      @click="turnToDetail">
      <div class="left-content">
        <img
          class="icon"
          src="~/static/resume.jpg" >
        <span class="job-name">{{ data.favor }}</span>
      </div>
      <div class="center-content">
        <span class="name">{{ data.name }}</span>
        <span class="major">{{ data.major }}专业</span>
      </div>
      <div class="right-content">
        <span class="graduate">{{ data.graduate }}</span>
        <span class="time">{{ translateTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    data: {
      type: Object,
      default: null,
    }
  },
  computed: {
    translateTime() {
      const time = new Date(this.data.createdAt);
      const year = time.getFullYear();
      const month = (time.getMonth() + 1) < 10 ? '0' + (time.getMonth() + 1) : (time.getMonth() + 1);
      const date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate();
      const hours = time.getHours() < 10 ? '0' + time.getHours()  : time.getHours();
      const minutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
      const seconds = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds();
      return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    }
  },
  methods: {
    turnToDetail(){
      this.setCurrentResume(this.data);
      this.$router.push({
        path: '/resume-manage/detail',
        query: { resumeId : this.data.id }
      })
    },
    ...mapMutations({
      setCurrentResume: 'setCurrentResume'
    })
  }
}
</script>

<style lang="scss" scoped>
.resume-main {

  .resume-main-content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;

    &:hover {
      cursor: pointer;
      background-color: #f0f0f061
    }

    .left-content {
      width: 300px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: 588;

      .job-name {
        padding-left: 25px;
      }
    }

    .center-content {
      width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #5b4e5c;

      .name {
        font-size: 15px;
        padding: 5px 0;
      }

      .major {
        font-size: 13px;
      }
    }

    .right-content {
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .graduate {
        color: #1bb253;
        font-size: 15px;
        padding: 5px 0;
      }

      .time {
        font-size: 12px;
        color: gray;
      }
    }
  }
}
</style>

