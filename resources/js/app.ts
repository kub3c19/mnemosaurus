import Vue             from 'vue';
import RegisterForm    from "./components/RegisterForm.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Mnemonics       from "./components/Mnemonics.vue";
import AddMnemonic     from "./components/AddMnemonic.vue";

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
Vue.component(
    `add-mnemonic`,
    AddMnemonic
);

new Vue({
    el: `#app`
});
