﻿<template>
    <div class="container-fluid mt-2" style="display:block !important;">
        <div class="row" style="margin-right: 5px;">
            <div class="col-12 col-lg-3 text-center text-lg-left space-card">
                <div>
                    <div id="mySidebar" class="sidebar-test" :style="appGlobalStyleContent()">
                        <button class="btn btn-outline-primary closebtn" style="padding-bottom: 0px !important;" @click="closeNav()">
                            <span class="material-symbols-outlined" style="vertical-align: baseline;">
                                close
                            </span>
                            <span style="vertical-align: super;">Close</span>
                        </button>

                        <Sidebar style="padding-top: 60px; padding-bottom: 60px;"></Sidebar>
                    </div>

                    <div id="main" class="mb-3" style="display:none;">
                        <button class="btn btn-outline-primary openbtn" style="display:none; padding-bottom: 0px !important;" @click="openNav()">
                            <span class="material-symbols-outlined" style="vertical-align: baseline;">
                                menu
                            </span>
                            <span style="vertical-align: super;">Menu</span>
                        </button>
                    </div>

                    <div class="btn-group">
                        <div :style="appGlobalStyleContent() + 'padding-left: 0px !important; padding-right: 0px !important; border-radius: 10px; ' " class="btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <span style="vertical-align: super; font-size: 16px;">Netmine</span>
                                        <span class="material-symbols-outlined" style="vertical-align: baseline;">
                                            expand_more
                                        </span>
                                        <p class="text-info" style="font-size: 14px; margin-bottom: 0px; margin-top: -5px !important;">Private Space</p>
                                    </div>
                                    <div class="col-6">
                                        <div class="avatars">
                                            <span class="avatar">
                                                <img src="../../assets/placeholder.jpg">
                                            </span>
                                            <span class="avatar">
                                                <img src="../../assets/placeholder.jpg">
                                            </span>
                                            <span class="avatar">
                                                <img src="../../assets/placeholder.jpg">
                                            </span>
                                            <span class="avatar">
                                                <img src="../../assets/placeholder.jpg">
                                            </span>
                                        </div>
                                        <p class="text-info" style="font-size: 14px; margin-top: -6px; margin-bottom: 0px;">Members</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="appGlobalStyleContent() + 'border: 1px solid rgba(0, 123, 255, 0.4);' ">
                            <!--<p class="ml-5 text-info mt-2">Workspace Actions</p>
                            <div @click="navigate('article-view')" class="dropdown-item mb-2" href="#" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    add
                                </span>
                                <span class="hoverText">Create new</span>
                            </div>
                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    folder
                                </span>
                                <span class="hoverText">Browse</span>
                            </div>
                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    forward_to_inbox
                                </span>
                                <span class="hoverText">Invite to space</span>
                            </div>
                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    info
                                </span>
                                <span class="hoverText">Space Details</span>
                            </div>
                            <hr />-->

                            <p class="ml-5 text-info">My Workspaces</p>

                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    grid_view
                                </span>
                                <span class="hoverText">Private space</span>
                            </div>
                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    grid_view
                                </span>
                                <span class="hoverText">Netmine</span>
                            </div>
                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    grid_view
                                </span>
                                <span class="hoverText">NCF Public Docs space</span>
                            </div>
                            <div class="dropdown-item mb-2" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    grid_view
                                </span>
                                <span class="hoverText">Case Study DPM space</span>
                            </div>
                            <hr />
                            <div class="dropdown-item" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    settings
                                </span>
                                <span class="hoverText">Preferences</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-5 mt-1 search-card">
                <a href="#">
                    <div>
                        <div id="globalSearchInput" class="input-group">
                            <input placeholder="Search for everyting"
                                   id="globalSearchInputField"
                                   @focus.native="focusInputField"
                                   @blur="unFocusInputField"
                                   :style="inputInputStyle()"
                                   class="form-control mr-sm-2 inputStyle"
                                   type="text"
                                   autocomplete="on"
                                   readonly />
                            <div class="input-group-append" :style="inputInputStyle()" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                <span :style="inputInputStyle() + 'border: 1px solid #fff; margin-left: -10px; border-top-right-radius !important;' "
                                      class="input-group-text" id="basic-addon2">
                                    <span class="material-symbols-outlined">
                                        tune
                                    </span>
                                </span>
                            </div>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </div>

                            <!--ontouchstart="this.removeAttribute('readonly');"
    onfocus="this.removeAttribute('readonly');"-->
                        </div>
                    </div>
                </a>
            </div>
            <div class="col-12 col-lg-4 text-right user-card" style="padding-right: 0px !important">
                <a href="#">
                    <div class="btn-group">
                        <span :style="appGlobalStyleContent() + ' margin-top: 2px; padding: 12px; padding-bottom: 5px !important; border-radius: 10px; ' " class="btn mr-3" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <!--🔔-->
                            <span class="material-symbols-outlined">
                                notifications
                            </span>
                        </span>
                        <div class="dropdown-menu" :style="appGlobalStyleContent() + 'border: 1px solid rgba(0, 123, 255, 0.4);' ">
                            <a class="dropdown-item" href="#" :style="appGlobalStyleContent() + 'background-color: #f3f4f5;'">
                                <!--<span class="material-symbols-outlined mr-1" style="vertical-align: text-top;">
                                    person
                                </span>-->
                                <span class="hoverText">Welcome to kodox!<wbr> Check outour Video <wbr> tutorials on how to use :)</span>
                            </a>
                            <hr />
                            <a class="dropdown-item" href="#" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <!--<span class="material-symbols-outlined mr-1" style="vertical-align: text-top;">
                                    info
                                </span>-->
                                <span class="hoverText">Help</span>
                            </a>
                        </div>
                    </div>
                    <div class="btn-group">
                        <div :style="appGlobalStyleContent() + 'border-radius: 10px; '" class="btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="container" style="padding-right: 0px; ">
                                <div class="row" style="padding-right: 0px;">
                                    <div class="col-2 mt-1" style="padding-left: 0px;">
                                        <span class="avatar">
                                            <img src="../../assets/placeholder.jpg">
                                        </span>
                                    </div>
                                    <div class="col-1 mt-1" style="padding-right: 0px;">
                                        <span style="vertical-align: super;">Alexander Marin</span>
                                        <span class="material-symbols-outlined" style="vertical-align: baseline;">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="dropdown-menu" :style="appGlobalStyleContent() + 'border: 1px solid rgba(0, 123, 255, 0.4);' ">
                            <a class="dropdown-item" href="#" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    person
                                </span>
                                <span class="hoverText">Profile</span>
                            </a>
                            <a class="dropdown-item" href="#" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    info
                                </span>
                                <span class="hoverText">Help</span>
                            </a>
                            <router-link to="themes" class="dropdown-item mb-2" href="#" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    format_paint
                                </span>
                                <span class="hoverText">Themes</span>
                            </router-link>
                            <hr style="margin-top: 8px !important; margin-bottom: 8px !important;" />
                            <a class="dropdown-item" href="#" :style="appGlobalStyleContent() + 'vertical-align: sub;'">
                                <span class="material-symbols-outlined mr-1 hoverText" style="vertical-align: text-top;">
                                    subscriptions
                                </span>
                                <span class="hoverText">Subscription</span>
                            </a>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import GridListViewSwitch from "@/components/Layout/GridListViewSwitch.vue";
    import { mapActions, mapState } from "vuex";
    import Sidebar from "@/components/Layout/Sidebar.vue";

    export default {
        name: "themeAlternator",
        components: {
            GridListViewSwitch,
            Sidebar
        },
        data: function () {
            return {
                isFocused: false,
            }
        },
        watch: {
            isGlobalSearchBarFocused(newValue) {
                if (newValue) {
                    document.getElementById("globalSearchInputField").removeAttribute("readonly");
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
            navigate(path) {
                this.$router.push({ name: path });
            },
            openNav() {
                document.getElementById("mySidebar").style.width = "250px";
                /*document.getElementById("main-test").style.marginLeft = "250px";*/
            },
            closeNav() {
                document.getElementById("mySidebar").style.width = "0";
                //document.getElementById("main-test").style.marginLeft = "0";
            },
            unFocusInputField() {
                document.getElementById("globalSearchInputField").setAttribute('readonly', true);
                this.isFocused = false;
                this.setGlobalSearchBarFocusFalse();
            },
            focusInputField() {
                document.getElementById("globalSearchInputField").removeAttribute("readonly");
                this.isFocused = true;
            },
            inputInputStyle() {
                if (this.style.currentMode.isLight) {
                    return 'transition: ease-in-out 0.3s !important; background-color:' + this.style.currentMode.contentBg + ' !important; color: ' + this.style.currentMode.color + ' !important; ';
                } else {
                    return 'transition: ease-in-out 0.3s !important; background-color:' + this.style.currentMode.contentBg + ' !important; color: ' + this.style.currentMode.color + ' !important; ';
                }
            },
            inputStyle() {
                while (this.isFocused) {
                    if (this.style.currentMode.isLight) {
                        return '';
                    } else {
                        return 'box-shadow: rgba(255, 255, 255, 0.2) 0px 2px 8px 0px;';
                    }
                }
                return '';
            },
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            appGlobalStyleContent() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.contentBg + "; ";
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
    .inputStyle {
        padding: 18px !important;
        border-radius: 10px;
        border: 0px;
    }

    @media screen and (max-width: 679px) {
        .space-card {
            margin-bottom: 12px;
        }

        .search-card {
            margin-bottom: 12px;
        }

        .user-card {
            padding: 0px !important;
            margin-left: -5% !important;
        }
    }


    .sidebar-test {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        overflow-x: hidden;
        transition: 0.5s;
    }

        .sidebar-test a {
            padding: 8px 8px 8px 32px;
            text-decoration: none;
            font-size: 25px;
            color: #818181;
            display: block;
            transition: 0.3s;
        }

    .sidebar a:hover {
        color: #f1f1f1;
    }

    .sidebar-test .closebtn {
        position: absolute;
        top: 15px;
        left: -18px;
        margin-left: 50px;
    }

    .openbtn:hover {
        background-color: #444;
    }

    #main-test {
        transition: margin-left .5s;
        padding: 16px;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidebar-test {
            padding-top: 15px;
        }

            .sidebar-test a {
                font-size: 18px;
            }
    }


    @media screen and (max-width: 679px) {
        .openbtn {
            display: block !important;
        }

        #main {
            display: block !important;
        }
    }


    .dropdown-item:hover {
        background-color: rgba(0, 123, 255, 0.4) !important;
        font-weight: bold;
        cursor: pointer;
    }

    .dropdown-menu {
        border: 0px;
        border-radius: 10px;
    }

    .dropdownMenuStyle {
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
    }




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
        width: 25px;
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


    @keyframes highlight {
        100% {
            background-position: 0 0, 0 0;
        }
    }
</style>
