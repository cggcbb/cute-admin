import { defineStore } from 'pinia'

const useSetting = defineStore({
  id: 'setting',
  state: () => {
    return {
      collapsed: false
    }
  },
  actions: {
    changeCollapsed(collapsed: boolean) {
      this.collapsed = collapsed
    }
  }
})

export default useSetting
