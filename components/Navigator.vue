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
          to="/job-post"
          active-class="active-link">
          <a>求职区</a>
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/job-manage"
          active-class="active-link">
          <a>职位管理</a>
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/job-recruit"
          active-class="active-link">
          <a>职位招聘</a>
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/resume-manage"
          active-class="active-link">
          <a>简历管理</a>
        </nuxt-link>
      </ul>
    </nav>
    <div class="company">
      <!-- <company-icon /> -->
      <user />
      <el-button
        type="primary"
        icon="el-icon-phone-outline">发布招聘</el-button>
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
  }
}
</script>

<style scoped>
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

  a {
    text-decoration: none;
    color: #423d3d;
  }
  .nav-list li a {
    display: inline-block;
    transition: all 0.6s;
  }

  .nav-list a:hover {
    cursor: pointer;
    color: #187aff;
    transform: scale(1.2);
  }

  .nav-list .active-link a {
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
</style>
