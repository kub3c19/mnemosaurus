<template>
    <div class="mnemonics">
        <div class="mnemonics-content">
            <form action="/mnemonics" class="search-form" method="get" @submit.prevent>
                <input name="q" type="text" v-model="query">
                <button>Vyhľadať</button>
            </form>
            <table class="mnemonic-table">
                <tbody v-for="(mnemonic, mnemonicIndex) in mnemonics" :key="mnemonicIndex">
                    <tr>
                        <td style="padding-right: 5px; text-align: right">({{mnemonic.expression_expression.expression1.language.code}})</td>
                        <td>{{mnemonic.expression_expression.expression1.text}}</td>
                        <td style="padding-right: 5px; text-align: right">{{mnemonic.expression_expression.expression2.text}}</td>
                        <td>({{mnemonic.expression_expression.expression2.language.code}})</td>
                    </tr>
                    <tr>
                        <td class="text" colspan="4">{{mnemonic.text}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';

    /** @description A component containing mnemonics. */
    @Component({
        name: `Mnemonics`
    })
    export default class Mnemonics extends Vue
    {
        /** @description List of all mnemonics found by query. */
        public mnemonics: MnemonicType[] = [];

        /** @description Query used to search expressions. */
        public query: string = ``;

        /** @description On change of the query input value, search for the expressions containing the query. */
        @Watch('query')
        public async queryChangeOn(): Promise<void>
        {
            /** @description The URL of the GET request. */
            const url: URL = new URL(`/mnemonics`, document.location.href);

            url.searchParams.append(`q`, this.query);

            await fetch(url.href, {
                credentials: `same-origin`,
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "X-CSRF-Token": document.querySelector<HTMLMetaElement>('meta[name=token]').content
                },
                method: `GET`
            }).then(async (response) =>
            {
                if (response.status >= 400)
                {
                    return;
                }

                this.mnemonics = await response.json();
            }).catch(console.error);
        }
    };
</script>

<style lang="stylus" scoped>
    .mnemonics
        display flex
        justify-content center
        margin-top 100px

    .mnemonics-content
        max-width 600px
        width 100%

    .search-form
        display flex
        width 100%

        input
            flex-grow 1

        button
            $color = #0000a6

            background-color $color
            border-color $color

            $colorHover = blend(rgba($color, .7), #ffffff)

            &:hover
                background-color $colorHover
                border-color $colorHover
                color #ffffff

    .mnemonic-table
        box-sizing border-box
        margin-top 10px
        width 100%

        tbody
            border-collapse collapse
            border-bottom 4px solid #222222
            border-top 4px solid #222222
            margin-bottom 10px

            &:nth-child(odd)
                tr
                    background-color #101010

            &:nth-child(even)
                tr
                    background-color #2c2c2c

        tr
            line-height 2.5em

        .text
            text-align center
</style>
