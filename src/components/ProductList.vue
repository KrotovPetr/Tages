<template>
  <div class="product-list">
    <FilterContainer @filter="filterProducts" @sort="sortProducts" />
    <div class="product-list__items">
      <ProductCard v-for="product in displayedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import FilterContainer from '@/components/FilterContainer/FilterContainer.vue'
import ProductCard from './Product/ProductCard.vue'

const store = useProductStore()
const displayedProducts = ref(store.products)

onMounted(async () => {
  await store.loadProducts()
  await store.loadMaterials()
  displayedProducts.value = store.products
})

const filterProducts = (materialId: number) => {
  displayedProducts.value = store.filterProducts(materialId)
}

const sortProducts = (order: 'asc' | 'desc') => {
  displayedProducts.value = store.sortProducts(order)
}
</script>

<style scoped>
.product-list {
  width: 100%;
}

.product-list__items {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 15px;
  padding: 15px 0;
}
</style>
