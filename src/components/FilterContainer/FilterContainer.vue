<template>
  <div class="filter">
    <CustomSelect
      id="sort-select"
      label="Сортировать по:"
      :options="sortOptions"
      @change="sort"
      class="filter__select"
    />
    <CustomSelect
      id="filter-select"
      label="Материал: "
      :options="materialOptions"
      @change="filter"
      class="filter__select"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useProductStore } from '@/stores/products'
import { CustomSelect } from '../CustomSelect';

const emit = defineEmits(['filter', 'sort'])
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
  emit('sort', value)
}

const filter = (value: string) => {
  const materialId = value === '' ? null : Number(value)
  emit('filter', materialId)
}

onMounted(() => {
  store.loadMaterials()
})
</script>

<style scoped src="./FilterContainerStyles.css"></style>
