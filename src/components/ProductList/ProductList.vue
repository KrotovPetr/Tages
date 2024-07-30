<template>
  <div class="product-list">
    <FilterContainer @filter="handleFilter" @sort="handleSort" />
    <div class="product-list__items">
      <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ProductCard } from '../ProductCard'
import { FilterContainer } from '../FilterContainer'
import { useProductList } from './useProductList'

const { displayedProducts, handleFilter, handleSort } = useProductList()
</script>

<style scoped src="./ProductList.css"></style>
