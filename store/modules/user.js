const state = () => ({user: null})

const getter = {
  user: (state) => state.user
}

const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  setUser: ({
    commit
  }, user) => {
    commit('setUser', user)
  }
}

export default {namespaced: true, state, getter, mutations, actions}
