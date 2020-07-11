import { shallowMount } from '@vue/test-utils'
import Board from '../../src/components/Board'

describe('Board.vue', () => {
  describe('indexByRow', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallowMount(Board, {
        propsData: { squares: Array(9).fill(null) }
      })
    })

    it('return 0 when index = 1 and row = 1', () => {
      expect(wrapper.vm.indexByRow(1, 1)).toEqual(0)
    })

    it('return 4 when index = 2 and row = 2', () => {
      expect(wrapper.vm.indexByRow(2, 2)).toEqual(4)
    })

    it('return 8 when index = 3 and row = 3', () => {
      expect(wrapper.vm.indexByRow(3, 3)).toEqual(8)
    })
  })

  it('render 9 square tags', () => {
    const wrapper = shallowMount(Board, {
      propsData: { squares: Array(9).fill(null) }
    })
    // shallowMountにしているのでsquareタグではなくsquare-stubタグ
    expect(wrapper.findAll('square-stub').length).toBe(9)
  })

  it('render 9 square tags with id', () => {
    const wrapper = shallowMount(Board, {
      propsData: { squares: Array(9).fill(null) }
    })
    for (let i = 0; i < 9; i++) {
      expect(wrapper.find('#square' + i).exists()).toBeTruthy()
    }
  })

  it('render 9 square tags with value', () => {
    const wrapper = shallowMount(Board, {
      propsData: { squares: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'] }
    })
    for (let i = 0; i < 9; i++) {
      // 65 は'A'のUnicodeの文字コード番号
      expect(wrapper.find('#square' + i).attributes().value).toBe(String.fromCharCode(i + 65))
    }
  })

  describe('disabled', () => {
    it('when winner has array, disabled is true', () => {
      const wrapper = shallowMount(Board, {
        propsData: {
          squares: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
          winner: [1, 2, 3]
        }
      })
      for (let i = 0; i < 9; i++) {
        expect(wrapper.find('#square' + i).attributes().disabled).toBe('true')
      }
    })

    it('when winner is undefined, disabled is false', () => {
      const wrapper = shallowMount(Board, {
        propsData: {
          squares: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
          winner: undefined
        }
      })
      for (let i = 0; i < 9; i++) {
        expect(wrapper.find('#square' + i).attributes().disabled).toBeUndefined()
      }
    })
  })

  describe('winner', () => {
    it('when winner has array, winner attribute is true', () => {
      const all_list = [...Array(9).keys()]
      const winner_list = [0, 1, 2]
      const non_winner_list = all_list.filter(item =>
        winner_list.indexOf(item) === -1
      )
      const wrapper = shallowMount(Board, {
        propsData: {
          squares: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
          winner: winner_list
        }
      })
      for (const i of winner_list) {
        expect(wrapper.find('#square' + i).attributes().winner).toBe('true')
      }
      for (const i of non_winner_list) {
        expect(wrapper.find('#square' + i).attributes().winner).toBeUndefined()
      }
    })
  })
})
