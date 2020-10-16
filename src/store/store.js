import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pageTitle: 'Bikash Todo',
    firstName: 'Bikash test',
    isNewUser: true,
    isStart: false,
    items: [],
  },
  getters: {
    completedTasks: (state) => {
      return state.items.filter(
        (item) =>
          item.isCompleted == true,
      )
    },
    todoTasks: (state) => {
      return state.items.filter(
        (item) =>
          item.isCompleted == false,
      )
    },
  },
  mutations: {
    FECTH_FROM_LOCAL: (state, data) => {
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
      state.isNewUser = false
      state.isStart = false
    },
    USER_LOGOUT: (state) => {
      state.firstName = ''
      state.items = []
      state.isNewUser = true
    },
    MARK_COMPLETE: (state, items) => {
      state.items = items
    },
    TOGGLE_EDIT: (state, items) => {
      state.items = items
    },
    UPDATE_TASK: (state, items) => {
      state.items = items
    },
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
    setFirstName: (
      context,
      firstName,
    ) => {
      const appdata = {
        ...context.state,
        firstName: firstName,
      }

      localStorage.setItem(
        'taskapp',
        JSON.stringify(appdata),
      )
      context.commit(
        'SET_USER',
        firstName,
      )
    },
    logout: () => {
      localStorage.removeItem('taskapp')
      alert('You are logged out!')
      window.location.href = '/'
    },
    addTask: (context, task) => {
      const appdata = context.state
      const _items = appdata.items
      _items.push(task)
      const _appdata = {
        ...appdata,
        items: _items,
      }
      localStorage.setItem(
        'taskapp',
        JSON.stringify(_appdata),
      )
    },
    markComplete: (context, id) => {
      const appdata = context.state
      const _items = appdata.items.map(
        (item) => {
          if (item.id === id) {
            item.isCompleted = !item.isCompleted
          }
          return item
        },
      )

      const _appdata = {
        ...appdata,
        items: _items,
      }
      localStorage.setItem(
        'taskapp',
        JSON.stringify(_appdata),
      )
      context.commit(
        'MARK_COMPLETE',
        _items,
      )
    },
    toggleEdit: (context, id) => {
      const appdata = context.state
      const _items = appdata.items.map(
        (item) => {
          if (item.id === id) {
            item.isEditing = !item.isEditing
          }
          return item
        },
      )

      const _appdata = {
        ...appdata,
        items: _items,
      }
      localStorage.setItem(
        'taskapp',
        JSON.stringify(_appdata),
      )
      context.commit(
        'TOGGLE_EDIT',
        _items,
      )
    },
    updateTask: (
      context,
      { id, value },
    ) => {
      const appdata = context.state
      const _items = appdata.items.map(
        (item) => {
          if (item.id === id) {
            item.task = value
          }
          return item
        },
      )

      const _appdata = {
        ...appdata,
        items: _items,
      }
      localStorage.setItem(
        'taskapp',
        JSON.stringify(_appdata),
      )
      context.commit(
        'UPDATE_TASK',
        _items,
      )
    },
  },
})
