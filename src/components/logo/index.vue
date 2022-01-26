<template>
  <div class="logo-wrapper">
    <img v-if="showLogo" class="logo-img" src="../../assets/logo.png" />
    <div class="title" :class="[collapsed ? 'close-title' : 'show-title']">
      <span class="logo-title">{{ projectName }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import useSetting from '../../store/setting'

defineProps({
  projectName: {
    type: String,
    default: ''
  },
  showTitle: {
    type: Boolean,
    default: true
  },
  showLogo: {
    type: Boolean,
    default: true
  },
  alwaysShow: {
    type: Boolean,
    default: false
  }
})

const store = useSetting()
const { collapsed } = storeToRefs(store)
</script>
<style lang="less" scoped>
@import '@/assets/styles/variables.less';
.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px dashed var(--border-color);
  height: @logoHeight;
  box-sizing: border-box;
  .logo-img {
    width: 30px;
  }
  .title {
    margin-left: 4px;
    .logo-title {
      font-weight: bold;
    }
  }
  .show-title {
    transform: scale(1);
    width: auto;
    transition: transform 0.3s ease-in;
  }
  .close-title {
    transform: scale(0);
    width: 0;
  }
}
</style>
