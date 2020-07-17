<template>
    <div class="game">
        <div class="game-area">
            <div class="game-title">
                <h1>Sample Game</h1>
            </div>

            <board :squares="squares" />

            <div class="game-info">
                <p v-if="stepNumber === 0">
                    ゲームを始めましょう。<b :class="currentPlayer">{{ currentPlayer }}</b>の手番です。
                </p>
                <p v-else-if="!!winner">
                    勝者は
                    <b :class="currentPlayer">{{ currentPlayer }}</b>
                    <button @click="restart">新しいゲームを開始</button>
                </p>
                <p v-else-if="stepNumber > 8">
                    引き分け
                    <button @click="restart">新しいゲームを開始</button>
                </p>
                <p v-else>
                    <b :class="currentPlayer">{{ currentPlayer }}</b>
                </p>
            </div>
        </div>
    </div>
    
</template>

<script>
  import Board from './Board'
  export default {
    name: 'Game',
    components: { Board },
    data () {
      return {
        squares: Array(9).fill(null),
        stepNumber: 0,
        currentPlayer: 'X',
        winner: null
      }
    },
    methods: {
      restart() {
        this.squares = Array(9).fill(null)
        this.stepNumber = 0
        this.currentPlayer = 'X'
        this.winner = null
      },
      hasWinner() {
        if (this.winner) {
          return true
        }
        // 勝ちパターン
        const winMatches = [
          [0, 1, 2], [3, 4, 5], [6, 7, 8], // 横に揃ったパターン
          [0, 3, 6], [1, 4, 7], [2, 5, 8], // 縦に揃ったパターン
          [0, 4, 8], [2, 4, 6] // 斜めに揃ったパターン
        ]

        for (let i = 0; i < winMatches.length; i++) {
          const [a, b, c] = winMatches[i]
          if (this.squares[a]
            && this.squares[a] === this.squares[b]
            && this.squares[a] === this.squares[c]
          ) {
            this.winner = [a, b, c]
            return true
          }
        }
        return false
      },
      click (i) {
        // 値があったりすでに勝者が決まっている場合は何もしない
        if (this.squares[i] || this.winner) {
          return
        }
        // Vueにおいて配列に対しては$setを使って変更を通知する
        // see. https://jp.vuejs.org/v2/guide/reactivity.html#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%AB%E9%96%A2%E3%81%97%E3%81%A6
        this.$set(this.squares, i, this.currentPlayer)
        if (!this.hasWinner()) {
          this.stepNumber++
          this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
        }
      }
    }
  }
</script>

<style scoped>

</style>