import { createStore } from 'vuex'
import styleModule from './style/index.js'
import globalFunctionsModule from './globalFunctions/index.js'
import categoryFunctionsModule from './category/index.js'

export default createStore({
    modules: {
        style: styleModule,
        functions: globalFunctionsModule,
        category: categoryFunctionsModule
    }
})

