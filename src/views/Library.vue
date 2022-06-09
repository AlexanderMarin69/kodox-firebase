<template>
    <div class="container-fluid mt-3" style="display:block !important;">
        <div class="row">
            <div class="col-12 col-md-6" style="padding-right: 0px;">
                <span><span style="border: 0px; padding-left: 0px;" class="btn btn-outline-warning">Netmine</span></span>
                <h1>Library</h1>
            </div>
            <div class="col-12 col-md-4">
            </div>
            <div class="col-12 col-md-2 text-right text-lg-right mt-2" style="padding-left: 0px;">
                <!--<button class="btn btn-outline-primary" @click="showCreateNewCategoryFields = !showCreateNewCategoryFields">Create new</button>-->
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-2 text-center text-lg-left">
                <button class="btn btn-outline-primary"
                        @click="showCreateNewCategoryFields = !showCreateNewCategoryFields">
                    Create new
                </button>
            </div>

            <div class="col-12 col-md-2 text-center text-lg-left">
                <div class="btn-group">
                    <div :style="appGlobalStyle()" class="btn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div class="container">
                            <div class="row">
                                <div class="col-6">
                                    <div style=" background-color: #24252d; width: 100px; border-radius: 10px;"
                                         class="pl-4 pb-1 pt-1">
                                        <div class="row">
                                            <span class="material-symbols-outlined" style="font-size: 18px; margin-top: 2px;">
                                                filter_alt
                                            </span>

                                            <span style="font-size: 16px;">Filter</span>

                                            <span class="material-symbols-outlined ml-1">
                                                expand_more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div style=" background-color: #24252d; width: 100px; border-radius: 10px;"
                                         class="pl-4 pb-1 pt-1">
                                        <div class="row">
                                            <span class="material-symbols-outlined" style="font-size: 18px; margin-top: 2px;">
                                                sort
                                            </span>

                                            <span style="font-size: 16px;">Sort</span>

                                            <span class="material-symbols-outlined ml-1">
                                                expand_more
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4 text-center text-lg-left">
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
            <div class="col-12 col-md-4 text-center text-lg-left">
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
        <div class="row" v-if="showCreateNewCategoryFields">
            <div class="col-12 col-lg-3 text-left text-lg-left">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <label>Category title</label>
                            <input type="text" :style="inputInputStyle()" class="form-control inputStyle" placeholder="Title" v-model="newCategoryTitle" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <label>Category description</label>
                            <input type="text" :style="inputInputStyle()" class="form-control inputStyle" placeholder="Description" v-model="newCategoryDescription" />
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <button class="btn btn-success mr-3" @click="createNewCategory()">Create</button>
                            <button class="btn btn-outline-secondary" @click="showCreateNewCategoryFields = false">Cancel</button>
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
    <div class="row mt-5 text-center">
        <div class="col-12 col-lg-6 mb-4 text-center" v-for="category in categories">
            <FolderCard :to="category.id"
                        :title="category.title"
                        :description="category.description"
                        :createdBy="category.createdBy"
                        class="mb-5" />
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10 text-center">
                <h6 class="text-info">Reached the end of the list 🎉</h6>
                <button class="btn btn-outline-primary mt-3" @click="showCreateNewCategoryFields = true">Create a new category</button>
            </div>
            <div class="col-1"></div>
        </div>
    </div>
</template>


<script>
    import Carousel from "@/components/common/Carousel.vue";
    import FolderCard from "@/components/common/folderCard.vue";
    import loader from "@/components/common/loader.vue";
    import { mapActions, mapState } from "vuex";
    import GridListViewAlternator from "@/components/Design/GridListViewAlternator.vue";

    import categoryService from "@/services/categoryService";

    export default {
        name: "HomeView",
        components: {
            loader,
            Carousel,
            GridListViewAlternator,
            FolderCard
        },
        data: function () {
            return {
                showCreateNewCategoryFields: false,
                newCategoryDescription: '',
                newCategoryTitle: '',

                categories: [],

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
            async createNewCategory() {
                await categoryService
                    .createCategory
                    ({
                        title: this.newCategoryTitle,
                        description: this.newCategoryDescription
                    })
                    .then(() => {
                        this.showCreateNewCategoryFields = false;
                        this.newCategoryDescription = '';
                        this.newCategoryTitle = '';
                        this.getCategories();
                    });
            },
            async getCategories() {
                await categoryService.getCategories().then((result) => {
                    this.categories = result;
                });
            },
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
            this.getCategories();
            this.setUsersPrefferedThemeOrDefault();
        },
    };
</script>


<style scoped>
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