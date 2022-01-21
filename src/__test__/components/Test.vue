<template>
  <div class="test-container">
    <div class="test-title">Hello Moto</div>
    <p class="test-count">count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref<number>(0)
const increment = () => {
  count.value += 1
}
</script>
