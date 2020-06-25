<template>
    <form action="/sessions" ref="form" @submit.prevent="submitOn">
        <csrf-token/>
        <button>Odhlásiť sa</button>
    </form>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import {mixins}    from "vue-class-component";
    import CsrfToken   from "./CsrfToken.vue";
    import FormMixin   from "../mixins/Form";

    /** @description A component containing the logout form. */
    @Component({
        components: {
            CsrfToken
        },
        name: `LogoutForm`
    })
    export default class LogoutForm extends mixins(FormMixin)
    {
        /** @description Form fields. */
        public fields = {}

        public method = `DELETE` as 'DELETE';

        public redirectTo = window.location.href;
    }
</script>

<style lang="stylus" scoped>
    @import '~@/stylus/tomwork.functions.styl'
    @import '~@/stylus/variables.styl'
</style>
