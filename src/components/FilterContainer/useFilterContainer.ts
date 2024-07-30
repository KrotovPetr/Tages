import { computed, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'

export function useFilterContainer() {
  const store = useProductStore()

  const sortOptions = [
    { value: '', text: 'Без сортировки' },
    { value: 'asc', text: 'Цена по возрастанию' },
    { value: 'desc', text: 'Цена по убыванию' }
  ]

  const materialOptions = computed(() => [
    { value: '', text: 'Все материалы' },
    ...store.materials.map((material) => ({
      value: material.id,
      text: material.name
    }))
  ])

  const sort = (value: string) => {
    return value
  }

  const filter = (value: string) => {
    const materialId = value === '' ? null : Number(value)
    return materialId
  }

  onMounted(() => {
    store.loadMaterials()
  })

  return {
    sortOptions,
    materialOptions,
    sort,
    filter
  }
}
