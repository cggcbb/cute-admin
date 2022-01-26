<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
// 如果你想在 setup 外使用信息，
// 你需要在顶层 setup 中把 useMessage 返回的 message 值挂载到 window 下然后再调用，调用前需要确保 message 已经挂载成功。
import { useMessage } from 'naive-ui'

window.$message = useMessage()
</script>
