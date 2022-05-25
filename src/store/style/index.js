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
            bg: '#15151c',
            contentBg: '#24252d',
            color: '#dcdde2',
        },
        currentMode: {}
    },
    actions,
    mutations
}

// https://colorhunt.co/palettes/neon
// bring in color palettes lmao
// maybe choose own color


/*
 
  dark: {
            isLight: false,
            bg: '#15151c',
            contentBg: '#1b1c21',
            color: '#dcdde2',
        },
 
 */