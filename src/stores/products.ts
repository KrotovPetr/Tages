import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product, Material } from '@/types/product'

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([])
  const materials = ref<Material[]>([])
  const favorites = ref<Product[]>(JSON.parse(localStorage.getItem('favorites') || '[]'))
  const cart = ref<Product[]>(JSON.parse(localStorage.getItem('cart') || '[]'))

  const loadProducts = async () => {
    const response = await fetch('/assets/items.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    products.value = await response.json()
  }

  const loadMaterials = async () => {
    const response = await fetch('/assets/materials.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    materials.value = await response.json()
  }

  const addToFavorites = (product: Product) => {
    if (!favorites.value.includes(product)) {
      favorites.value.push(product)
      localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }
  }

  const addToCart = (product: Product) => {
    if (!cart.value.includes(product)) {
      cart.value.push(product)
      localStorage.setItem('cart', JSON.stringify(cart.value))
    }
  }

  const filterProducts = (materialId: number | null) => {
    if (materialId === null) {
      return products.value
    }
    return products.value.filter((product) => product.material === materialId)
  }

  const sortProducts = (order: 'asc' | 'desc') => {
    return products.value.sort((a, b) =>
      order === 'asc'
        ? a.price.current_price - b.price.current_price
        : b.price.current_price - a.price.current_price
    )
  }

  return {
    products,
    materials,
    favorites,
    cart,
    loadProducts,
    loadMaterials,
    addToFavorites,
    addToCart,
    filterProducts,
    sortProducts
  }
})