import { getVehicles } from '../api/request'

export const state = () => ({
  vehicles: [],
  isLoading: false,
  isLoadDone: false
})

export const getters = {
  getVehicles: state => state.vehicles,
  getIsLoading: state => state.isLoading,
  getIsDone: state => state.isLoadDone,
  getCurrentVehicle: state => id => {
    return state.vehicles.find(item => item.id === id)
  }
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
}

export const actions = {
  async loadVehicles({ commit }) {
    commit('LOADING_START')
    try {
      const vehicles = await getVehicles()
      commit('SET_VEHICLES',  vehicles)
      commit('SET_LOAD_DONE')
    } catch(error) {
      console.log(error)
    }
    commit('LOADING_END')
  }
}
