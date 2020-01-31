<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="">
    <ul v-else>
      <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price | currency}} - {{product.inventory}}
        <button @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      loading: false
    }
  },

  computed: {
    products () {
      return this.$store.getters.availableProducts
    }
  },

  methods: {
    ...mapActions([
      'addProductToCart',
      'fetchProducts',
    ]),
  },

  created () {
    this.loading = true
    this.fetchProducts()
      .then(() => this.loading = false)
  }
}
</script>

<style>

</style>
