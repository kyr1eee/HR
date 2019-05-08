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
    pageUser: null, // 普通用户信息
    post: [], // 帖子数据
  },
  getters: {
    isLogin: (state) => state.isLogin,
    user: (state) => state.user,
    pageUser: (state) => state.pageUser,
    post: (state) => state.post
  },
  mutations: {
    loginStatus (state, payload) {
      state.isLogin = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setPageUser (state, payload) {
      state.pageUser = payload
    },
    setPost(state, payload) {
      state.post = payload
    }
  },
  // 异步操作，提交mutations
  actions: {
  }
})

export default store
