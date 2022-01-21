import {
  // create naive ui
  create,
  // component
  NConfigProvider,
  NMessageProvider,
  NButton,
  NSpace,
  NInput,
  NDatePicker
} from 'naive-ui'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

export default create({
  components: [NConfigProvider, NMessageProvider, NButton, NSpace, NInput, NDatePicker]
})
