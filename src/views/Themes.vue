<template>
    <div class="container-fluid">
        <div class="col-12 col-lg-12 text-left text-lg-left mt-4">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1>Themes</h1>
                        <p class="text-info">
                            Pick between different themes for your kodox.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3 text-center">
            <div class="col-12 col-lg-4 mb-4 text-center" v-for="theme in themes">
                <div class="card" :style="themeCardStyle(theme) + 'cursor: pointer;'">
                    <div class="card-body">
                        <!-- 7 -->
                        <h4 class="card-title text-left">
                            {{theme.contentBg}} <span v-if="theme.isSystemDefault">(Default)</span>
                        </h4>
                        <br />
                        <br />
                        <br />
                        <h4 class="card-title text-left">
                            {{theme.bg}}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
    </div>
</template>
<style scoped lang="scss">
    .card {
        width: 300px;
        height: 180px;
        border: 0px;
        border-radius: 10px;
        -webkit-box-shadow: 0px 38px 50px -22px rgba(0,0,0,0.16);
        box-shadow: 0px 38px 50px -22px rgba(0,0,0,0.16);
    }
</style>
<script>
    import loader from "@/components/common/loader.vue";
    import { mapActions, mapState } from "vuex";
    export default {
        name: "HomeView",
        components: {
            loader,
        },
        data: function () {
            return {
                themes: [
                    {
                        bg: '#f3f4f5',
                        contentBg: '#ffffff',
                        color: '#27354e',
                        isSystemDefault: true
                    },
                    {
                        bg: '#15151c',
                        contentBg: '#24252d',
                        color: '#dcdde2',
                        isSystemDefault: true
                    },
                    {
                        bg: '#354259',
                        contentBg: '#CDC2AE',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#FFF2F2',
                        contentBg: '#FAD4D4',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#E3FCBF',
                        contentBg: '#B8F1B0',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#B3E8E5',
                        contentBg: '#82DBD8',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#EFEFEF',
                        contentBg: '#205375',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#FF7700',
                        contentBg: '#E04D01',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#4E944F',
                        contentBg: '#83BD75',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#EEEEEE',
                        contentBg: '#DDDDDD',
                        color: '#27354e',
                        isSystemDefault: false
                    },
                    {
                        bg: '#F806CC',
                        contentBg: '#A91079',
                        color: '#dcdde2',
                        isSystemDefault: false
                    },
                    {
                        bg: '#B3E8E5',
                        contentBg: '#82DBD8',
                        color: '#27354e',     
                        isSystemDefault: false
                    },
                ]
            };
        },
        methods: {
            themeCardStyle(theme) {
                let bg = `color: ${theme.color}; background-image: linear-gradient(0deg, ${theme.bg} 25%, ${theme.contentBg} 25%, ${theme.contentBg} 50%, ${theme.bg} 50%, ${theme.bg} 75%, ${theme.contentBg} 75%, ${theme.contentBg} 100%) !important; background-size: 440.00px 440.00px; !important;`;
                return bg.toString();
            },
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            ...mapActions({
                setUsersPrefferedThemeOrDefault: "style/SET_PREFFERED_THEME_OR_DEFAULT",
            }),
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
        mounted() {
            this.setUsersPrefferedThemeOrDefault();
        },
    };
</script>
