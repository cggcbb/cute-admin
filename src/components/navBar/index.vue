<template>
  <section class="nav-bar-wrapper">
    <fold-icon></fold-icon>
    <div class="blank"></div>
    <actions @search-click="handleSearchClick"></actions>
    <div class="avatar-wrapper">avatar</div>
  </section>
</template>

<script setup lang="ts">
import FoldIcon from './components/foldIcon.vue'
import Actions from './components/actions.vue'

const handleSearchClick = () => {
  console.log('index page click')
}
</script>

<style lang="less" scoped>
@import '@/assets/styles/mixins.less';
.nav-bar-wrapper {
  .layout-center();
  box-sizing: border-box;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
  .blank {
    flex: 1;
  }
}
</style>
