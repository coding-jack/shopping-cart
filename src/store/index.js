import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // = data
    products: []
  },

  getters: { // = computed properties
    productsCount() {
      // ...
    }
  },

  actions: {
    fetchProducts() {
      // make API call
      // run setProducts mutation
    }
  },

  mutations: {
    setProducts(state, products) {
      // update products - change state
      state.products = products
    }
  }
})
