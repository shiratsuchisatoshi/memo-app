<template>
  <ul class="colorFooter">
    <li
      v-for="footerNum in $store.state.colorBox.length"
      :key="footerNum"
      :style="`background: ${$store.state.colorBox[footerNum -1]}`"
      @click="changeColor(footerNum)"
    />
  </ul>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    changeColor(footerNum) {
      this.$store.commit('changeColor', { footerNum: footerNum - 1, id: this.index })
      // console.log('yy', yy - 1, 'index', this.index)
    }
  }
}
</script>

<style>
.colorFooter {
  display: flex;
  height:50px;
  cursor: pointer;
}

.colorFooter li {
  width: calc(100% / 3);
}

ul,
li {
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
  list-style: none;
}

li {
  padding: 20px;
  border: 3px solid white;
}

</style>
