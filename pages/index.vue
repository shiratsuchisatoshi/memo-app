<template>
  <section
    class="container"
    @mousemove="onMousemove"
    @mouseup="onMouseup"
  >
    <memo
      v-for="(mm, index) in $store.state.memoList"
      :key="index"
      :toppo="mm.toppo"
      :left="mm.left"
      :index="index"
      :zindex="mm.zindex"
      :background="mm.background"
      @dragStart="onDragStart($event, index)"
    />
    <plus-btn
      @plus="plusMemo"
    />
    <remove-btn
      @remove="removeMemo"
    />
  </section>
</template>

<script>
import Memo from '~/components/Memo.vue'
import PlusBtn from '~/components/PlusBtn.vue'
import RemoveBtn from '~/components/RemoveBtn.vue'

export default {
  components: {
    Memo,
    PlusBtn,
    RemoveBtn
  },
  data() {
    return {
      draggingIndex: null,
      prevX: null,
      prevY: null

    }
  },
  methods: {
    plusMemo() {
      const widthCount = Math.floor(window.innerWidth / 250)
      this.$store.commit('addMemo', {
        toppo: Math.floor(this.$store.state.memoList.length / widthCount) * 350,
        left: (this.$store.state.memoList.length % widthCount) * 250,
        text: '',
        background: this.$store.state.colorBox[ Math.floor(Math.random() * this.$store.state.colorBox.length) ],
        zindex: 0
      })
    },
    removeMemo() {
      localStorage.clear()
      location.reload()
    },
    onDragStart({ x, y }, index) {
      this.draggingIndex = index
      this.mouseindex = index
      this.prevX = x
      this.prevY = y
    },
    onMousemove(e) {
      if (this.draggingIndex === null) return

      const x = e.pageX
      const y = e.pageY

      const target = { ...this.$store.getters.memoData(this.draggingIndex) }
      // console.log(target)
      target.left += x - this.prevX
      target.toppo += y - this.prevY
      target.zindex += 1
      // console.log('z1', target.zindex)
      this.prevX = x
      this.prevY = y

      this.$store.commit('updateMemoposition', {
        index: this.draggingIndex,
        target: target
      })
    },
    onMouseup() {
      // console.log('z1', this.zindex)
      this.draggingIndex = null
      // // this.zindex = 0
      // // console.log('z1', this.zindex)
      // this.$store.commit('updatezindex', this.mouseindex)
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url('../assets/back.jpg');
  user-select: none;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
