<template>
    <div class="board">
    </div>
</template>

<script>
  export default {
    name: 'Board',
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