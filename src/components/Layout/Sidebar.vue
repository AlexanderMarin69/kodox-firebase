<template>
    <div id="test" :style="appGlobalStyle()">
        <div style="font-size: 32px; margin-left:-95px !important;" class="ml-2">kodox.</div>
        <p class="gradient-text ml-2" style="font-size: 8px; font-weight: bold; margin-left: -95px !important;">The Code Docs Company.</p>
        <br />
        <ul style="margin-left: 6px;">
            <li class="hoverable-list-item">
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
            <!--<li class="hoverable-list-item">
        <span class="material-symbols-outlined" style="vertical-align: text-top;">
            folder
        </span>
        <span style="vertical-align: sub;" class="pl-1">Library</span>
    </li>-->
            <router-link style="all: unset;" class="hoverable-list-item" :to="'/library'">
                <span class="material-symbols-outlined" style="vertical-align: text-top; color: #007bff; font-weight: bold">
                    folder
                </span>
                <span style="vertical-align: sub; color: #007bff; font-weight: bold;" class="pl-1">Library</span>
            </router-link>
            <li class="hoverable-list-item" :to="'/article-view'">
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

    </div>
</template>

<script>
    import ThemeAlternator from "@/components/Design/ThemeAlternator.vue";
    import { mapState } from "vuex";

    export default {
        name: "Sidebar",
        components: {
            ThemeAlternator
        },
        data: function () {
            return {
                // should be set by a computed from db
            }
        },
        methods: {
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
    };
</script>


<style scoped>
    .quickNoteButton:hover {
        background-color: rgba(0, 123, 255, 0.4);
        border-radius: 10px;
        -webkit-transition: 0.3s all ease;
        -o-transition: 0.3s all ease;
        transition: 0.3s all ease;
    }
    .gradient-text {
        font-weight: bold;
        /* Fallback: Set a background color. */
        background-color: red;
        /* Create the gradient. */
        background-image: linear-gradient(45deg, #eaa16d, #af4261);
        /* Set the background size and repeat properties. */
        background-size: 100%;
        background-repeat: repeat;
        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
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
        margin-bottom: 10px;
        margin-left: 20px;
    }

    .hoverable-list-item:hover {
        background-color: #007bff;
        color: #fff;
        border-radius: 7px;
        font-weight: bold;
        -webkit-transition: 0.1s all ease;
        -o-transition: 0.1s all ease;
        transition: 0.1s all ease;
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
</style>
