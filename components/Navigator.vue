<template>
  <div class="top-header">
    <nav class="nav-content">
      <ul class="nav-list">
        <nuxt-link
          tag="li"
          to="/home"
          active-class="active-link">
          <a href="#">首页</a>
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/job-post"
          active-class="active-link">
          <a href="#">求职区</a>
        </nuxt-link>
        <nuxt-link
          tag="li"
          to="/job-manage"
          active-class="active-link">
          <a href="#">职位管理</a>
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
          <a href="#">简历管理</a>
        </nuxt-link>
      </ul>
      <div>
        <span>搜索框暂定</span>
        <span>公司logo位置站定</span>
      </div>
    </nav>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .top-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0px;
    left: 0px;
    right: 0px;
    min-width: 100%;
    height: 70px;
    background-color: aquamarine;
    color: #423d3d;
  }

  .nav-content {
    display: flex;
  }

  .nav-list {
    overflow: hidden;
  }

  .nav-list li {
    float: left;
    list-style: none;
    font-size: 15px;
    font-weight: 600;
    width: 100px;
    margin-left: 20px;
  }

  .nav-list li a {
    text-decoration: none;
    color: #423d3d;
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
</style>
