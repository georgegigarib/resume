import { mount, VueWrapper } from '@vue/test-utils'
import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import ThemeSwitch from '@/components/ThemeSwitchTwo.vue'
import { nextTick } from 'vue'

// Mocking the VueUse functions
vi.mock('@vueuse/core', () => ({
  useDark: vi.fn(() => ({
    value: false
  })),
  useToggle: vi.fn(() => vi.fn())
}))

describe('ThemeSwitch', () => {
  let wrapper: VueWrapper<any>

  beforeEach(() => {
    wrapper = mount(ThemeSwitch)
  })

  it('should mount the component', () => {
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should switch between light and dark themes', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]')

    expect((checkbox.element as HTMLInputElement).checked).toBe(false)

    // Simulate checkbox click
    await checkbox.setValue(true)
    await checkbox.trigger('change')
    await nextTick()

    expect((checkbox.element as HTMLInputElement).checked).toBe(true)
    expect(wrapper.vm.switchValue).toBe(true)
  })

  it('should accept size prop and apply it', async () => {
    const size = 20
    await wrapper.setProps({ size })
    expect(wrapper.vm.size).toBe(size)
  })

  it('should have default size when size prop is not provided', () => {
    expect(wrapper.vm.size).toBe(30)
  })

  afterEach(() => {
    vi.clearAllMocks()
    if (wrapper) {
      wrapper.unmount()
    }
  })
})
