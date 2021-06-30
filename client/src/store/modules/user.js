import axios from 'axios'
const api = 'http://localhost:5000'

export const state = {
    token: localStorage.getItem('token') || '',
    user: null,
    info: {},
    step: 1
}

export const getters = {
    isLoggedIn: state => !!state.token,
    user: state => state.user,
    info: state => state.info,
    step: state => state.step
}

export const mutations = {
    EMAIL_CHECK(state, data){
        state.info = data
    },
    LOGIN_SUCCESS(state, data){
        state.token = data.token,
        state.user = data.user
    },
    LOGIN_ERROR(state, data){
        state.info = data,
        setTimeout(() => { state.info = {} }, 2000);
    },
    FETCH_SUCCESS(state, data){
        state.user = data
        state.step = 2
    },
    FETCH_ERROR(state, data){
        state.user = null
        state.info = data
        setTimeout(() => { state.info = {} }, 2000);
    },
    VERIFY_USER_SUCCESS(state){
        state.step = 3
    },
    VERIFY_USER_ERROR(state, data){
        state.info = data
        setTimeout(() => { state.info = {} }, 2000);
    },
    SEND_VERIFY_CODE_SUCCESS(state){
        state.step = 4
    },
    SEND_VERIFY_CODE_ERROR(state, data){
        state.info = data
        setTimeout(() => { state.info = {} }, 2000);
    },
    CHECK_VERIFY_CODE_SUCCESS(state){
        state.step = 5
    },
    CHECK_VERIFY_CODE_ERROR(state, data){
        state.info = data
        setTimeout(() => { state.info = {} }, 2000);
    },
    CHANGE_PASSWORD_SUCCESS(state){
        state.step = 6
    },
    CHANGE_PASSWORD_ERROR(state, data){
        state.info = data
        setTimeout(() => { state.info = {} }, 2000);
    },
    RESTART_STEP(state){
        state.step = 1
    }
}

export const actions = {
    // Email Control Action
    async emailCheck({ commit }, email) {
        let res = await axios.post(`${api}/user/email_control`, email)
        if(res.data) commit('EMAIL_CHECK', res.data)
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
    },
    // Fetch Username Action
    async fetchUsername({ commit }, data){
        let res = await axios.post(`${api}/user/get_username`, data)
        if(res.data.success == false) commit('FETCH_ERROR', res.data)
        else commit('FETCH_SUCCESS', res.data)
    },
    // Verify User Info Action
    async verifyUserInfo({ commit }, data){
        let res = await axios.post(`${api}/user/verify_user_info`, data)
        if(res.data.success == false) commit('VERIFY_USER_ERROR', res.data)
        else commit('VERIFY_USER_SUCCESS')
    },
    // Send Verify Code Action
    async sendVerifyCode({ commit }, data) {
        let res = await axios.post(`${api}/user/send_verify_code`, data)
        if(res.data.success == true) commit('SEND_VERIFY_CODE_SUCCESS')
        else commit('SEND_VERIFY_CODE_ERROR',res.data)
    },
    // Check Verify Code Action
    async checkVerifyCode({ commit }, data) {
        let res = await axios.post(`${api}/user/check_verify_code`, data)
        if(res.data.success == false) commit('CHECK_VERIFY_CODE_ERROR',res.data)
        else commit('CHECK_VERIFY_CODE_SUCCESS')
    },
    // Reset Password Action
    async resetPassword({ commit }, data) {
        let res = await axios.post(`${api}/user/change_password`,data)
        if(res.data.success == false) commit('CHANGE_PASSWORD_ERROR',res.data)
        else commit('CHANGE_PASSWORD_SUCCESS')
    },
    // Restart Step
    async restartStep({ commit }) {
        commit('RESTART_STEP')
    }
}