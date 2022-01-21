<template>
  <n-button @click="send" :loading="loading">send http to github</n-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import http from '../utils/http'

const message = useMessage()
const loading = ref<Boolean>(false)

const send = async () => {
  loading.value = true
  const result = await http.get('https://api.github.com/users/cggcbb')
  loading.value = false
  message.success(`pull github success, username: ${result.data.login}`, {
    duration: 4000
  })
}
</script>
<style lang=""></style>
