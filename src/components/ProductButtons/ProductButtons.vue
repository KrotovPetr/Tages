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
import { ref, watchEffect } from 'vue'
import { CartIcon, FavouriteIcon, InCartIcon, MarkedFavouriteIcon } from '@/icons'
import type { Product as ProductType } from '@/types/product'
import { useProductStore } from '@/stores/products'

const props = defineProps<{ product: ProductType }>()
const store = useProductStore()
const inCart = ref(false)
const inFavorites = ref(false)

watchEffect(() => {
  inCart.value = store.cart.some((item: ProductType) => item.id === props.product.id)
  inFavorites.value = store.favorites.some((item: ProductType) => item.id === props.product.id)
})

const toggleCart = () => {
  inCart.value ? store.removeFromCart(props.product) : store.addToCart(props.product)
}

const toggleFavorites = () => {
  inFavorites.value ? store.removeFromFavorites(props.product) : store.addToFavorites(props.product)
}
</script>

<style scoped src="./ProductButtonsStyles.css"></style>
