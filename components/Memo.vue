<template>
  <div
    class="memo"
    :style="{
      top:`${top}px`,
      left:`${left}px`,
      background:`${background}`
    }"
  >
    <div class="tab" @mousedown="$emit('start',index)" />
    <span class="close" @click="$emit('minus',index)">
      X
    </span>

    <textarea v-model="text" class="textzone"  @keyup.enter="setItems"></textarea>

    <ul class="endtab">
      <li class="end1" @click="$emit('changeColor1')" />
      <li class="end2" @click="$emit('changeColor2')" />
      <li class="end3" @click="$emit('changeColor3')" />
    </ul>
  </div>
  <!-- <div
    class="memo"
    :style="{
      top:`${top}px`,
      left:`${left}px`
    }"
    @click="$emit('minus',index)" /> -->
  <!-- マイナスの跡にindexと引数を書いても大丈夫。
    複数の引数を指定するときは 連想配列で渡す。-->
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    background: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      message: this.text
    }
  },
  methods: {
    setItems(index) {
      localStorage.setItem('memo' + index, this.text)
    }
  }
}
</script>

<style>
.memo {
  position:fixed;
   width: 200px;
   height: 300px;
}

.tab {
  width: 100%;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  cursor: move;
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

.textzone {
  width: 100%;
  height: 199px;
  resize: none;
  background: transparent;
  font-size: 20px;
  border: none;
  outline: none;
}

.endtab {
  display: flex;
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
