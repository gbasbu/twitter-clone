import axios from 'axios'
const api = 'http://localhost:5000'

export const state = {
    token: localStorage.getItem('token') || '',
    user: {},
    userInfo: {},
}

export const getters = {
    isLoggedIn: state => !!state.token,
    user: state => state.user,
    userInfo: state => state.userInfo
}

export const mutations = {
    EMAIL_CHECK(state, data){
        state.userInfo = data
    },
    LOGIN_SUCCESS(state, data){
        state.token = data.token,
        state.user = data.user
    },
    LOGIN_ERROR(state, data){
        state.userInfo = data
    }
}

export const actions = {
    // Email Control Action
    async emailCheck({ commit }, email) {
        let res = await axios.post(`${api}/user/email_control`, email)
        if(res.data){
            commit('EMAIL_CHECK', res.data)
        }
    },
    // Login Action
    async login({ commit }, data){
        let res = await axios.post(`${api}/user/login`, data)
        if(res.data){
            const token = res.data.token
            localStorage.setItem("token", token)
            axios.defaults.headers.common["Authorization"] = token
            commit('LOGIN_SUCCESS', res.data)
        }
    },
    // Login Request Action
    async loginRequest({ commit }, data){
        let res = await axios.post(`${api}/user/login_request`, data)
        if(res.data.success == true){
            const token = res.data.token
            localStorage.setItem("token", token)
            axios.defaults.headers.common["Authorization"] = token
            commit('LOGIN_SUCCESS', res.data)
        }else{
            commit('LOGIN_ERROR', res.data)
        }
    }
}