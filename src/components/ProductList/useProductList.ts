import { ref, onMounted, watch } from 'vue'
import { useProductStore } from '@/stores/products'

export function useProductList() {
  const store = useProductStore()
  const displayedProducts = ref(store.products)
  const filterMaterialId = ref<number | null>(null)
  const sortOrder = ref<'asc' | 'desc' | ''>('')

  onMounted(async () => {
    await store.loadProducts()
    await store.loadMaterials()
    displayedProducts.value = store.products
  })

  watch([filterMaterialId, sortOrder], () => {
    let filtered = store.filterProducts(filterMaterialId.value)
    if (sortOrder.value) {
      filtered = store.sortProducts(filtered, sortOrder.value)
    }
    displayedProducts.value = filtered
  })

  const handleFilter = (materialId: number | null) => {
    filterMaterialId.value = materialId
  }

  const handleSort = (order: 'asc' | 'desc') => {
    sortOrder.value = order
  }

  return {
    displayedProducts,
    handleFilter,
    handleSort
  }
}
