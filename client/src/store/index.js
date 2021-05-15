import { createApp } from 'vue'
import { createStore } from 'vuex'
import * as user from './modules/user'


export default new createStore({

    modules: {
        user
    }
})

const app = createApp()
app.use(createStore())