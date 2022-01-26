<template>
  <n-config-provider :theme="theme">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-grid>
          <n-gi :span="24">
            <n-layout has-sider>
              <n-layout-sider
                bordered
                collapse-mode="width"
                :collapsed-width="64"
                :width="240"
                :collapsed="collapsed"
              >
                <my-header></my-header>
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
              <n-layout>
                <main-layout></main-layout>
              </n-layout>
            </n-layout>
          </n-gi>
        </n-grid>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ref, h } from 'vue'
import { darkTheme, NIcon } from 'naive-ui'
import { useRouter } from 'vue-router'
import {
  DashboardOutlined as DashBoardIcon,
  SettingOutlined as SettingIcon,
  UnorderedListOutlined as ListIcon
} from '@vicons/antd'
import { storeToRefs } from 'pinia'
import MyHeader from '@/components/header/index.vue'
import MainLayout from '@/components/main.vue'
import useSetting from '../store/setting'

const theme: any = ref(null)

// theme.value = darkTheme

const renderIcon = icon => {
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

const handleMenuUpdate = (key, item) => {
  router.push({
    path: `${item.path}`
  })
}

const store = useSetting()
const { collapsed } = storeToRefs(store)
</script>

<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.scrollbar {
  height: calc(100vh - 48px) !important;
}
</style>
