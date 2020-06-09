export default function({ $axios, redirect }, inject) {
  $axios.setBaseURL('https://api.covid19kenya.site/')
  $axios.defaults.headers.common.Accept = 'application/json'
  $axios.defaults.withCredentials = true
}
