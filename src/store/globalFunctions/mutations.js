export default {
    FOCUS_GLOBAL_SEARCH_BAR(state) {
        state.isGlobalSearchBarFocused = true;
    },
    UN_FOCUS_GLOBAL_SEARCH_BAR(state) {
        state.isGlobalSearchBarFocused = false;
    },
}