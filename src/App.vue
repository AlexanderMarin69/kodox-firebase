<template>
    <div class="container-xl" style="display: grid; grid-template-columns: 1fr minmax(10px, 92%); height: 100px; margin-left: 0px; margin-right: 0px; padding-left: 0px; padding-right: 0px;">
        <aside :style="appGlobalStyle()">
            <div style="font-size: 23px; cursor: pointer;" @click="navigate('/')">
                <span class="material-symbols-outlined" style="vertical-align: sub; font-size: 22px;">
                    menu_book
                </span>
                <span style="vertical-align: text-top;" class="ml-2">kodox.</span>
            </div>
            <p class="gradient-text ml-2" style="font-size: 10px; font-weight: bold; cursor: pointer;" @click="navigate('/')">The Code Docs Company.</p>
            <br />
            <ul>
                <li class="hoverable-list-item" @click="navigate('/')">
                    <span class="material-symbols-outlined" style="vertical-align: text-top; color: #007bff; font-weight: bold">
                        team_dashboard
                    </span>
                    <span style="vertical-align: sub; color: #007bff; font-weight: bold;" class="pl-1">Dashboard</span>
                </li>
                <li class="hoverable-list-item">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        grid_view
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Spaces</span>
                </li>

                <li class="hoverable-list-item" @click="navigate('/library')">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        folder
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Library</span>
                </li>
                <li class="hoverable-list-item">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        delete
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Archive</span>
                </li>
                <li class="hoverable-list-item">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        settings
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Settings</span>
                </li>

                <br />

                <li><ThemeAlternator /></li>

                <br />

                <li class="hoverable-list-item">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        keyboard
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Hotkeys</span>
                </li>
                <li class="hoverable-list-item">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        play_circle
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Tutorials</span>
                </li>
                <li class="hoverable-list-item">
                    <span class="material-symbols-outlined" style="vertical-align: text-top;">
                        logout
                    </span>
                    <span style="vertical-align: sub;" class="pl-1">Log out</span>
                </li>

                <br />

                <li>
                    <div class="p-1 quickNoteButton" style="width: 75px; height: 75px; border-radius: 10px; border: 1px solid rgba(0, 123, 255, 0.4);">
                        <center>
                            <span class="mt-2 material-symbols-outlined">
                                add
                            </span>
                            <br />
                            Quick Note
                        </center>
                    </div>
                </li>

            </ul>
        </aside>
        <main :style="appGlobalStyle()">
            <nav class="navbar" :style="appGlobalStyle()">
                <TopNavigation :style="appGlobalStyle()" />

                <router-view>
                </router-view>
            </nav>
        </main>
    </div>
</template>

<script>
    import TopNavigation from "@/components/Layout/TopNavigation.vue";
    import ThemeAlternator from "@/components/Design/ThemeAlternator.vue";

    import { mapState, mapActions } from "vuex";

    import router from 'vue-router'

    export default {
        name: "HomeView",
        components: {
            TopNavigation,
            ThemeAlternator
        },
        data() {
            return {};
        },
        methods: {
            navigate(path) {
                this.$router.push(path);
            },
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            ...mapActions({
                focusGlobalSearchBar: "functions/FOCUS_GLOBAL_SEARCH_BAR",
            }),
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
        mounted() {
            //document.body.style.zoom = "90%";

            this._keyListener = function (e) {
                //if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
                //    e.preventDefault(); // present "Save Page" from getting triggered.

                //    alert('saveeeeeeee');
                //}
                if (e.keyCode === 114 || (e.ctrlKey && e.keyCode === 70)) {
                    e.preventDefault();
                    this.focusGlobalSearchBar();
                }
            };

            document.addEventListener("keydown", this._keyListener.bind(this));
        },
        //beforeDestroy() {  USE THIS WHEN SAVING INSIDE A CODE BLOCK OR WHATEVER !!!!!!!!!!!!!!!!!
        //    document.removeEventListener('keydown', this._keyListener);
        //}
    };
</script>


<style scoped>
    .gradient-text {
        font-weight: bold;
        background-color: red;
        background-image: linear-gradient(45deg, #eaa16d, #af4261);
        background-size: 100%;
        background-repeat: repeat;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }

    .quickNoteButton:hover {
        background-color: rgba(0, 123, 255, 0.4);
        border-radius: 10px;
        -webkit-transition: 0.3s all ease;
        -o-transition: 0.3s all ease;
        transition: 0.3s all ease;
    }

    ul {
        padding-left: 0px;
    }

    li {
        list-style: none;
        text-align: start;
        padding: 12px;
        padding-right: 0px !important;
        padding-left: 4px !important;
        width: 100% !important;
        font-size: 12px;
        cursor: pointer;
    }

    router-link {
        list-style: none !important;
        text-align: start !important;
        padding: 12px !important;
        padding-right: 0px !important;
        padding-left: 4px !important;
        width: 100% !important;
        font-size: 12px !important;
    }

    .hoverable-list-item {
        cursor: pointer;
        background: transparent;
        border: 0px !important;
        -webkit-transition: 0.1s all ease;
        -o-transition: 0.1s all ease;
        transition: 0.1s all ease;
    }

        .hoverable-list-item:hover {
            background-color: rgba(0, 123, 255, 0.4);
            border-radius: 7px;
            font-weight: bold;
            -webkit-transition: 0.1s all ease;
            -o-transition: 0.1s all ease;
            transition: 0.1s all ease;
        }

    #navWrapperSticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 10;
        background-color: #141618;
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
        transition: ease-in-out 0.3s;
    }




    .logo {
        margin-right: 50px;
    }

    .list {
        list-style: none;
        display: flex;
        gap: 25px;
    }


    @media screen and (max-width: 679px) {
        .menu {
            width: 100%;
            max-height: 0;
            overflow: hidden;
        }

        .list {
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }

        .navbar label {
            display: inline-flex;
            align-items: center;
            cursor: pointer;
        }

        #toggler:checked ~ .menu {
            max-height: 100%;
        }
    }

    main,
    aside {
        padding: 12px;
    }

    aside {
        background: #81cfd9;
    }


    @media screen and (max-width: 679px) {
        .container-xl {
            width: 100% !important;
            display: block !important;
        }

        aside {
            display: none !important;
        }
    }




    #toggler,
    .navbar label {
        display: none;
    }

    .navbar {
        background-color: black;
        color: white;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
    }

        .navbar a {
            text-decoration: none;
            color: inherit;
        }

    main {
        /*background: #d4f2c4;*/
        padding: 0px;
    }
</style>