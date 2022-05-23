<template>
    <div>
        <Toggle v-model="themeAlernatorValue"
                :on-label="darkIcon"
                :off-label="lightIcon"
                @change="changeTheme"
                class="toggle-red" />
    </div>
</template>

<script>
    import { mapActions, mapState } from "vuex";
    import Toggle from '@vueform/toggle'
    export default {
        name: "themeAlternator",
        components: {
            Toggle
        },
        data: function () {
            return {
                lightIcon: '<span class="material-symbols-outlined">visibility_off</span>',
                darkIcon: '<span class="material-symbols-outlined">tag</span>',
                // should be set by a computed from db
                themeAlernatorValue: null
            }
        },
        watch: {
            styleCurrentMode(newValue) {
                if (newValue.isLight) {
                    this.themeAlernatorValue = false;
                } else {
                    this.themeAlernatorValue = true;
                }
            }
        },
        computed: {
            ...mapState({
                styleCurrentMode: (store) => store.style.currentMode,
            }),
        },
        methods: {
            changeTheme(value) {
                if (value) {
                    this.setGlobalDarkMode();
                } else {
                    this.setGlobalLightMode();
                }
            },
             ...mapActions({
                 setGlobalLightMode: "style/LIGHT_MODE",
                 setGlobalDarkMode: "style/DARK_MODE",
             }),
        },
    };
</script>
<style src="@vueform/toggle/themes/default.css"></style>
<style scoped>
    /deep/ .toggle  {
        padding: 4px !important;
        width: 58px !important;
        height: 20px;
    }
    /deep/ .toggle-handle-on {
        margin-top:4px;
    }
    /deep/ .toggle-handle-off {
        margin-top: 4px;
        background-color: black !important;
    }
    .toggle-red {
        --toggle-bg-on: #212223;
        --toggle-bg-off: #fff;
        --toggle-border-on: #fff;
        --toggle-border-off: #212223;
    }
</style>
