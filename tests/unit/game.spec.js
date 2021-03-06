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

  describe('hasWinner', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallowMount(Game)
    })

    it('return true if aligned horizontally', () => {
      wrapper.setData({
        squares: ['O', 'O', 'O', 'X', 'X', '1', '2', 'X', 'X']
      })
      expect(wrapper.vm.hasWinner()).toBeTruthy()
    })

    it('return true if aligned vertically', () => {
      wrapper.setData({
        squares: ['O', 'X', 'O', '1', 'X', '1', '2', 'X', 'X']
      })
      expect(wrapper.vm.hasWinner()).toBeTruthy()
    })

    it('return false if not aligned', () => {
      wrapper.setData({
        squares: ['O', 'X', 'O', '1', 'O', '1', '2', 'X', 'Y']
      })
      expect(wrapper.vm.hasWinner()).toBeFalsy()
    })
  })

  describe('click', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallowMount(Game)
    })

    it('set a value to square[i]', () => {
      wrapper.vm.click(0)
      expect(wrapper.vm.squares[0]).toBe('X')
      expect(wrapper.vm.stepNumber).toBe(1)
      expect(wrapper.vm.currentPlayer).toBe('O')
    })

    it('change currentPlayer O -> X', () => {
      wrapper.setData({
        currentPlayer: 'O'
      })
      wrapper.vm.click(0)
      expect(wrapper.vm.squares[0]).toBe('O')
      expect(wrapper.vm.stepNumber).toBe(1)
      expect(wrapper.vm.currentPlayer).toBe('X')
    })

    it('when click the not null place, not change currentPlayer and stepNumber', () => {
      wrapper.setData({
        squares: ['X', null, null, null, null, null, null, null, null]
      })
      wrapper.vm.click(0)
      expect(wrapper.vm.squares[0]).toBe('X')
      expect(wrapper.vm.stepNumber).toBe(0)
      expect(wrapper.vm.currentPlayer).toBe('X')
    })

    it('when winner is not null, not change currentPlayer and stepNumber', () => {
      wrapper.setData({
        winner: [0, 1, 2]
      })
      wrapper.vm.click(0)
      expect(wrapper.vm.stepNumber).toBe(0)
      expect(wrapper.vm.currentPlayer).toBe('X')
    })
  })
})