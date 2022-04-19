import { createStore } from 'vuex'
import styleModule from './style/index.js'
import globalFunctions from './globalFunctions/index.js'


export default createStore({
    modules: {
        style: styleModule,
        functions: globalFunctions,
    }
})

