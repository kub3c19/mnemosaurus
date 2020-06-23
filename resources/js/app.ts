import Vue             from 'vue';
import RegisterForm    from "./modules/form/components/RegisterForm.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Mnemonics       from "./modules/home/components/Mnemonics.vue";
import AddMnemonic    from "./modules/form/components/AddMnemonic.vue";
import AlertContainer from "./modules/alert/components/AlertContainer.vue";

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
Vue.component(
    `alert-container`,
    AlertContainer
);

new Vue({
    el: `#app`
});
