import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders properly', () => {
    // const wrapper = mount(TheWelcome, { props: { msg: 'Hello OLS' } })
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Welcome to OLS')
  })
  it('renders properly', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Open Learning Server')
  })
  it('renders properly again', () => {
    const wrapper = mount(TheWelcome)
    expect(wrapper.text()).toContain('Open Learning Server')
  })
})
