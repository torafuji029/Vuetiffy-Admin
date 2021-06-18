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

export const actions = {
  loginCheck({ commit }, { id, password }) {
    if (id !== 'admin') return false
    if (password !== '1111') return false
    return true
  },
}
