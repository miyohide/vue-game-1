import { shallowMount } from '@vue/test-utils'
import Game from '../../src/components/Game'

describe('Game.vue', () => {
  it('fire click event', () => {
    const wrapper = shallowMount(Game)
    expect(wrapper.exists()).toBe(true)
  })
})