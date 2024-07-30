<template>
  <div class="select-container">
    <label v-if="label" :for="id" class="select-container__label">{{ label }}</label>
    <div class="select-container__wrapper">
      <select :id="id" @change="handleChange" class="select-container__select">
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span class="select-container__arrow"></span>
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
