import { defineStore } from 'pinia'

const useSetting = defineStore({
  id: 'setting',
  state: () => {
    return {
      collapsed: false,
      menuWidth: 210
    }
  },
  actions: {
    changeCollapsed(collapsed: boolean) {
      this.collapsed = collapsed
    },
    changeMenuWidth(menuWidth: number) {
      this.menuWidth = menuWidth
    }
  }
})

export default useSetting
