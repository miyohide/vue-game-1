import { shallowMount } from '@vue/test-utils'
import Game from '../../src/components/Game'

describe('Game.vue', () => {
  it('when call restart, all data is initialized', () => {
    const wrapper = shallowMount(Game)
    wrapper.setData({
      squares: Array(9).fill(10),
      stepNumber: 5,
      currentPlayer: 'O',
      winner: [0, 1, 2]
    })
    expect(wrapper.vm.stepNumber).toBe(5)
    wrapper.vm.restart()
    expect(wrapper.vm.stepNumber).toBe(0)
    expect(wrapper.vm.currentPlayer).toBe('X')
    expect(wrapper.vm.winner).toBeNull()
  })
})