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
import { CartIcon, FavouriteIcon, InCartIcon, MarkedFavouriteIcon } from '@/icons'
import type { Product as ProductType } from '@/types/product'
import { useProductButtons } from './useProductButtons'

const props = defineProps<{ product: ProductType }>()
const { inCart, inFavorites, toggleCart, toggleFavorites } = useProductButtons(props.product)
</script>

<style scoped src="./ProductButtonsStyles.css"></style>
