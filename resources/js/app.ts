import Vue             from 'vue';
import RegisterForm    from "./components/RegisterForm.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Mnemonics       from "./components/Mnemonics.vue";

Vue.component(
    `register-form`,
    RegisterForm
);
Vue.component(
    `header-component`,
    HeaderComponent
);
Vue.component(
    `mnemonics`,
    Mnemonics
);

new Vue({
    el: `#app`
})
