import { v4 as uuidv4 } from 'uuid';

export default {
  state: {
    users: [
      { id: '12jbnd8asdda7', name: "User 1", active: true },
      { id: '12jasfsgar8s7', name: "User 2", active: false },
      { id: '12jbn23523rfs', name: "User 3", active: true }
    ]
  },
  getters: {
    users: state => state.users
  },
  mutations: {
    ADD_USER: (state, userName) => {
      state.users.push({ id: uuidv4(), name: userName, active: true })
    },
    REMOVE_USER: (state, id) => {
      state.users = state.users.filter(user => user.id !== id)
    },
    TOGGLE_ACTIVE_STATE: (state, user) => {
      user.active = !user.active
    }
  },
  actions: {
    addUser: ({commit}, userName) => {
      commit('ADD_USER', userName)
    },
    removeUser: ({commit}, id) => {
      commit('REMOVE_USER', id)
    },
    toggleActive: ({commit}, user) => {
      commit('TOGGLE_ACTIVE_STATE', user)
    }
  }
}