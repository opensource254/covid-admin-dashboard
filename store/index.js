export const state = () => ({
  loading: false,
  serverError: {
    status: false,
    message: null
  }
})

export const mutations = {
  loading(state, isLoading) {
    state.loading = isLoading
  },
  showError(state, message) {
    state.serverError.status = true
    state.serverError.message = message
  },
  hideError(state) {
    state.serverError.status = false
  }
}
