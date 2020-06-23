export default function({ $axios, redirect, store, error }, inject) {
  $axios.setBaseURL('https://api.covid19kenya.site/')
  $axios.defaults.headers.common.Accept = 'application/json'
  $axios.defaults.withCredentials = true

  $axios.onError((err) => {
    if (err.response.status === 401) {
      return (store.state.auth.loggedIn = false)
    }
    if (err.response.status === 422) {
      return
    }
    error({
      statusCode: err.response.status ?? 400,
      message: err.response.data.message ?? 'Something went wrong'
    })
  })
}
