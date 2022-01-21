import { mount } from '@vue/test-utils'
import Test from './components/Test.vue'

describe('test Test.vue', () => {
  it('test should have text: Hello Moto', () => {
    const wrapper = mount(Test)
    expect(wrapper.find('.test-title').text()).toEqual('Hello Moto')
  })

  it('test should have a button and button text should be correct', () => {
    const wrapper = mount(Test)
    const button = wrapper.find('button')
    expect(button).toBeTruthy()
    expect(button.text()).toEqual('increment')
  })

  it('test click button, count should be update', async () => {
    const wrapper = mount(Test)
    const button = wrapper.find('button')
    const pCount = wrapper.find('.test-count')
    expect(pCount.text()).toEqual('count is: 0')
    await button.trigger('click')
    expect(pCount.text()).toEqual('count is: 1')
  })
})
