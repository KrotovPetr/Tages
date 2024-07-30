<template>
  <div class="custom-select">
    <label v-if="label" :for="id" class="custom-select__label">{{ label }}</label>
    <div class="custom-select__wrapper">
      <select :id="id" @change="handleChange" class="custom-select__select">
        <option v-for="option in props.options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span class="custom-select__arrow"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  id: String,
  label: String,
  options: Array as () => { value: string | number; text: string }[]
})

const emit = defineEmits(['change'])

const handleChange = (event: Event) => {
  emit('change', (event.target as HTMLSelectElement).value)
}
</script>

<style scoped src="./CustomSelectStyles.css"></style>
