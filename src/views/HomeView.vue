<template>
    <div :style="appGlobalStyle()">
        <br />
        <!-- TopNavigation -->
        <div id="navWrapperSticky" :style="appGlobalStyle()">
            <TopNavigation />
        </div>
        <!-- TopNavigation -->


        <!--

            add copy button and language teller in combination with this maybe!

            <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
            </li>
        </ul>

        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">sdfffffffffffffffffffffffff</div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">sdfffffffffffffffffffffffff</div>
            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">sdfffffffffffffffffffffffff</div>
        </div>
            -->

        <br />
        <!-- recents -->
        <div class="container-fluid" style="padding-left:95px; padding-right:50px;">
            <div class="row">
                <div class="col-12">
                    <h6 class="text-secondary">Recents</h6>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-2">
                    <card title="SSMS fixes" description="4 articles" tag="🕑" />
                </div>
                <div class="col-md-6 col-lg-3 mb-2">
                    <card title="GitHub Commands" description="1 article" tag="🕑" to="category1" />
                </div>
                <div class="col-md-6 col-lg-3 mb-2">
                    <card title="Firestore Setup Guide" description="10 articles" tag="🕑" to="category1" />
                </div>
                <div class="col-md-6 col-lg-3 mb-2">
                    <card title="Favorites" description="14 articles" tag="🕑" to="category1" />
                </div>
            </div>
        </div>
        <!-- recents -->
        <br />
        <!-- Favorites -->
        <div class="container-fluid" style="padding-left:95px; padding-right:50px;">
            <div class="row">
                <div class="col-12">
                    <h6 class="text-secondary">Favorites</h6>
                </div>
            </div>
            <br />
            <div class="row">
                <div class="col-md-12 col-lg-4 mb-2">
                    <card title="Google Cloud Platform Docs" description="16 articles" tag="⭐" to="category1" />
                </div>
                <div class="col-md-12 col-lg-4 mb-2">
                    <card title="GPC deploy Guide" description="1 articles" tag="⭐" to="category1" />
                </div>
                <div class="col-md-12 col-lg-4 mb-2">
                    <card title="Vue Dropzone Docs" description="1 articles" tag="⭐" to="category1" />
                </div>

            </div>
        </div>
        <!-- Favorites -->
        <br />
        <!-- Last edited article + My spaces -->
        <div class="container-fluid" style="padding-left:95px; padding-right:50px;">
            <div class="row">
                <div class="col-sm-12 col-lg-6">
                    <!-- Last edited article -->
                    <div class="row mb-4 ml-1">
                        <h6 class="text-secondary">Last edited article</h6>
                    </div>
                    <card title="Vue Dropzone parameters" description="Contrary to popular belief, Lorem Ipsum is not simply random text." tag="🖋️" to="category1">
                        <p class="text-secondary">{{loremIpsum}}</p>
                    </card>
                    <!-- Last edited article -->
                </div>
                <div class="col-sm-12 col-lg-6">
                    <div class="row mb-4 ml-1">
                        <h6 class="text-secondary">My spaces</h6>
                    </div>
                    <!-- My spaces-->
                    <div class="container-fluid pl-0">
                        <div class="row">
                            <div class="col-md-12 col-lg-6 mb-2">
                                <card title="Private Space" spaceType="Private" :members="[{id: 1}]" description="56 articles" tag="🚀" to="category1" />
                            </div>
                            <div class="col-md-12 col-lg-6 mb-">
                                <card title="Netmine" spaceType="Shared Private" :members="[{id: 1}, {id: 2}, {id: 3}, {id: 4}]" description="108 articles" tag="🚀" to="category1" />
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-md-12 col-lg-6 mb-2">
                                <card title="Case Study POC DPM" spaceType="Private" :members="[{id: 1}]" description="4 articles" tag="🚀" to="category1" />
                            </div>
                            <div class="col-md-12 col-lg-6 mb-2">
                                <card title="NCF Public Docs" spaceType="Shared Public" :members="[{id: 1}, {id: 2}, {id: 3}]" description="16 articles" tag="🚀" to="category1" />
                            </div>
                        </div>
                    </div>
                    <!-- My spaces-->
                </div>
            </div>

            <br />


        </div>
        <!-- Last edited article + My spaces -->
        <br />
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-4">
                </div>
                <div class="col-md-12 col-lg-4">
                    <center>
                        <card to="settings/dashboard">
                            <h4>Customize Dashboard</h4>
                            <span style="font-size: 50px;">⚙️</span>
                            <br />
                            <br />
                        </card>
                    </center>
                </div>
                <div class="col-md-12 col-lg-4">
                </div>
            </div>
        </div>
        <br />

    </div>
</template>

<script>
    import TopNavigation from "@/components/Layout/TopNavigation.vue";
    import loader from "@/components/common/loader.vue";
    import card from "@/components/common/card.vue";
    import codeBlock from "@/components/mainContent/codeBlock.vue";
    import mainContent from "@/components/mainContent/mainContent.vue";

    import { mapActions, mapState } from "vuex";

    import { initializeApp } from "firebase/app";
    import {
        getFirestore,
        collection,
        getDocs,
        setDoc,
        addDoc,
    } from "firebase/firestore/lite";
    // import firebase from "firebase/app";

    export default {
        name: "HomeView",
        components: {
            loader,
            mainContent,
            card,
            codeBlock,
            TopNavigation
        },
        data: function () {
            return {
                loremIpsum: `
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                        It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.

                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,
                        discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"


                        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                        very popular during the Renaissance.
                        The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        `
            };
        },
        methods: {
            appGlobalStyle() {
                let bg = "background-color: " + this.style.currentMode.bg + "; ";
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
            // TODO: whatever the user has saved in DB / default -> dark ;)
            this.setUsersPrefferedThemeOrDefault();
        },
    };
</script>

<style scoped>
    #navWrapperSticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 10;
        /*background-color: #141618;*/
        border-bottom-left-radius: 32px;
        border-bottom-right-radius: 32px;
    }
</style>