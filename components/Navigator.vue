<template>
  <div class="top-header">
    <div>
      <nuxt-link
        tag="span"
        to="/"
        class="home">
        <img src="../static/home.png">
      </nuxt-link>
    </div>
    <nav class="nav-content">
      <ul class="nav-list">
        <nuxt-link
          tag="li"
          to="/discuss"
          active-class="active-link">
          <span>求职区</span>
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/job-manage"
          active-class="active-link">
          <span>职位管理</span>
        </nuxt-link>
        <!-- <nuxt-link
          tag="li"
          to="/job-recruit"
          active-class="active-link">
          <span>
            职位招聘
          </span>
          太麻烦，放弃
          <ul
            class="recruit-list"
            ref="recruitList">
            <a>招聘帖</a>
            <a>发布招聘</a>
          </ul>
        </nuxt-link> -->
        <nuxt-link
          tag="li"
          to="/resume-manage"
          active-class="active-link">
          <span>简历管理</span>
        </nuxt-link>
      </ul>
    </nav>
    <div class="company">
      <!-- <company-icon /> -->
      <user />
      <nuxt-link
        tag="span"
        to="/write-post">
        <el-button
          type="primary"
          icon="el-icon-phone-outline"
          class="recruit">写帖子</el-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import CompanyIcon from './company-icon';
import User from './User';
export default {
  components: {
    CompanyIcon,
    User
  },
  methods: {
    // showRecruit() {
    //   this.$refs.recruitList.style.opacity = 1;
    //   this.$refs.recruitList.style.bottom = '-120px';
    // },
    // resetRecruit() {
    //   this.$refs.recruitList.style.opacity = 0;
    //   this.$refs.recruitList.style.bottom = '-150px';
    // }
  }
}
</script>

<style lang="scss" scoped>
  .top-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0px;
    left: 0px;
    /* min-width 避免窗口过小 */
    min-width: 960px;
    height: 70px;
    background-color: hsla(0,0%,100%,.4);
    z-index: 100;
    color: #423d3d;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }

  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
  }

  .home img:hover {
    cursor: pointer;
  }

  .nav-content {
    width: 40%;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 0;
    width: 100%;
  }

  .nav-list li {
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    padding: 6px;
  }

  span {
    text-decoration: none;
    color: #423d3d;
  }
  .nav-list li span {
    display: inline-block;
    transition: all 0.6s;
  }

  .nav-list span:hover {
    cursor: pointer;
    color: #187aff;
    transform: scale(1.2);
  }

  .nav-list .active-link span {
    color: #187aff;
  }

  .company {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    height: 100%;
  }

  .recruit {
    margin-right: 30px;
  }

  .recruit-list {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    position: absolute;
    width: 120px;
    height: 120px;
    bottom: -150px;
    opacity: 0;
    /* width2 - width1 / 2 */
    margin-left: -30px;
    text-align: center;
    background: rgba(255, 255, 255, 0.81);
    transition: all 0.4s;
  }



</style>
