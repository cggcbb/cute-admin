<template>
  <div class="action-wrapper">
    <span class="action-item" v-for="(action, index) in actions" :key="`${action.name}-${index}`">
      <n-icon size="20" @click.stop="action.callback">
        <component :is="action.component"></component>
      </n-icon>
    </span>
  </div>
</template>
<script setup lang="ts">
import {
  SearchOutlined as SearchIcon,
  BellOutlined as BellIcon,
  SettingOutlined as SettingIcon,
  FullscreenOutlined as FullScreenIcon
} from '@vicons/antd'

const emits = defineEmits(['search-click', 'bell-click', 'full-screen-click', 'setting-click'])

interface IAction {
  name: string
  component: any
  callback?: () => void
}

const actions: IAction[] = [
  {
    name: 'search-icon',
    component: SearchIcon,
    callback: () => {
      emits('search-click')
    }
  },
  {
    name: 'bell-icon',
    component: BellIcon,
    callback: () => {
      emits('bell-click')
    }
  },
  {
    name: 'full-screen-icon',
    component: FullScreenIcon,
    callback: () => {
      emits('full-screen-click')
    }
  },
  {
    name: 'setting-icon',
    component: SettingIcon,
    callback: () => {
      emits('setting-click')
    }
  }
]
</script>

<style lang="less" scoped>
@import '@/assets/styles/mixins.less';
.action-wrapper {
  .layout-center();
  .action-item {
    min-width: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>
