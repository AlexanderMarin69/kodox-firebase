<template>
    <div class="container-fluid mt-3" style="display:block !important;">
        <div class="row">
            <div class="col-12 col-md-6" style="padding-right: 0px;">
                <h1>{{stateCategory.title}}</h1>
            </div>

            <div class="col-12 col-md-4">
            </div>

            <div class="col-12 col-md-2 text-right text-lg-right mt-2" style="padding-left: 0px;">
                <button class="btn btn-outline-primary" @click="navigate('article-view')">Create new</button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12 col-md-4 text-center text-lg-left">
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
    </div>
    <div class="row mt-4">
        <div class="col-md-6 col-md-3 mb-2" v-for="article in articles">
            <card :createdBy="article.createdBy ?? ''"
                  :to="article.id  ?? 'new'"
                  :description="article.description  ?? ''"
                  :title="article.title ?? ''"
                  type="article"
                  edited="Last edit 2022-05-03" />
        </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <!--<div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-10 text-center">
                <h6 class="text-info">Reached the end of the list 🎉</h6>
                <button class="btn btn-outline-primary mt-3" @click="showCreateNewCategoryFields = true">Create a new category</button>
            </div>
            <div class="col-1"></div>
        </div>
    </div>-->
</template>


<script>
    import Loader from "@/components/common/loader.vue";
    import { mapActions, mapState } from "vuex";
    import GridListViewAlternator from "@/components/Design/GridListViewAlternator.vue";
    import Card from "@/components/common/card.vue";
    import articleService from "@/services/articleService";

    export default {
        name: "folder",
        components: {
            Loader,
            GridListViewAlternator,
            Card
        },
        data: function () {
            return {
                currentCategoryId: '',
                articles: []
            };
        },
        methods: {
            async getCategoryArticles() {
                await articleService
                    .getArticles()
                    .then((result) => {
                        this.articles = result.filter(x => x.categoryId === this.stateCategory.id);
                    });
            },
            navigate(path) {
                this.$router.push({ name: path, params: {id: 'new'}});
            },
            appGlobalStyle() {
                let bg = "transition: ease-in-out 0.3s !important; background-color: " + this.style.currentMode.bg + "; ";
                let color = "color: " + this.style.currentMode.color + "!important; ";
                return bg + color;
            },
            inputInputStyle() {
                if (this.style.currentMode.isLight) {
                    return 'transition: ease-in-out 0.3s !important; background-color:' + this.style.currentMode.contentBg + ' !important; color: ' + this.style.currentMode.color + ' !important; ';
                } else {
                    return 'transition: ease-in-out 0.3s !important; background-color:' + this.style.currentMode.contentBg + ' !important; color: ' + this.style.currentMode.color + ' !important; ';
                }
            },
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
                stateCategory: (store) => store.category.category
            }),
        },
        mounted() {
            this.currentCategoryId = this.stateCategory.id;
            this.getCategoryArticles();
        },
    };
</script>

<style scoped lang="scss">
    .inputStyle {
        border-radius: 10px;
        border: 0px;
    }
</style>