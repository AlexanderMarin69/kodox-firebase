<template>
    <div>
        <Toggle v-model="gridListAlernatorValue"
                on-label="Grid view"
                off-label="List view"
                @change="changeViewType"
                class="toggle-red" />
    </div>
</template>




<script>
    import { mapActions } from "vuex";
    import Toggle from '@vueform/toggle'
    export default {
        name: "themeAlternator",
        components: {
            Toggle
        },
        data: function () {
            return {
                // should be set by a computed from db
                gridListAlernatorValue: true
            }
        },
        methods: {
            changeViewType(value) {
                //if (value) {
                //    this.setGlobalDarkMode();
                //} else {
                //    this.setGlobalLightMode();
                //}
            },
             //...mapActions({
             //    setGlobalLightMode: "style/LIGHT_MODE",
             //    setGlobalDarkMode: "style/DARK_MODE",
             //}),
        },
    };
</script>
<style src="@vueform/toggle/themes/default.css"></style>
<style scoped>
    /deep/ .toggle  {
        padding: 7px !important;
        width: 80px !important;
        height: 20px;
    }
    /deep/ .toggle-label {
        margin-right: 12px !important;
    }
    /deep/ .toggle-handle-on {
        margin-top:7px;
    }
    /deep/ .toggle-handle-off {
        margin-top: 7px;
        background-color: black !important;
    }
    .toggle-red {
        --toggle-bg-on: #212223;
        --toggle-bg-off: #fff;
        --toggle-border-on: #fff;
        --toggle-border-off: #212223;
    }
</style>
