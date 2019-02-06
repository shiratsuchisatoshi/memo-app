<template>
  <section
    class="container"
    onContextmenu="return false;"
    @mousemove="onMousemove"
    @mouseup="onMouseup"
    @mousedown="rightClick"
    @keyup.enter="keydown"
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

    <counterBox
      @plus="plusMemo"
    />
    <Menu
      @changeWall="changeWall"
    />

    <BoardMenu
      @changeWall="changeWall"
    />
  </section>
</template>

<script>
import Memo from '~/components/Memo.vue'
// import PlusBtn from '~/components/PlusBtn.vue'
import CounterBox from '~/components/CounterBox.vue'
import Menu from '~/components/Menu.vue'
import BoardMenu from '~/components/BoardMenu.vue'

export default {
  components: {
    Memo,
    // PlusBtn,
    // RemoveBtn,
    CounterBox,
    Menu,
    BoardMenu
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
      const val = document.getElementById('input').value
      const widthCount = Math.floor(window.innerWidth / 250)

      for (let i = 0; i < val; i++) {
        this.$store.commit('addMemo', {
          toppo: Math.floor(this.$store.state.memoList.length / widthCount) * 350,
          left: (this.$store.state.memoList.length % widthCount) * 250,
          text: '',
          background: this.$store.state.colorBox[ Math.floor(Math.random() * this.$store.state.colorBox.length) ],
          zindex: 0
        })
      }
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
    },
    rightClick(e) {
      switch (e.which) {
        case 3: // 3は右クリック
          const myContextMenu = document.getElementById('js-contextmenu')
          document.body.addEventListener('contextmenu', function (e) {
            const posX = e.pageX
            const posY = e.pageY
            myContextMenu.style.left = posX + 'px'
            myContextMenu.style.top = posY + 'px'
            myContextMenu.classList.add('show')
          })
          document.body.addEventListener('click', function () {
            if (myContextMenu.classList.contains('show')) {
              myContextMenu.classList.remove('show')
            }
          })
          break
      }
    },
    changeWall() {
      const urls = '../assets/1.jpg'
      const style = document.styleSheets[9]
      style.insertRule('.container {background:url(' + urls + ')}', 4)
      console.log(style)
      // style.insertRule("background: url('../assets/1.jpg')", 0)
    },
    keydown(e) {
      alert(e)
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
