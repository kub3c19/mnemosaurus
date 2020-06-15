<template>
    <header>
        <a class="logo" href="/">Mnemosaurus</a>
        <div class="login-container">
            <template v-if="username">
                <p>Prihlásený: {{username}}</p>
                <form action="/logout" method="get">
                    <csrf-token/>
                    <button>Odhlásiť sa</button>
                </form>
            </template>
            <template v-else>
                <div class="button-row">
                    <a :class="{active: pathname === `/register`}" href="/register">
                        <button>Registrácia</button>
                    </a>
                    <button @click="loginFormVisible = !loginFormVisible" class="login-button">Prihlásenie</button>
                </div>
                <form v-if="loginFormVisible" action="/login" class="login-form" method="post">
                    <csrf-token/>
                    <div class="form-element">
                        <input name="email" placeholder="Email" required type="email">
                    </div>
                    <div class="form-element">
                        <input name="password" placeholder="Heslo" required type="password">
                    </div>
                    <button>Odoslať</button>
                </form>
            </template>
        </div>
    </header>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from "vue-property-decorator";
    import CsrfToken              from "./CsrfToken.vue";

    /** @description A component containing the site header. */
    @Component({
        components: {
            CsrfToken
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

    $headerBackground = #111111;
    $headerBoxShadow = 0 0 10px 0 rgba(0, 0, 0, .3);

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
        &.active
            font-color #aaaaaa
            pointer-events none

            button
                background-color #aaaaaa
                font-color #111111
                border-color #aaaaaa

    .logo
        font-size 24px
        transition .25s

        &:hover
            font-color #aaaaaa

    .login-container
        justify-self right
        margin-left auto

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

    .button-row
        display flex

    .login-button
        margin-left 5px
</style>
