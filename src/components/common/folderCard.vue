<template>
    <div class="card folder" :style="cardGlobalStyle()" @click="navigate">
        <div class="container p-3">
            <div class="row mt-4">
                <div class="col-12 text-left">
                    <h4 class="card-title">Kategori 1</h4>
                </div>
            </div>
            <div class="row">
                <div class="col-12 text-left">
                    <p class="card-description text-info">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-12 text-left">
                    <p style="margin-bottom: 0px;" class="text-secondary card-last-edited">
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            description
                        </span>
                        16 articles
                        <br />
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            person
                        </span>
                        Alexander Marin
                        <br />
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            edit
                        </span>
                        2022-05-17
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


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
        max-width: 450px !important;
        width: 100%;
        border: 0px;
        border-radius: 10px;
        border: 1px solid rgba(0, 123, 255, 0.4);
        -webkit-box-shadow: 4px 7px 50px 15px rgba(0,0,0,0.24);
        box-shadow: 4px 7px 50px 15px rgba(0,0,0,0.24);
    }
</style>

<script>
    import { mapState } from "vuex";

    export default {
        name: "card",
        props: ["title", "description", "text", "tag", "to", "spaceType", "members", "type", "edited", "createdBy"],
        data: function () {
            return {
                hasMembers: false
            };
        },

        methods: {
            navigate() {
                alert(this.to)
            },
            cardGlobalStyle() {
                let contentBg = 'cursor: pointer; transition: ease-in-out 0.3s !important; background-color: ' + this.style.currentMode.contentBg + '; background: ' + this.style.currentMode.contentBg + '; ';
                let color = 'color: ' + this.style.currentMode.color + '; ';
                return contentBg + color;
            },
        },
       
        computed: {
            ...mapState({
                style: (store) => store.style,
            })
        },
    };
</script>