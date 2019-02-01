<template>
  <textarea
    :value="$store.getters.memoData(index).text"
    class="editor"
    @input="onInput"
  />
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
    onInput(e) {
      this.$store.commit('updateText', {
        index: this.index,
        text: e.target.value })
    }
  }

}
</script>

<style>
.editor{
  /* position:absolute; */
  top:100px;
  left:0;
  width: 200px;
  bottom:0;
  height: 200px;
  border:none;
  background: transparent;
  color: #fff;
  padding:15px;
  font-size: 20px;
  resize: none;
  outline: none;
}
/* .editor {
  width: 100%;
  height: 199px;
  resize: none;
  background: transparent;
  font-size: 20px;
  border: none;
  outline: none;
} */

</style>
