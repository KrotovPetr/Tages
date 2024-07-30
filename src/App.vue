<template>
  <div id="app">
    <div class="body">
      <h1 class="page-name">Комплекты стеллажных систем</h1>
      <ProductList />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductList from './components/ProductList.vue'
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
}

.body {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1440px;
  padding: 32px 0;
  gap: 32px;
}

.page-name {
  font-weight: 500;
  line-height: 48px;
}
</style>
