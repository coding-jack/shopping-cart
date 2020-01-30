import Vuex from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 0)
    }
  },

  actions: { // = methods
    fetchProducts({ commit }) {
      // make API call
      return new Promise((resolve, reject) => {
        // run setProducts mutation
        shop.getProducts(products => {
          commit('setProducts', products)
          resolve()
        })
      })
    }
  },

  mutations: {
    setProducts(state, products) {
      // update products - change state
      state.products = products
    }
  }
})
