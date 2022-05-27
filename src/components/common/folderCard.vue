<template>
    <div class="card folder" :style="cardGlobalStyle()" @click="visitCategory()">
        <div class="container p-3">
            <div class="row mt-4">
                <div class="col-10 text-left">
                    <h6 class="card-title">
                        <span class="material-symbols-outlined" style="background: transparent !important; vertical-align: bottom;">grade</span>
                        {{title}}
                    </h6>
                </div>
                <div class="col-2">
                        <span class="material-symbols-outlined">
                            more_vert
                        </span>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-left">
                    <p class="card-description text-info">
                        {{description}}
                    </p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 text-left">
                    <p style="margin-bottom: 0px;" class="text-secondary card-last-edited">
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            person
                        </span>
                        {{createdBy}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";

    export default {
        name: "card",
        props: ["title", "description", "createdBy", "to"],
        data: function () {
            return {
                hasMembers: false
            };
        },

        methods: {
            visitCategory() {
                this.setCategoryState
                    ({
                        id: this.to ?? '',
                        title: this.title ?? '',
                        description: this.description ?? '',
                        createdBy: this.createdBy ?? '',
                    });
                this.$router.push({ name: 'folder' });
            },
            cardGlobalStyle() {
                let contentBg = 'cursor: pointer; transition: ease-in-out 0.3s !important; background-color: ' + this.style.currentMode.contentBg + '; background: ' + this.style.currentMode.contentBg + '; ';
                let color = 'color: ' + this.style.currentMode.color + '; ';
                return contentBg + color;
            },
            ...mapActions({
                setCategoryState: "category/SET_CATEGORY",
            }),
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            })
        },
    };
</script>


<style scoped lang="scss">

    .folder::before {
        content: '';
        position: absolute;
        top: -18px;
        left: -1px;
        width: 200px;
        height: 25px;
        border: 1px solid rgba(0, 123, 255, 0.4);
        background: v-bind('style.currentMode.contentBg');
        border-radius: 25px 0 0 0;
        transition: ease-in-out 0.3s !important;
        clip-path: path('M 0 0 L 160 0 C 185 2, 175 16, 200 18 L 0 50 z');
    }

    .folder::after {
        content: '';
        position: absolute;
        left: 40px;
        width: 85px;
        height: 5px;
        top: -18px;
        background: rgba(0, 123, 255, 1);
        border-radius: 0 0 5px 5px;
    }


    .card:hover {
        .folder::before {
            background: rgba(0, 123, 255, 0.4) !important;
        }

        background-color: rgba(0, 123, 255, 0.4) !important;

        .card-description {
            color: #fff !important
        }

        .card-last-edited {
            color: #fff !important
        }
    }

    .card {
        min-width: 300px;
        max-width: 900px;
        width: 100%;
        border: 0px;
        border-radius: 10px;
        border: 1px solid rgba(0, 123, 255, 0.4);
        -webkit-box-shadow: 4px 7px 50px 15px rgba(0,0,0,0.24);
        box-shadow: 4px 7px 50px 15px rgba(0,0,0,0.24);
    }
</style>