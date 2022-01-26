<template>
  <span
    class="fold-wrapper"
    :class="[setting.collapsed ? 'fold-close-status' : 'fold-open-status']"
    @click="toggleFold"
  >
    <n-icon>
      <fold-icon />
    </n-icon>
  </span>
</template>
<script setup lang="ts">
import { MenuUnfoldOutlined as foldIcon } from '@vicons/antd'

import useSetting from '../../../store/setting'

const setting = useSetting()

const toggleFold: () => void = () => {
  setting.changeCollapsed(!setting.collapsed)
}
</script>
<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.fold-open-status {
  transform: rotate(180deg);
}
.fold-close-status {
  transform: rotate(0);
}
.fold-wrapper {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 48px;
  height: @logoHeight;
  padding: 0 10px;
  font-size: 26px;
  transition: transform @transitionTime;
  &:hover {
    cursor: pointer;
    color: var(--primary-color);
  }
}
</style>
