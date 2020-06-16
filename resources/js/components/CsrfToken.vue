<template>
    <input name="_token" required type="hidden" :value="token">
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";

    /** @description A component containing a token preventing Cross-site request forgery. */
    @Component({
        name: `CsrfToken`
    })
    export default class CsrfToken extends Vue
    {
        /** @description Token preventing Cross-site request forgery. */
        public get token(): string
        {
            return document.querySelector<HTMLMetaElement>(`meta[name=token]`).content;
        }
    }
</script>
