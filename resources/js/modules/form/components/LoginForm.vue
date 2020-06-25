<template>
    <form action="/sessions" class="login-form" method="post" ref="form" @submit.prevent="submitOn">
        <csrf-token/>
        <div v-for="[, field] in fieldsSorted" :key="field.name" class="form-field">
            <label :for="field.name">{{field.label}}:</label>
            <input :id="field.name" :name="field.name" :type="field.type" v-model="field.value">
            <div v-if="field.error" class="form-field-alert">{{field.error}}</div>
        </div>
        <button>Odoslať</button>
    </form>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import {mixins}    from "vue-class-component";
    import CsrfToken   from "./CsrfToken.vue";
    import FormMixin   from "../mixins/Form";

    /** @description A component containing the login form. */
    @Component({
        components: {
            CsrfToken
        },
        name: `LoginForm`
    })
    export default class LoginForm extends mixins(FormMixin)
    {
        /** @description Form fields. */
        public fields = {
            /** @description The email form field. */
            email: {
                error: ``,
                label: `Email`,
                name: `email`,
                order: 0,
                tag: `input` as 'input',
                type: `email` as 'email',
                value: ``
            },
            /** @description The password form field. */
            password: {
                error: ``,
                label: `Heslo`,
                name: `password`,
                order: 1,
                tag: `input` as 'input',
                type: `password` as 'password',
                value: ``
            }
        }

        public redirectTo = `/`;
    }
</script>

<style lang="stylus" scoped>
    @import '~@/stylus/tomwork.functions.styl'
    @import '~@/stylus/variables.styl'

    .login-form
        align-items center
        background-color $headerBackground
        box-shadow $headerBoxShadow
        display flex
        flex-direction column
        padding 10px
        position absolute
        right 0
        top 100%

    label
        width auto
</style>
