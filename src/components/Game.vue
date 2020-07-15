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
                    <button>新しいゲームを開始</button>
                </p>
                <p v-else-if="stepNumber > 8">
                    引き分け
                    <button>新しいゲームを開始</button>
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
      }
    }
  }
</script>

<style scoped>

</style>