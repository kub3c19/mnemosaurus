import Vue          from 'vue';
import RegisterForm from "./components/RegisterForm.vue";

Vue.component(
    `register-form`,
    RegisterForm
);

new Vue({
    el: `#app`
})
