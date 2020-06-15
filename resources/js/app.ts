import Vue             from 'vue';
import RegisterForm    from "./components/RegisterForm.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

Vue.component(
    `register-form`,
    RegisterForm
);
Vue.component(
    `header-component`,
    HeaderComponent
);

new Vue({
    el: `#app`
})
