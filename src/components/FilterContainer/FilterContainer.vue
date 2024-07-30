<template>
  <div class="filter">
    <CustomSelect
      id="sort-select"
      label="Сортировать по:"
      :options="sortOptions"
      @change="handleSort"
      class="filter__select"
    />
    <CustomSelect
      id="filter-select"
      label="Материал: "
      :options="materialOptions"
      @change="handleFilter"
      class="filter__select"
    />
  </div>
</template>

<script setup lang="ts">
import { CustomSelect } from '../CustomSelect'
import { useFilterContainer } from './useFilterContainer'

const emit = defineEmits(['filter', 'sort'])
const { sortOptions, materialOptions, sort, filter } = useFilterContainer()

const handleSort = (value: string) => {
  emit('sort', sort(value))
}

const handleFilter = (value: string) => {
  emit('filter', filter(value))
}
</script>

<style scoped src="./FilterContainerStyles.css"></style>
