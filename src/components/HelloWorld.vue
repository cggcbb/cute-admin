<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h3>{{ msg }}</h3>
  <section class="router-link-wrapper">
    <router-link to="/" class="link">首页</router-link>
    <router-link to="/pinia" class="link">Pinia</router-link>
    <router-link to="/naive" class="link">Naive UI</router-link>
    <router-link to="/axios" class="link">Axios</router-link>
  </section>
  <n-message-provider>
    <router-view></router-view>
  </n-message-provider>
</template>

<style lang="less" scoped>
a {
  color: #42b983;
}
.router-link-wrapper {
  margin: 0.6rem 0;
  .link {
    margin-left: 20px;
  }
}
</style>
