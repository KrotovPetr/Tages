<template>
  <div class="product-buttons">
    <div @click="toggleCart" class="product-buttons__button product-buttons__cart-button">
      <CartIcon v-if="inCart" :filled="true" />
      <InCartIcon v-else :filled="false" />
    </div>
    <div @click="toggleFavorites" class="product-buttons__button product-buttons__favorite-button">
      <MarkedFavouriteIcon v-if="inFavorites" :filled="true" />
      <FavouriteIcon v-else :filled="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CartIcon from '@/components/icons/CartIcon.vue'
import FavouriteIcon from '@/components/icons/FavouriteIcon.vue'
import type { Product as ProductType } from '@/types/product'
import InCartIcon from '../icons/InCartIcon.vue'
import MarkedFavouriteIcon from '../icons/MarkedFavouriteIcon.vue'

const props = defineProps<{ product: ProductType }>()
const inCart = ref(false)
const inFavorites = ref(false)

onMounted(() => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]')
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  inCart.value = cart.some((item: ProductType) => item.id === props.product.id)
  inFavorites.value = favorites.some((item: ProductType) => item.id === props.product.id)
})

const toggleCart = () => {
  let cart = JSON.parse(localStorage.getItem('cart') || '[]')
  if (inCart.value) {
    cart = cart.filter((item: ProductType) => item.id !== props.product.id)
  } else {
    cart.push(props.product)
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  inCart.value = !inCart.value
}

const toggleFavorites = () => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
  if (inFavorites.value) {
    favorites = favorites.filter((item: ProductType) => item.id !== props.product.id)
  } else {
    favorites.push(props.product)
  }
  localStorage.setItem('favorites', JSON.stringify(favorites))
  inFavorites.value = !inFavorites.value
}
</script>

<style scoped src="./ProductButtonsStyles.css"></style>
