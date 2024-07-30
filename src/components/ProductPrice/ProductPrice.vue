<template>
  <p class="product-price">
    <span v-if="product.price.old_price" class="product-price__old-price"
      >{{ product.price.old_price }} ₽</span
    >
    {{ product.price.current_price }} ₽
  </p>
</template>

<script setup lang="ts">
import type { Product as ProductType } from '@/types/product'

const props = defineProps<{ product: ProductType }>()
</script>

<style scoped src="./ProductPriceStyles.css"></style>
