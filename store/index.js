import Vue from 'vue'
import Vuex from 'vuex'
// import isLogin from './modules/isLogin'
// import user from './modules/user'
// import pageUser from './modules/pageUser'
// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  // modules: {
  //   isLogin,
  //   user,
  //   pageUser
  // }

  state: {
    isLogin: false, // 登录状态
    user: null, // 登录用户信息
    company: [], // 公司信息
    pageUser: null, // 普通用户信息
    post: [], // 帖子数据
    currentJobInfo: null, // 当前点击工作职位信息
    currentPost: null,  // 当前点击帖子信息
    currentResume: null, // 当前查看简历
  },
  getters: {
    isLogin: (state) => state.isLogin,
    user: (state) => state.user,
    company: (state) => state.company,
    pageUser: (state) => state.pageUser,
    post: (state) => state.post,
    currentJobInfo: (state) => state.currentJobInfo,
    currentPost: (state) => state.currentPost,
    currentResume: (state) => state.currentResume
  },
  mutations: {
    loginStatus (state, payload) {
      state.isLogin = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setCompany(state, payload) {
      state.company = payload
    },
    setPageUser (state, payload) {
      state.pageUser = payload
    },
    setPost(state, payload) {
      state.post = payload
    },
    setCurrentJobInfo(state, payload) {
      state.currentJobInfo = payload
    },
    setCurrentPost(state, payload) {
      state.currentPost = payload
    },
    setCurrentResume(state, payload) {
      state.currentResume = payload
    }
  },
  // 异步操作，提交mutations
  actions: {
  }
})

export default store
