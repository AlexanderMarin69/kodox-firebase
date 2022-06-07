<template>
    <div>
        <div :class="'card ' + to" :style="cardGlobalStyle() + 'cursor:pointer;'" :id="to" @click="navigate()">
        <!--<div class="card" :style="cardGlobalStyle()" id="lmaoCard">-->
            <div class="card-body">
                    <div class="row">
                        <!-- 7 -->
                        <div class="col-10">
                            <h6 class="card-title">
                                <span class="material-symbols-outlined" style="background:transparent !important; vertical-align: bottom;">{{ tag }}</span>
                                {{ title }}
                            </h6>
                            <div class="row">
                                <div class="col-12">
                                    <p v-if="spaceType" class="text-secondary">{{spaceType}}</p>
                                </div>
                            </div>
                        </div>

                        <!-- 3 -->
                        <div class="col-3" v-if="spaceType">
                            <div class="avatars">
                                <span class="avatar" v-for="item in members" :key="item.id">
                                    <img src="../../assets/placeholder.jpg">
                                </span>
                            </div>
                        </div>

                        <!-- 2 -->
                        <!--<div class="col-1">
                            <p class="float-right">
                                <span class="material-symbols-outlined" style="background:transparent !important;">{{ tag }}</span>
                            </p>
                        </div>-->
                    <div class="col-2 text-right" style="padding-right: 0px !important; margin-top: -5px !important;">
                        <div class="dropdown">
                            <button :style="cardGlobalStyle()" class="dropdown-toggle text-right" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span class="material-symbols-outlined" style="vertical-align: bottom;">
                                    more_vert
                                </span>
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button class="dropdown-item" @click.stop="peekArticle()">
                                    <span class="material-symbols-outlined" style="vertical-align: bottom;">
                                        visibility
                                    </span>
                                    Peek
                                </button>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    </div>
             
                    <p class="card-text text-info card-description">{{ description }}</p>
                    <p style="margin-bottom: 0px;" class="text-secondary card-last-edited">
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            description
                        </span>
                        16 articles
                        <br />
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            person
                        </span>
                        {{createdBy}}
                        <br />
                        <span class="material-symbols-outlined" style="vertical-align: bottom;">
                            edit
                        </span>
                        {{edited}}
                    </p>
                    <slot></slot>
            </div>
        </div>
        <div id="iframe">
            <iframe src="http://192.168.20.152:8080/article-view/7RZHRlJDVmfR10CLtZff" title="W3Schools Free Online Web Tutorials"></iframe>
        </div>
    </div>
</template>


<style scoped lang="scss">
    button:focus {
        outline: none;
    }

    .dropdown-toggle {
        background: transparent !important;
        border: 0px;
        cursor: pointer;
        padding: 6px;
    }

    .dropdown-toggle:after {
        content: none
    }

    .dropdown-toggle:hover {
        background: rgba(255, 255, 255, 0.4) !important;
        border-radius: 50%;
    }

    #iframe {
        display: none;
    }

    .card:hover {
        background-color: rgba(0, 123, 255, 0.4) !important;

        .card-description {
            color: #fff !important
        }

        .card-last-edited {
            color: #fff !important
        }
    }

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
        width: 20px;
    }

    .avatar:not(:first-child) {
        margin-left: -14px;
    }

    .avatar img {
        width: 100%;
        display: block;
        transform: scale(-1, 1);
    }

    .card {
        min-width: 300px;
        max-width: 900px;
        width: 100%;
        border: 0px;
        border-radius: 10px;
        border: 1px solid rgba(0, 123, 255, 0.4);
        /* -webkit-box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);
        box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);*/
        /*box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;*/
        // latest 👇
        /*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;*/

        -webkit-box-shadow: 0px 38px 50px -22px rgba(0,0,0,0.16);
        box-shadow: 0px 38px 50px -22px rgba(0,0,0,0.16);
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
            peekArticle() {
                console.log('peek');
                document.getElementById(this.to).style.display = "none";
                document.getElementById("iframe").style.display = "block";
            },
            navigate() {
                this.$router.push({ name: 'article-view', params: { id: this.to } });
            },
            cardGlobalStyle() {
                let contentBg = 'transition: ease-in-out 0.3s !important; background-color: ' + this.style.currentMode.contentBg + '; ';
                let color = 'color: ' + this.style.currentMode.color + '; ';
                return contentBg + color;
            },
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
        mounted() {
            //dropdownMenuButton
            //$("#dropdownMenuButton").click(function (e) {
            //    e.stopPropagation();
            //    $('.dropdown-menu').toggle();
            //});
            $(".card .card-body .dropdown-toggle").click(function (e) {
                e.stopPropagation();
                //$('.dropdown-menu').toggle();
                $('.dropdown-toggle').dropdown('toggle');
            });
        }
    };
</script>