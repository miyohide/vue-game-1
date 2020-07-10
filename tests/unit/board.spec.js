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
})
