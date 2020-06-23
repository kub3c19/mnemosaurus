<template>
    <div class="register-form-container">
        <div class="register-form">
            <h1>Pridať mnemotechnickú pomôcku</h1>
            <form action="/add-mnemonic" method="post" ref="form" @submit="submitOn">
                <csrf-token/>
                <div class="form-field-container">
                    <div v-for="[, field] in fieldsSorted" :key="field.name" class="form-field">
                        <label :for="field.name">{{field.label}}:</label>
                        <select v-if="field.tag === `select`" :id="field.name" :name="field.name"
                                :type="field.type" v-model="field.value">
                            <option v-for="option in field.options" :key="option.value"
                                    :value="option.value">{{option.label}}
                            </option>
                        </select>
                        <component v-else :is="field.tag" :id="field.name" :name="field.name"
                                   :type="field.type" v-model="field.value"/>
                        <div v-if="field.error" class="form-field-alert">{{field.error}}</div>
                    </div>
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
    // eslint-disable-next-line no-unused-vars
    import {Merge}     from "ts-essentials";
    import {FormField} from "../types";

    /** @description A component containing the form to add a mnemonic. */
    @Component({
        components: {
            CsrfToken
        },
        name: `AddMnemonic`
    })
    export default class AddMnemonic extends mixins(FormMixin)
    {
        public async languagesGet(): Promise<FormField['options'] | void>
        {
            return fetch(`/languages`).then(async (response: Merge<Response, {
                json(): Promise<{ id: number, name: string }[]>
            }>) =>
            {
                if (response.status >= 400)
                {
                    this.$root.$emit(`alert-show`, {
                        message: `Unable to load languages`,
                        type: `failed`
                    });

                    return;
                }

                return (await response.json()).map(({id, name}) =>
                {
                    return {label: name, value: id.toString()};
                });
            }).catch(console.error);
        }

        /** @description Form fields. */
        public fields = {
            /** @description The email form field. */
            expression1: {
                error: ``,
                label: `Výraz 1`,
                name: `expression1`,
                order: 1,
                tag: `input` as 'input',
                type: `` as '',
                value: ``
            },
            expression2: {
                error: ``,
                label: `Výraz 2`,
                name: `expression2`,
                order: 3,
                tag: `input` as 'input',
                type: `` as '',
                value: ``
            },
            language1: {
                error: ``,
                label: `Jazyk 1`,
                name: `language1`,
                options: [],
                order: 0,
                tag: `select` as 'select',
                type: `` as '',
                value: ``
            },
            language2: {
                error: ``,
                label: `Jazyk 2`,
                name: `language2`,
                options: [],
                order: 2,
                tag: `select` as 'select',
                type: `` as '',
                value: ``
            },
            text: {
                error: ``,
                label: `Text`,
                name: `text`,
                order: 4,
                tag: `textarea` as 'textarea',
                type: `` as '',
                value: ``
            }
        }

        public async created(): Promise<void>
        {
            const languages: FormField['options']  = await this.languagesGet() || [];

            this.fields.language1.options = languages;
            this.fields.language2.options = languages;
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

    .column
        width 50%

    label
        box-sizing border-box
        padding-right 5px
        text-align right
        width 100px

    input, textarea, select
        flex-grow 1

    button
        margin-left 100px
        margin-top 10px

    .form-field-container
        display grid
        grid-template "a c"\
        "b d"\
        "e e"

    .form-field
        &:first-child
            grid-area a

        &:nth-child(2)
            grid-area b

        &:nth-child(3)
            grid-area c

        &:nth-child(4)
            grid-area d

        &:last-child
            grid-area e
</style>
