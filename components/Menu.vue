<template>
  <div class="my-contextmenu" id="js-contextmenu">
    <ul>
      <li @click="removeMemo">All Clear</li>
      <li @click="lineUpMemo">Line Up</li>
      <li @click="changeWall">Change Wall</li>
     </ul>
  </div>
</template>

<script >
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    removeMemo() {
      localStorage.clear()
      location.reload()
    },
    colorchange() {
      const elements = document.getElementsByClassName('memo')
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = '#00ff00'
      }
    },
    lineUpMemo() {
      const val = document.getElementsByClassName('memo')
      const widthCount = Math.floor(window.innerWidth / 250)

      for (let i = 0; i < val.length; i++) {
        this.$store.commit('lineUpMemo', {
          index: i,
          toppo: Math.floor(i / widthCount) * 350,
          left: (i % widthCount) * 250
        })
      }
    },
    changeWall() {
      this.$emit('changeWall', '../assets/1.jpg')
    }
  }
}
</script>

<style>
.my-contextmenu {
display: none;
position: fixed;
width: 100px;
background-color: #fff;
border: 1px solid #ccc;
box-shadow: 1px 1px 1px rgba(0,0,0,.2);
z-index: 1000;
}
.my-contextmenu.show {
display: block;
}
.my-contextmenu ul {
list-style: none;
padding: 10px 0;
cursor: pointer;
}
.my-contextmenu ul li {
padding: 4px 10px;
font-size: 14px;
color: #333;
}
</style>
