<template>
    <div class="board">
        <div v-for="row in 3" :key="row" class="board-row">
            <Square v-for="col in 3" :key="indexByRow(col, row)"
                    :id="'square' + indexByRow(col, row)"
                    :value="squares[indexByRow(col, row)]"
            />
        </div>
    </div>
</template>

<script>
  import Square from './Square'
  export default {
    name: 'Board',
    components: { Square },
    props: {
      squares: Array
    },
    methods: {
      /* colは横、rowは縦。返るのは箱の中の値
       *     1   2   3
       *   +---+---+---+
       * 1 | 0 | 1 | 2 |
       * 2 | 3 | 4 | 5 |
       * 3 | 6 | 7 | 8 |
       *   +---+---+---+
       */
      indexByRow (col, row, max = 3) {
        return (row * max + col) - (max + 1)
      }
    }
  }
</script>

<style scoped>
</style>