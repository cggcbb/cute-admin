<template>
  <section :class="[setting.collapsed ? 'fold-close' : 'fold-open']">
    <div class="header-wrapper">
      <div class="logo-wrapper">
        <logo projectName="Cute Admin"></logo>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Logo from '@/components/logo/index.vue'
import useSetting from '../../store/setting'

const setting = useSetting()

const menuWidth = computed(() => `${setting.menuWidth}px`)
</script>
<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.fold-open {
  .header-wrapper {
    width: v-bind(menuWidth);
  }
}

.fold-close {
  .header-wrapper {
    width: @minMenuWidth;
  }
}
.header-wrapper {
  transition: width @transitionTime;
}
</style>
