export default {
    LIGHT_MODE(state) {
        state.currentMode = state.light;
    },
    DARK_MODE(state) {
        state.currentMode = state.dark;
    },
    SET_PREFFERED_THEME_OR_DEFAULT(state) {
        // get user preffered theme from userState, which is not yet implemented
        // or default 👇
        state.currentMode = state.light;
    }

}