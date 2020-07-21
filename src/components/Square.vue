<!-- ゲームのひとつの枠。O/X/ (空）/の値がvalueとして入る -->
<template>
    <button class="square" :class="[ value, { 'winner': winner } ]"
            :disabled="disabled" @click="click">
        {{value}}
    </button>
</template>

<script>
  export default {
    name: 'Square',
    props: {
      value: String,
      winner: Boolean,
      disabled: Boolean
    },
    methods: {
      click () {
        this.$emit('click')
      }
    }
  }
</script>

<style scoped>
    .square {
        background-color: whitesmoke;
        font-size: 15vmin;
    }
    .square.winner {
    }
    .square.X {
        color: darkorange;
    }
    .square.O {
        color: darkblue;
    }
</style>