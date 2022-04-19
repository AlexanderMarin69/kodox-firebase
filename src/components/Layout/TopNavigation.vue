<template>
    <div>
        <div class="container-fluid">
            <div class="row p-3 ml-5">
                <div class="col-sm-6 col-lg-2 pr-0">
                    <button :style="appGlobalStyle() + 'background-color: transparent !important; border:0px;'"
                            class="brand-color-animation"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                        Netmine 👇
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="appGlobalStyle()">
                        <p class="ml-5"><b>Actions</b></p>
                        <router-link to="createArticle" class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">➕ Create new (ctrl + n)</router-link>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">📁 Browse (ctrl + e)</a>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">✉️ Invite to space</a>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">🔍 Space Details</a>
                        <hr />
                        <p class="ml-5"><b>My Spaces</b></p>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">🚀 Private space</a>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">🚀 Netmine</a>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">🚀 NCF Public Docs space</a>
                        <a class="dropdown-item mb-2" href="#" :style="appGlobalStyle()">🚀 Case Study DPM space</a>
                        <hr />
                        <a class="dropdown-item" href="#" :style="appGlobalStyle()">⚙️ Preferences</a>
                    </div>
                    <p class="text-info ml-1">Shared Private Space</p>
                </div>
                <div class="col-sm-6 col-lg-1 pr-0 pl-0">
                    <!-- MOVE TO OWN COMPONENT WHEN IMPLEMENTING -->
                    <div class="avatars">
                        <span class="avatar">
                            <img src="https://picsum.photos/30/30">
                        </span>
                        <span class="avatar">
                            <img src="https://picsum.photos/30/30">
                        </span>
                        <span class="avatar">
                            <img src="https://picsum.photos/30/30">
                        </span>
                        <span class="avatar">
                            <img src="https://picsum.photos/30/30">
                        </span>
                    </div>

                    <!-- MOVE TO OWN COMPONENT WHEN IMPLEMENTING -->
                    <p class="mt-2 text-info">Members</p>
                </div>
                <div class="col-md-12 col-lg-8">
                    <div>
                        <div id="globalSearchInput" class="container-input-animation animated" :style="inputStyle()">
                            <input placeholder="Search for everyting.... (ctrl + f)"
                                   id="globalSearchInputField"
                                   @focus.native="focusInputField"
                                   @blur="unFocusInputField"
                                   class="form-control mr-sm-2 container demo animated customStyle"
                                   type="search"
                                   aria-label="Search" />
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-1 mt-1">
                    <GridListViewSwitch />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import GridListViewSwitch from "@/components/Layout/GridListViewSwitch.vue";
    import { mapActions, mapState } from "vuex";

    export default {
        name: "themeAlternator",
        components: {
            GridListViewSwitch
        },
        data: function () {
            return {
                isFocused: false,
            }
        },
        watch: {
            isGlobalSearchBarFocused(newValue) {
                if (newValue) {
                    document.getElementById("globalSearchInputField").focus();
                    this.isFocused = true;
                } else {
                    this.unFocusInputField();
                }
            }
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
                isGlobalSearchBarFocused: (store) => store.functions.isGlobalSearchBarFocused,
            }),
        },
        methods: {
            unFocusInputField() {
                this.isFocused = false;
                this.setGlobalSearchBarFocusFalse();
            },
            focusInputField() {
                this.isFocused = true;
            },
            inputStyle() {
                while (this.isFocused) {
                    if (this.style.currentMode.isLight) {
                        return '-webkit-box-shadow: 2px 5px 15px 5px rgba(0,0,0,0.19); box-shadow: 2px 5px 15px 5px rgba(0,0,0,0.19); z-index: 999;';
                    } else {
                        return '-webkit-box-shadow: 2px 5px 15px 5px rgba(255,255,255,0.19); box-shadow: 2px 5px 15px 5px rgba(255,255,255,0.19);z-index: 999;';
                    }
                }
                return '';
            },
            appGlobalStyle() {
                let bg = "background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            ...mapActions({
                setGlobalSearchBarFocusFalse: "functions/UN_FOCUS_GLOBAL_SEARCH_BAR",
            }),
        },
    };
</script>

<style scoped>
    /* MOVE TO COMPONENT WHEN BUILT */
    /* member avatars of space */
    .avatars {
        display: inline-block;
        transform: scale(-1, 1);
    }

    .avatar {
        position: relative;
        display: inline-block;
        border: 2px solid #ccc;
        border-radius: 50%;
        overflow: hidden;
        width: 33px;
    }

        .avatar:not(:first-child) {
            margin-left: -17px;
        }

        .avatar img {
            width: 100%;
            display: block;
            transform: scale(-1, 1);
        }
    /* MOVE TO COMPONENT WHEN BUILT */
    /* member avatars of space */






    .customStyle {
        width: 100% !important;
        border: 0px;
    }

    .alignText {
        text-align: start !important;
    }

    .brand-color-animation {
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
    }

    .form-control:focus {
        box-shadow: none;
    }

    .container-input-animation {
        width: 100%;
        height: 100%;
        /*outline: 1px solid red;*/
        border: 5px solid transparent;
        border-radius: 7px;
        box-sizing: border-box;
        font-size: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .animated {
        border-radius: 7px;
        padding: 10;
        margin: 10;
        background-image: linear-gradient(white, white), linear-gradient(180deg, #00d7b9, #b95dd7 50%, #ffb367 100%);
        background-repeat: no-repeat;
        background-size: 100% 100%, 100% 200%;
        background-position: 0 0, 0 100%;
        background-origin: padding-box, border-box;
        animation: highlight 1s infinite alternate;
    }

    @keyframes highlight {
        100% {
            background-position: 0 0, 0 0;
        }
    }
</style>
