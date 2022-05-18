<template>
    <div class="card" :style="cardGlobalStyle()">
        <div v-if="to" @click="navigate" style="cursor:pointer;">
            <div class="card-body">
                <div class="row">
                    <div class="col-7">
                        <h6 class="card-title">{{ title }}</h6>
                        <div class="row">
                            <div class="col-12">
                                <p v-if="spaceType" class="text-secondary">{{spaceType}}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="avatars" v-if="spaceType">
                            <span class="avatar" v-for="item in members" :key="item.id">
                                <img src="../../assets/placeholder.jpg">
                            </span>
                        </div>
                    </div> 
                  
                    <div class="col-2">
                        <p class="float-right">
                            <span class="material-symbols-outlined" :style="cardGlobalStyle()">{{ tag }}</span>
                        </p>
                    </div>
                </div>
             
                <p class="card-text text-info">{{ description }}</p>
                 
                       
                <slot></slot>
            </div>
        </div>
        <div class="card-body" v-else>
            <div class="row">
                <div class="col-5">
                    <h6 class="card-title">{{ title }}</h6>
                </div>
                <div class="col-2"></div>
                <div class="col-5">
                    <p class="float-right">
                        <span class="material-symbols-outlined" :style="cardGlobalStyle()">{{ tag }}</span>
                    </p>
                </div>
            </div>
            <p class="card-text text-info">{{ description }}</p>
            <slot></slot>
        </div>
    </div>
</template>


<style scoped lang="scss">
    .card:hover {
        background-color: #007bff !important;
        color: #fff !important;

        .material-symbols-outlined {
            background-color: #007bff !important;
            color: #fff !important;
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
        width: 100%;
        border: 0px;
        border-radius: 10px;
        /* -webkit-box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);
        box-shadow: 1px 2px 15px -5px rgba(0,0,0,0.35);*/
        /*box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;*/

        // latest 👇
        /*box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;*/
    }
</style>

<script>
    import { mapState } from "vuex";

    export default {
        name: "card",
        props: ["title", "description", "text", "tag", "to", "spaceType", "members"],
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
                let contentBg = 'transition: ease-in-out 0.5s !important; background-color: ' + this.style.currentMode.contentBg + '; ';
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