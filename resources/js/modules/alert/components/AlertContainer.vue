<template>
    <div class="alert-container">
        <alert v-for="alert in alerts" :key="alert.id" :id="alert.id" :message="alert.message"
               :state="states[alert.type]" @destroy="alertDestroyOn"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Alert            from './Alert.vue';

    /** @description The component containing all custom alerts. */
    @Component({
        components: {
            Alert
        },
        name: `AlertContainer`
    })
    export default class AlertContainer extends Vue
    {
        /**
         * @description Runs on an attempt to destroy an alert.
         * @param alertId Id of the alert to destroy.
         * */
        public alertDestroyOn(alertId: number): void
        {
            this.alerts = this.alerts.filter(({id}) =>
            {
                return id !== alertId;
            });
        }

        /** @description Array of all alerts of the container. */
        public alerts: { id: number, message: string, type: string }[] = [];
        /** @description Id of the next alert which will be created. */
        public id: number = 0;
        /** @description Object containing all possible state types of the alerts with all the parameters needed to differentiate the alerts visually. */
        public readonly states: { [s: string]: { backgroundColor: string, color: string } } = {
            failed: {backgroundColor: `#ff262b`, color: `#ffffff`},
            successful: {backgroundColor: `#00d12a`, color: `#ffffff`}
        };

        public mounted()
        {
            /** @description Creates an alert. */
            this.$root.$on(`alert-show`, ({message, type}: { message: string, type: string }) =>
            {
                this.alerts.push({id: this.id, message, type});
                this.id += 1;
            });
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~@/stylus/tomwork.functions.styl'

    .alert-container
        display flex
        flex-direction column
        opacity: .95
        position fixed
        right 17px
        top 60px
        width 367px
        z: 4

        @media (max-width 1023px)
            bottom 15px
            flex-direction column-reverse
            left 0
            margin auto
            right 0
            top auto
            width calc(100% - 30px)
</style>
