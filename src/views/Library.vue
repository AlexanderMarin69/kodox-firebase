<template>
    <div class="container-fluid mt-3" style="display:block !important;">
        <div class="row">
            <div class="col-12 col-lg-3 text-left text-lg-left">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h1>Library</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 text-center text-lg-left">
                <div class="btn-group">
                    <div :style="appGlobalStyle()" class="btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <span style="vertical-align: super; font-size: 16px;">Filter</span>
                                    <span class="material-symbols-outlined" style="vertical-align: baseline;">
                                        expand_more
                                    </span>
                                </div>
                                <div class="col-6">
                                    <span style="vertical-align: super; font-size: 16px;">Sort</span>
                                    <span class="material-symbols-outlined" style="vertical-align: baseline;">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 text-center text-lg-left">
                <div :style="appGlobalStyle()" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <input type="text" :style="inputInputStyle()" class="form-control inputStyle" placeholder="Search categories" value="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 text-center text-lg-left">
                <div :style="appGlobalStyle()" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="container">
                        <div class="row">
                            <div class="col-6">
                                <GridListViewAlternator />
                            </div>
                            <div class="col-6">
                                <!--

                                switch for tags

                                    -->
                                <GridListViewAlternator />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--<div class="row">
            <div class="col-12 col-lg-3 text-center text-lg-left">
                <div class="btn-group">
                    <div :style="appGlobalStyle()" class="btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 pt-2 pl-2 pr-2 pb-4" style="overflow-x: scroll; width: 10%">
                                    <span class="p-2 disabled mr-1"
                                          :style="appGlobalStyle() + 'cursor:pointer;'"
                                          :class="{ TagActive: selectedTags.find(x => x === tag) }"
                                          v-for="tag in tags"
                                          @click="selectTag(tag)">
                                        {{tag}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
    </div>
    <div class="row mt-4">
        <!--

            // just switch between col-md-4 and col-md-12

            -->
        <div class="col-md-4 mb-4" v-for="tag in 10">
            <!--<card title="Google Firebase Deploy Guide Docs"
            description="This library goes through all docs regarding setup and deployment of firebase projects"
            to="category1"
            type="folder"
            createdBy="Felicia Marin" />-->
            <div class="folder mb-5 mt-5 card" :style="cardGlobalStyle()">

            </div>
        </div>
    </div>
</template>

<style scoped>

    /*

        make new component folderCard

    */


    .card {
        max-width: 900px;
        width: 100%;
        border: 0px;
        border-radius: 10px;
        border: 1px solid rgba(0, 123, 255, 0.4);
        /* -webkit-box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);
        box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);*/
        /*box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;*/
        /*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;*/
        -webkit-box-shadow: 0px 38px 50px -22px rgba(0,0,0,0.16);
        box-shadow: 0px 38px 50px -22px rgba(0,0,0,0.16);
    }

        .card:hover {
            background-color: rgba(0, 123, 255, 0.4) !important;
        }

    .card-description {
        color: #fff !important
    }

    .card-last-edited {
        color: #fff !important
    }


    .folder {
        width: 380px;
        height: 250px;
        border-radius: 5px 25px 25px 25px;
        /*filter: drop-shadow(0 0 0.75rem grey);*/
        /*background-color: rgba(0, 123, 255, 0.7) !important;*/
        background-color: #24252d !important;
        border: 1px solid #007bff;
        position: relative;
    }

        .folder::before {
            content: '';
            position: absolute;
            top: -18px;
            width: 200px;
            height: 25px;
            background: white;
            border-radius: 25px 0 0 0;
            clip-path: path('M 0 0 L 160 0 C 185 2, 175 16, 200 18 L 0 50 z');
        }

        .folder::after {
            content: '';
            position: absolute;
            left: 40px;
            width: 85px;
            height: 5px;
            top: -18px;
            background: #7036E9;
            border-radius: 0 0 5px 5px;
        }

    .inputStyle {
        border-radius: 10px;
        border: 0px;
    }

    .TagActive {
        background-color: rgba(0, 123, 255, 0.4) !important;
    }

        .TagActive:hover {
            background-color: rgba(220, 53, 69, 0.4) !important;
            border: 1px solid rgba(220, 53, 69, 0.4) !important;
        }

    .disabled {
        border: 1px solid rgba(0, 123, 255, 0.4);
        border-radius: 10px;
    }

        .disabled:hover {
            border: 1px solid rgba(108, 117, 125, 0.4);
        }
</style>

<script>
    import Carousel from "@/components/common/Carousel.vue";

    import loader from "@/components/common/loader.vue";
    import card from "@/components/common/card.vue";

    import { mapActions, mapState } from "vuex";

    import GridListViewAlternator from "@/components/Design/GridListViewAlternator.vue";

    export default {
        name: "HomeView",
        components: {
            loader,
            card,
            Carousel,
            GridListViewAlternator
        },
        data: function () {
            return {
                // tags
                selectedTags: [],
                tags:
                    [
                        'Docs',
                        'C#',
                        'HTML',
                        'CSS',
                        'SQL',
                        'Vue Js',
                        'React',
                        'Java',
                        'Azure',
                        'AWS',
                        'Kubernetes',
                        'Cheat Sheet',
                    ],
            };
        },
        methods: {
            selectTag(tag) {
                var found = this.selectedTags.find(x => x === tag);
                if (found === undefined) {
                    this.selectedTags.push(tag);
                } else {
                    this.selectedTags.splice(this.selectedTags.indexOf(found), 1);
                }
            },
            inputInputStyle() {
                if (this.style.currentMode.isLight) {
                    return 'transition: ease-in-out 0.3s !important; background-color:' + this.style.currentMode.contentBg + ' !important; color: ' + this.style.currentMode.color + ' !important; ';
                } else {
                    return 'transition: ease-in-out 0.3s !important; background-color:' + this.style.currentMode.contentBg + ' !important; color: ' + this.style.currentMode.color + ' !important; ';
                }
            },
            cardGlobalStyle() {
                let contentBg = 'transition: ease-in-out 0.3s !important; background-color: ' + this.style.currentMode.contentBg + '; ';
                let color = 'color: ' + this.style.currentMode.color + '; ';
                return contentBg + color;
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