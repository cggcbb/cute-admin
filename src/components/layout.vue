<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-grid>
          <n-gi :span="24">
            <n-layout-header class="layout-header-wrapper">
              <my-header></my-header>
              <nav-bar></nav-bar>
            </n-layout-header>
            <n-layout has-sider>
              <sider />
              <n-layout>
                <main-layout :isDark="isDark"></main-layout>
              </n-layout>
            </n-layout>
          </n-gi>
        </n-grid>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed, ComputedRef } from 'vue'
import { darkTheme } from 'naive-ui'

import MainLayout from '@/components/main.vue'
import Sider from '@/components/sider/index.vue'
import useTheme from '../store/theme'
import MyHeader from '@/components/header/index.vue'
import NavBar from '@/components/navBar/index.vue'

const store = useTheme()

const isDark: ComputedRef<boolean> = computed(() => store.dark)
const theme: any = computed(() => (isDark.value ? darkTheme : {}))
</script>

<style lang="less" scoped>
.layout-header-wrapper {
  display: flex;
}
</style>
