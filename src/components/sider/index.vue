<template>
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed-width="64"
    :width="setting.menuWidth"
    :collapsed="setting.collapsed"
  >
    <div class="scrollbar">
      <n-scrollbar>
        <n-menu
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          :accordion="true"
          @update:value="handleMenuUpdate"
        />
      </n-scrollbar>
    </div>
  </n-layout-sider>
</template>
<script setup lang="ts">
import { h } from 'vue'
import {
  DashboardOutlined as DashBoardIcon,
  SettingOutlined as SettingIcon,
  UnorderedListOutlined as ListIcon
} from '@vicons/antd'
import { NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useSetting from '../../store/setting'

const renderIcon = (icon: any) => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: 'Axios',
    key: 'axios',
    path: '/axios',
    icon: renderIcon(DashBoardIcon)
  },
  {
    label: 'naive',
    key: 'naive',
    path: '/naive',
    icon: renderIcon(SettingIcon)
  },
  {
    label: 'pinia',
    key: 'pinia',
    path: '/pinia',
    icon: renderIcon(ListIcon)
  }
]

const router = useRouter()

const handleMenuUpdate = (key: string, item: any) => {
  router.push({
    path: `${item.path}`
  })
}

const setting = useSetting()
</script>

<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.scrollbar {
  height: calc(100vh - 48px) !important;
}
</style>
