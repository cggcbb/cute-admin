<template>
  <section class="view-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </section>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout'
})
</script>

<script setup lang="ts">
const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  }
})

const mainBackgroundColor = ref<string>('#f0f2f5')

watchEffect(() => {
  mainBackgroundColor.value = props.isDark ? '#333' : '#f0f2f5'
})
</script>

<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.view-main {
  position: relative;
  height: calc(200%);
  box-sizing: border-box;
  padding: 5px;
  background-color: v-bind(mainBackgroundColor);
  overflow-y: auto;
  z-index: 88;
}
</style>
