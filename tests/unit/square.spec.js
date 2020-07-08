import { shallowMount } from '@vue/test-utils'
import Square from '../../src/components/Square'

describe('Square.vue', () => {
  it('add O class when value is O', () => {
    const val = 'O'
    const wrapper = shallowMount(Square, {
      propsData: { value: val }
    })
    expect(wrapper.classes()).toContain(val)
    expect(wrapper.classes()).toContain('square')
  })

  it('add X class when value is X', () => {
    const val = 'X'
    const wrapper = shallowMount(Square, {
      propsData: { value: val }
    })
    expect(wrapper.classes()).toContain(val)
    expect(wrapper.classes()).toContain('square')
  })

  it('add winner class when winner is true', () => {
    const wrapper = shallowMount(Square, {
      propsData: { winner: true }
    })
    expect(wrapper.classes()).toContain('winner')
    expect(wrapper.classes()).toContain('square')
  })

  it('not add winner class when winner is false', () => {
    const wrapper = shallowMount(Square, {
      propsData: { winner: false }
    })
    expect(wrapper.classes()).not.toContain('winner')
    expect(wrapper.classes()).toContain('square')
  })

  it('disabled attribute is disabled when disabled is true', () => {
    const wrapper = shallowMount(Square, {
      propsData: { disabled: true }
    })
    expect(wrapper.attributes().disabled).toBe('disabled')
  })

  it('disabled attribute is disabled when disabled is false', () => {
    const wrapper = shallowMount(Square, {
      propsData: { disabled: false }
    })
    expect(wrapper.attributes().disabled).toBeUndefined()
  })
})
