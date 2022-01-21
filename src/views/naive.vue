<template>
  <n-config-provider :theme="theme" class="provider-wrapper">
    <n-space>
      <n-input />
      <n-date-picker />
      <n-button @click="changeTheme" type="success">切换主题</n-button>
      <n-button @click="warning" type="warning">点击警告提示</n-button>
    </n-space>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { darkTheme, useMessage } from 'naive-ui'

const message = useMessage()

const theme: any = ref(undefined)

const changeTheme = () => {
  theme.value = theme.value ? undefined : darkTheme
  const bodyBackGroundColor = theme.value ? 'rgb(16, 16, 20)' : ''
  const bodyColor = theme.value ? 'rgba(255, 255, 255, .82)' : ''
  document.body.style.backgroundColor = bodyBackGroundColor
  document.body.style.color = bodyColor
}

const warning = () => {
  message.warning('这是一则警告提示 ..')
}
</script>

<style scoped>
.provider-wrapper {
  display: flex;
  justify-content: center;
}
</style>
