<template>
    <div class="card" :style="cardGlobalStyle() + 'cursor:pointer;'" id="lmaoCard" @click="navigate()">
    <!--<div class="card" :style="cardGlobalStyle()" id="lmaoCard">-->
            <div class="card-body">
                <div class="row">
                    <!-- 7 -->
                    <div class="col-10">
                        <h6 class="card-title">
                            <span class="material-symbols-outlined" style="background:transparent !important; vertical-align: bottom;">{{ type }}</span>
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
                    <div class="col-2">
                        <p class="float-right">
                            <span class="material-symbols-outlined" style="background:transparent !important;">{{ tag }}</span>
                        </p>
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
</template>


<style scoped lang="scss">
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
    };
</script>