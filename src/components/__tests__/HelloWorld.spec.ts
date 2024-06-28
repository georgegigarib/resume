import { mount, VueWrapper } from '@vue/test-utils'
import { describe, expect, it, beforeEach, vitest } from 'vitest'
import { plugins } from '@/infrastructure/plugins/allPlugins'
import HelloWorld from '@/components/HelloWorld.vue'
import { toast } from 'vue3-toastify'

describe('HelloWorld', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(HelloWorld, {
      props: { msg: 'Hello Vitest' },
      global: {
        plugins: plugins.map((plugin) => plugin.plugin)
      }
    })
  })

  it('renders properly', () => {
    expect(wrapper.text()).toContain('Hello Vitest')
  })

  it('has expected html structure', (): void => {
    expect(wrapper.element).toMatchSnapshot()
  })

  it('should call toast when clicking on show toast button', () => {
    const spy = vitest.spyOn(toast, 'success')

    wrapper.find('button').trigger('click')

    expect(spy).toHaveBeenCalledWith('Hello, Vite + Vue 3!')
  })
})
