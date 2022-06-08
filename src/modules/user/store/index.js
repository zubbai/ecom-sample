export default {
  namespaced: true,
  state: () => ({
    user: { name: "zubair", id: 1 },
    isLoggedIn: true
  }),
  getters: {
    name: (state, getters, rootState, rootGetters) => {
      return state.user.name
    }
  },
  mutations: {
    SET_USER(state) {
      state.user.name = 'mohammed'
    }
  },
  actions: {
    userLog(ctx, payload) {
      console.log(payload)
    }
  }
}
