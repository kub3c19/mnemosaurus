<template>
    <div class="register-form-container">
        <div class="register-form">
            <h1>Registrácia</h1>
            <form action="/register" method="POST" ref="form" @submit="submitOn">
                <input name="_token" type="hidden" :value="token">
                <div class="form-element">
                    <label for="username">Username:</label>
                    <input id="username" name="username" type="text" v-model="username">
                </div>
                <div class="form-element">
                    <label for="email">Email:</label>
                    <input id="email" name="email" type="email" v-model="email">
                </div>
                <div class="form-element">
                    <label for="password">Heslo:</label>
                    <input id="password" name="password" type="password" v-model="password">
                </div>
                <button>Odoslať</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue               from 'vue';
    import {Component, Prop} from "vue-property-decorator";

    /** @description A component containing the register form. */
    @Component({
        name: `RegisterForm`
    })
    export default class RegisterForm extends Vue
    {
        @Prop({required: true, type: String}) token!: string;

        public $refs!: {
            form: HTMLFormElement
        };

        /**
         * @description Listener of the submit event.
         * @param $event An object containing the event-related data.
         * */
        public async submitOn($event: Event): Promise<void>
        {
            const formData: FormData = new FormData(this.$refs.form);

            /** @description If some form field is empty, prevents submitting. */
            if ([...formData.values()].some((value) =>
            {
                return !value;
            }))
            {
                $event.preventDefault();
            }
        }

        /** @description The username form field. */
        public username: string = ``;
        /** @description The email form field. */
        public email: string = ``;
        /** @description The password form field. */
        public password: string = ``;
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

    .form-element
        align-items center
        display flex
        margin-vertical 10px

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
