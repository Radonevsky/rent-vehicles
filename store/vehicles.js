import { getVehicles } from '../api/request'

export const state = () => ({
  vehicles: [],
  isLoading: false,
  isLoadDone: false,
  loadError: false,
  darkMode: false,
})

export const getters = {
  getVehicles: state => state.vehicles,
  getIsLoading: state => state.isLoading,
  getIsDone: state => state.isLoadDone,
  getCurrentVehicle: state => id => {
    return state.vehicles.find(item => item.id === id)
  },
  getTypes: state => {
    const types = []
    state.vehicles.forEach(item => types.push(item.type))
    return [...new Set(types)];
  },
  getLoadError: state => state.loadError,
  getIsDarkMode: state => state.darkMode,
}

export const mutations = {
  LOADING_START(state) {
    state.isLoading = true
  },
  LOADING_END(state) {
    state.isLoading = false
  },
  SET_LOAD_DONE(state) {
    state.isLoadDone = true
  },
  SET_VEHICLES(state, payload) {
    state.vehicles = payload
  },
  SET_CUSTOM(state, payload) {
    state.vehicles.push(payload)
  },
  SET_LOAD_ERROR(state) {
    state.loadError = true
  },
  SET_DARK_MODE_ON(state) {
    localStorage.isDarkMode = true
    state.darkMode = true
  },
  SET_DARK_MODE_OFF(state) {
    localStorage.isDarkMode = false
    state.darkMode = false
  },
}

export const actions = {
  async loadVehicles({ commit }) {
    commit('LOADING_START')
    try {
      const vehicles = await getVehicles()
      commit('SET_VEHICLES',  vehicles)
      commit('SET_LOAD_DONE')
    } catch(error) {
      commit('SET_LOAD_ERROR')
    }
    commit('LOADING_END')
  }
}
