import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/home';
import JobManage from '../pages/job-manage';
import JobPost from '../pages/job-post';
import JobRecruit from '../pages/job-recruit';
import ResumeManage from '../pages/resume-manage';
Vue.use(Router);

export default new Router({
  routers: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/job-manage',
      component: JobManage
    },
    {
      path: '/job-post',
      component: JobPost
    },
    {
      path: '/job-recruit',
      component: JobRecruit
    },
    {
      path: '/resume-manage',
      component: ResumeManage
    }
  ]
});
