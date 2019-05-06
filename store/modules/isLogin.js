const state = () => ({isLogin: false})

const getter = {
  isLogin: (state) => state.isLogin
}

const mutations = {
  loginStatus (state, payload) {
    state.isLogin = payload
  }
}

const actions = {
  loginStatus: ({
    commit
  }, isLogin) => {
    commit('loginStatus', isLogin)
  }
}

export default {namespaced: true, state, getter, mutations, actions}
