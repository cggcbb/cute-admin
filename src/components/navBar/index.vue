<template>
  <section :class="[setting.collapsed ? 'fold-close' : 'fold-open']">
    <div class="nav-bar-wrapper">
      <navbar-fold-icon />
      <navbar-breadcrumb />
      <div class="blank"></div>
      <navbar-actions @search-click="handleSearchClick" />
      <div class="avatar-wrapper">avatar</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import NavbarFoldIcon from './components/navBarFoldIcon.vue'
import NavbarActions from './components/navBarActions.vue'
import NavbarBreadcrumb from '@/components/breadcrumb/index.vue'
import useSetting from '../../store/setting'

const setting = useSetting()

const handleSearchClick = () => {
  console.log('index page click')
}

const foldOpenNavbarWidth = computed(() => `${setting.menuWidth}px`)
</script>

<style lang="less" scoped>
@import '@/assets/styles/mixins.less';
@import '@/assets/styles/variables.less';
.nav-bar-wrapper {
  position: fixed;
  top: 0;
  .layout-center();
  box-sizing: border-box;
  box-shadow: 1px 0 2px 1px rgba(0, 0, 0, 0.3);
  z-index: 99;
  overflow: hidden;
  transition: width 0.3s ease;
  .blank {
    flex: 1;
  }
}
.fold-open {
  height: @logoHeight;
  .nav-bar-wrapper {
    width: calc(100% - v-bind(foldOpenNavbarWidth));
  }
}

.fold-close {
  height: @logoHeight;
  .nav-bar-wrapper {
    width: calc(100% - @minMenuWidth);
  }
}
</style>
