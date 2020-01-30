import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
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
    }
  },

  mutations: {
    setProducts() {
      // update products - change state
    }
  }
})
