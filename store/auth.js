export const state = () => ({
  user: {
    user_id: '',
    password: '',
  },
})

export const getters = {
  user(state) {
    return state.user
  },
}

export const mutations = {
  setUser(state) {
    state.user = user
  },
}
