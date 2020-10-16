import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'Bikash Todo',
    firstName: '',
    isNewUser: true,
    isStart: false,
    items: [],
  },
  mutations: {
    FECTH_FROM_LOCAL: (
      state,
      data,
    ) => {
      state.firstName = data.firstName
      state.isNewUser = data.isNewUser
      state.isStart = data.isStart
      state.items = data.items
    },
    SET_START: (state) => {
      state.isNewUser = false
      state.isStart = true
    },
    SET_USER: (state, firstName) => {
      state.firstName = firstName
    }
  },
  actions: {
    fetchLocal: (context) => {
      const appdata = JSON.parse(
        localStorage.getItem('taskapp'),
      )
      context.commit(
        'FECTH_FROM_LOCAL',
        appdata,
      )
    },
    setStart: (context) => {
      context.commit('SET_START')
    },
    setFirstName: (context, firstName) => {
      context.commit('SET_USER', firstName)
    }
  },
})
