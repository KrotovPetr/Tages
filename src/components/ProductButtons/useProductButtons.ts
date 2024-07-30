import { ref, watchEffect } from 'vue'
import { useProductStore } from '@/stores/products'
import type { Product as ProductType } from '@/types/product'

export function useProductButtons(product: ProductType) {
  const store = useProductStore()
  const inCart = ref(false)
  const inFavorites = ref(false)

  watchEffect(() => {
    inCart.value = store.cart.some((item: ProductType) => item.id === product.id)
    inFavorites.value = store.favorites.some((item: ProductType) => item.id === product.id)
  })

  const toggleCart = () => {
    inCart.value ? store.removeFromCart(product) : store.addToCart(product)
  }

  const toggleFavorites = () => {
    inFavorites.value ? store.removeFromFavorites(product) : store.addToFavorites(product)
  }

  return {
    inCart,
    inFavorites,
    toggleCart,
    toggleFavorites
  }
}
