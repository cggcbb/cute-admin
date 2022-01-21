<template>
  <div class="section">
    <n-button @click="increment(1)" type="info" secondary strong size="small">increment</n-button>
  </div>
  <div>counter: {{ counter }}</div>
  <div>doubleCounter: {{ doubleCounter }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed, ComputedRef } from 'vue'
import useCounter from '../store/counter'

const store = useCounter()
const { counter } = storeToRefs(store)

// action
const increment = (addCount: number) => {
  store.increment(addCount)
}

// compted
const doubleCounter: ComputedRef<number> = computed(() => counter.value * 2)
</script>

<style scoped>
.section {
  margin: 0.5rem 0;
}
</style>
