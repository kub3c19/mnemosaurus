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
    import {Component, Vue} from "vue-property-decorator";
    import CsrfToken        from "./CsrfToken.vue";

    /** @description A component containing the register form. */
    @Component({
        components: {
            CsrfToken
        },
        name: `RegisterForm`
    })
    export default class RegisterForm extends Vue
    {
        public $refs!: {
            /** @description Register form HTML Element. */
            form: HTMLFormElement
        };

        /**
         * @description Listener of the submit event.
         * @param $event An object containing the event-related data.
         * */
        public async submitOn($event: Event): Promise<void>
        {
            const formData: FormData = new FormData(this.$refs.form);

            $event.preventDefault();

            return await fetch(`/register`, {
                body: formData,
                credentials: `same-origin`,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                },
                method: `POST`
            }).then(async (response) =>
            {
                const {errors}: {errors: {[s: string]: string[]}} = await response.json();

                Object.entries(errors).forEach(([formField, errors]) =>
                {
                    this.fields[formField].error = errors.join(`, `);
                })
            }).catch(console.error);
        }

        /** @description Form fields. */
        public fields: {
            [s: string]: FormField
        } = {
            /** @description The email form field. */
            email: {
                error: ``,
                label: `Email`,
                name: `email`,
                order: 1,
                type: `email`,
                value: ``
            },
            /** @description The password form field. */
            password: {
                error: ``,
                label: `Heslo`,
                name: `password`,
                order: 2,
                type: `password`,
                value: ``
            },
            /** @description The username form field. */
            username: {
                error: ``,
                label: `Username`,
                name: `username`,
                order: 0,
                type: `text`,
                value: ``
            }
        }

        /** @description Form fields sorted by their order value. */
        public get fieldsSorted(): [string, FormField][]
        {
            return Object.entries(this.fields).sort(([, fieldA], [, fieldB]) =>
            {
                return fieldA.order - fieldB.order;
            })
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
