<template>
  <div class="filter">
    <CustomSelect id="sort-select" label="Сортировать по:" :options="sortOptions" @change="sort" />
    <CustomSelect
      id="filter-select"
      label="Материал: "
      :options="materialOptions"
      @change="filter"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue'
import CustomSelect from '@/components/CustomSelect/CustomSelect.vue'
import { useProductStore } from '@/stores/products'

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

<style scoped src="./FilterContainer.css"></style>
