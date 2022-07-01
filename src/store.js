import { createStore } from 'vuex'
const state = {
    user: null,
    token: null
}

const getters = {
    user: (state) => {
        return state.user;
    },

    token: (state) => {
        return state.token;
    }
}

const actions = {
    user(context, user){
        context.commit('user', user)
    },
    token(context, token){
        context.commit('token', token)
    }
}

const mutations = {
    user(state,user){
        state.user = user
    },
     token(state,token){
        state.token = token
    }
}

const store = createStore({
    state,
    getters,
    actions,
    mutations
});

export default store;