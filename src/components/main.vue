<template>
  <nav-bar></nav-bar>
  <router-view v-slot="{ Component }">
    <transition name="fade-transform" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<script setup lang="ts">
import NavBar from '@/components/navBar/index.vue'
</script>

<style lang="less"></style>
