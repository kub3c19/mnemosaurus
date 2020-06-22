<template>
    <div class="register-form-container">
        <div class="register-form">
            <h1>Registrácia</h1>
            <form action="/register" method="post" ref="form" @submit="submitOn">
                <csrf-token/>
                <div v-for="[, field] in fieldsSorted" :key="field.name" class="form-field">
                    <label :for="field.name">{{field.label}}:</label>
                    <input :id="field.name" :name="field.name" :type="field.type" v-model="field.value">
                    <div v-if="field.error" class="form-field-alert">{{field.error}}</div>
                </div>
                <button>Odoslať</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component} from "vue-property-decorator";
    import {mixins}    from "vue-class-component";
    import CsrfToken   from "./CsrfToken.vue";
    import FormMixin   from "../mixins/Form";

    /** @description A component containing the register form. */
    @Component({
        components: {
            CsrfToken
        },
        name: `RegisterForm`
    })
    export default class RegisterForm extends mixins(FormMixin)
    {
        /** @description Form fields. */
        public fields = {
            /** @description The email form field. */
            email: {
                error: ``,
                label: `Email`,
                name: `email`,
                order: 1,
                tag: `input` as 'input',
                type: `email` as 'email',
                value: ``
            },
            /** @description The password form field. */
            password: {
                error: ``,
                label: `Heslo`,
                name: `password`,
                order: 2,
                tag: `input` as 'input',
                type: `password` as 'password',
                value: ``
            },
            /** @description The username form field. */
            username: {
                error: ``,
                label: `Username`,
                name: `username`,
                order: 0,
                tag: `input` as 'input',
                type: `text` as 'text',
                value: ``
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/stylus/tomwork.functions.styl'

    .register-form-container
        align-items center
        display flex
        justify-content center
        height 100vh
        text-align center
        width calc(100vw - 17px)

    .register-form
        border 2px solid #ffffff
        padding 40px

        form
            margin-right 100px
            margin-top 35px

    label
        box-sizing border-box
        padding-right 5px
        text-align right
        width 100px

    input
        flex-grow 1

    button
        margin-left 100px
        margin-top 10px
</style>
