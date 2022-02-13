import { getVehicles } from '../api/request'

export const state = () => ({
  vehicles: [],
})

export const getters = {
  getVehicles: state => state.vehicles
}

export const mutations = {
  SET_VEHICLES(state, payload) {
    state.vehicles = payload
  },
}

export const actions = {
  async loadVehicles({ commit }) {
    try {
      const vehicles = await getVehicles()
      commit('SET_VEHICLES', vehicles)
    } catch(error) {
      console.log(error)
    }
  }
}
