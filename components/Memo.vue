<template>
  <div
    class="memo"
     :style="`
      top: ${toppo}px;
      left: ${left}px;
      z-index: ${zindex};
      background: ${background};
    `"
    @mousedown="zindexPlus"
  >
    <div class="handle" @mousedown="onMousedown" />
    <span class="close" :index="index" @click="minus">
      X
    </span>
    <editor :index="index" />
    <colorFooter :index="index" />
  </div>
</template>

<script>
import Editor from '~/components/Editor'
import ColorFooter from '~/components/ColorFooter'

export default {
  components: {
    Editor,
    ColorFooter
  },
  props: {
    toppo: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    background: {
      type: String,
      default: null
    },
    zindex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onMousedown(e) {
      this.$emit('dragStart', {
        x: e.pageX,
        y: e.pageY
      })
    },
    minus() {
      this.$store.commit('minusMemo', this.index)
    },
    zindexPlus() {
      const zindexBox = []
      for (let i = 0; i < this.$store.state.memoList.length; i++) {
        zindexBox.push(this.$store.state.memoList[i].zindex)
      }

      const zindexMax = Math.max(...zindexBox)
      // const targetId = this.index
      const memoData = {
        ...this.$store.getters.memoData(this.index)
      }
      memoData.zindex = zindexMax + 1
      console.log(memoData)
      this.$store.commit('zindexPlus', {
        index: this.index,
        memoData: memoData.zindex
      })
    }
  }
}
</script>

<style>
.memo {
  position: fixed;
  /* background: #f00; */
  width: 200px;
  height: 300px;
}

.handle{
  /* position:absolute; */
  top:0;
  left:0;
  right:0;
  height:50px;
  background: rgba(0, 0, 0, 0.5);
  cursor:move;
}

.close {
  position: absolute;
  color:white;
  top: 10px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

.close:active {
    transform: translateY(4px);
    border-bottom: none;
}

.close:hover {
  opacity: 1;
}

.endtab {
  display: flex;
  /* top:0;
  left:0;
  right:0; */
  /* bottom: 150; */
  height:50px;
}

.endtab li {
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
  padding: 20px 0;
  border: 3px solid #fff;
}

.end1 {
   background: pink;
   cursor: pointer;
}

.end2 {
   background: lightgreen;
   cursor: pointer;
}

.end3 {
   background: lightblue;
   cursor: pointer;
}

</style>
