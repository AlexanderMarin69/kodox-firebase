// import accountService from '@/services/accountService';
// import router from '@/router';
// import store from '@/store/style/index.js'

export default {
    LIGHT_MODE({ commit }) {
        commit('LIGHT_MODE');
    },
    DARK_MODE({ commit }) {
        commit('DARK_MODE');
    },
    SET_PREFFERED_THEME_OR_DEFAULT({ commit }) {
        commit('SET_PREFFERED_THEME_OR_DEFAULT');
    } 
}