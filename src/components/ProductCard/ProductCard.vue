<template>
  <div class="product">
    <div v-if="product.price.old_price" class="product__discount-banner">Скидка</div>
    <img :src="product.image.url" :alt="product.name" class="product__image" />
    <p class="product__code">{{ product.code }}</p>
    <h2 class="product__name">{{ product.name }}</h2>
    <div class="product__secondary-info">
      <ProductPrice :product="product" />
      <ProductButtons :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product as ProductType } from '@/types/product'
import { ProductButtons } from '../ProductButtons'
import { ProductPrice } from '../ProductPrice'

const props = defineProps<{ product: ProductType }>()
</script>

<style scoped src="./ProductStyles.css"></style>
