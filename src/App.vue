<script setup lang="ts">
import NaiveProvider from '@/components/naive-provider/index.vue'
</script>

<template>
  <n-notification-provider>
    <n-message-provider>
      <naive-provider />
    </n-message-provider>
  </n-notification-provider>
</template>

<style>
:root {
  --border-color: #000;
  --primary-color: #18a058;
  --menu-width: 210px;
}

body {
  transition: background 0.3s linear;
}
</style>
