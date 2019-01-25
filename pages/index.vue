<template>
  <section
    class="container"
    @mousemove="moving"
    @mouseup="moveEnd"
  >
    <memo
      v-for="(position, index) in memoPositions"
      :key="index"
      :top="position.top"
      :left="position.left"
      :background="position.background"
      @start="moveStart(index)"
      @minus="minusMemo(index)"
      @changeColor1="changeColor1(index)"
      @changeColor2="changeColor2(index)"
      @changeColor3="changeColor3(index)"
      @strage="setItems(index)"
    />
    <plusbtn @plus="plusMemo" />
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Memo from '~/components/Memo.vue'
import Plusbtn from '~/components/Plusbtn.vue'

export default {
  components: {
    Memo,
    Plusbtn
  },
  data() {
    return {
      memoPositions: [
        // { top: 100, left: 0 },
        // { top: 100, left: 250 },
        // { top: 100, left: 500 }
      ],
      catchId: null,
      colorBox: ['pink', 'lightgreen', 'lightblue']
      // contents: []
    }
  },
  methods: {
    plusMemo() {
      const widthCount = Math.floor(window.innerWidth / 250)

      this.memoPositions = [
        ...this.memoPositions,
        {
          top: Math.floor(this.memoPositions.length / widthCount) * 350,
          left: (this.memoPositions.length % widthCount) * 250,
          background: this.colorBox[ Math.floor(Math.random() * this.colorBox.length) ]
        }
      ]
      // Math.floor(Math.random() * this.memoPositions.length)
    },
    minusMemo(index) {
      this.memoPositions = [
        ...this.memoPositions ]
      this.memoPositions.splice(index, 1)
    },
    moveStart(index) {
      this.catchId = index
      this.prevX = event.pageX
      this.prevY = event.pageY
    },
    moveEnd() {
      this.catchId = null
    },
    moving(e) {
      const catchId = this.catchId
      const prevX = this.prevX
      const prevY = this.prevY
      if (catchId === null) return

      const x = e.pageX
      const y = e.pageY
      // console.log(x, y)

      this.memoPositions = [
        ...this.memoPositions ]
      this.memoPositions[catchId].top += y - prevY
      this.memoPositions[catchId].left += x - prevX

      this.prevX = x
      this.prevY = y
    },
    changeColor1(index) {
      this.memoPositions = [
        ...this.memoPositions ]
      this.memoPositions[index].background = this.colorBox[0]
    },
    changeColor2(index) {
      this.memoPositions = [
        ...this.memoPositions ]
      this.memoPositions[index].background = this.colorBox[1]
    },
    changeColor3(index) {
      this.memoPositions = [
        ...this.memoPositions ]
      this.memoPositions[index].background = this.colorBox[2]
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
}

</style>
