<template>
    <div class="loader-box">
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
        <span :Style="appGlobalStyle()"></span>
    </div>
</template>


<script>
    import { mapState } from "vuex";
    export default {
        name: "Loader",
        methods: {
            appGlobalStyle() {
                if (this.style.currentMode.isLight) {
                    let bg = "background: " + this.style.dark.bg + "; ";
                    return bg;
                } else {
                    let bg = "background: " + this.style.light.bg + "; ";
                    return bg;
                }
            },
        },
        computed: {
            ...mapState({
                style: (store) => store.style,
            }),
        },
    };
</script>

<style scoped lang="scss">
    .loader-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
    }

    .loader-box span {
        width: 8px;
        height: 100px;
        /*background: #fff;*/
        border-radius: 20px;
        margin: 0 4px;
        animation: loading 1s infinite;
    }

    .loader-box span:nth-child(2) {
        animation-delay: 0.2s;
    }

    .loader-box span:nth-child(3) {
        animation-delay: 0.3s;
    }

    .loader-box span:nth-child(4) {
        animation-delay: 0.4s;
    }

    .loader-box span:nth-child(5) {
        animation-delay: 0.5s;
    }

    .loader-box span:nth-child(6) {
        animation-delay: 0.6s;
    }

    .loader-box span:nth-child(7) {
        animation-delay: 0.7s;
    }

    .loader-box span:nth-child(8) {
        animation-delay: 0.8s;
    }

    .loader-box span:nth-child(9) {
        animation-delay: 0.9s;
    }

    .loader-box span:nth-child(10) {
        animation-delay: 0.1s;
    }

    @keyframes loading {
        0% {
            height: 100px;
        }

        50% {
            height: 0px;
        }

        100% {
            height: 100px;
        }
    }
</style>
