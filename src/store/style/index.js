import actions from "./actions";
import mutations from "./mutations";

export default {
    namespaced: true,
    state: {
        light: {
            isLight: true,
            bg: '#f3f4f5',
            contentBg: '#ffffff',
            color: '#27354e',
        },
        dark: {
            isLight: false,
            bg: '#141618',
            contentBg: '#222426',
            color: '#f4f4f5',
        },
        currentMode: {}
    },
    actions,
    mutations
}