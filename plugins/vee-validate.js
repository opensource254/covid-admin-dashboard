import Vue from 'vue'
import { required, email } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'

extend('required', {
  ...required,
  message: '{_field_} is required'
})

extend('email', {
  ...email,
  message: 'Email must be valid'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
