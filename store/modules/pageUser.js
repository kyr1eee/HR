const state = () => ({pageUser: null})

const getter = {
  pageUser: (state) => state.pageUser
}

const mutations = {
  setPageUser (state, payload) {
    state.pageUser = payload
  }
}

const actions = {
  setPageUser: ({
    commit
  }, pageUser) => {
    commit('setPageUser', pageUser)
  }
}

export default {namespaced: true, state, getter, mutations, actions}
