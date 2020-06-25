<template>
    <header>
        <a class="logo" href="/">Mnemosaurus</a>
        <nav>
            <a :class="{active: pathname === `/mnemonics/create`}"
               href="/mnemonics/create">Pridať mnemotechnickú pomôcku</a>
        </nav>
        <div class="login-container">
            <template v-if="username">
                <p>Prihlásený: {{username}}</p>
                <logout-form/>
            </template>
            <template v-else>
                <div class="button-row">
                    <a :class="{active: pathname === `/register`}" href="/register">
                        <button>Registrácia</button>
                    </a>
                    <button @click="loginFormVisible = !loginFormVisible" class="login-button">
                        Prihlásenie
                    </button>
                </div>
                <login-form v-if="loginFormVisible"/>
            </template>
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import CsrfToken              from "../modules/form/components/CsrfToken.vue";
    import LoginForm              from "../modules/form/components/LoginForm.vue";
    import LogoutForm             from "../modules/form/components/LogoutForm.vue";

    /** @description A component containing the site header. */
    @Component({
        components: {
            LogoutForm,
            CsrfToken,
            LoginForm
        },
        name: `HeaderComponent`
    })
    export default class HeaderComponent extends Vue
    {
        /** @description Username of the logged user. */
        @Prop({required: true, type: String}) public readonly username!: string;

        /** @description Determines whether the login form is visible. */
        public loginFormVisible: boolean = false;

        /** @description URL pathname. */
        public get pathname(): string
        {
            return window.location.pathname;
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/stylus/tomwork.functions.styl'
    @import '~@/stylus/variables.styl'

    header
        align-items center
        background-color $headerBackground
        box-shadow $headerBoxShadow
        box-sizing border-box
        display flex
        height 70px
        left 0
        padding 10px
        position fixed
        top 0
        width 100vw

    a
        transition .25s

        &:hover
            font-color #aaaaaa

        &.active
            font-color #aaaaaa
            pointer-events none

            button
                background-color #aaaaaa
                font-color #111111
                border-color #aaaaaa

    .logo
        font-size 24px

    .login-container
        justify-self right
        margin-left auto

    .button-row
        display flex

    .login-button
        margin-left 5px

    nav
        margin-left 50px
</style>
