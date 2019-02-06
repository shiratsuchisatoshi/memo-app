<template>
 <nav class="hamburger-nav" style="width:400px; height:400px;">
  <input type="checkbox" id="nav-toggle" class="nav-toggle-selecter">
  <ul class="nav-list">
    <li @click="colorchange">color.change</li>
    <li @click="removeMemo">localStorage.clear</li>
    <li @click="seitretu">C</li>
    <li>D</li>
    <li>E</li>
  </ul>
  <label for="nav-toggle" class="nav-toggle-button" style="width:400px; height:400px;"></label>
</nav><!-- /.hamburger-nav -->
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
    seitretu() {
      const val = document.getElementsByClassName('memo')
      console.log(val)
      const widthCount = Math.floor(window.innerWidth / 250)

      for (let i = 0; i < val.length; i++) {
        // const memoData = {
        //   ...this.$store.getters.memoData(i)
        // }
        this.$store.commit('seiretu', {
          toppo: val[i].style.top = Math.floor(this.$store.state.memoList.length / widthCount) * 350 + 'px',
          left: val[i].style.left = (this.$store.state.memoList.length % widthCount) * 250
        })
      }
    }
  }
}
</script>

<style lang="scss">
.hamburger-nav {
  margin-top: 1.5em;
  width: 30px;
  text-align: right;
}

.nav-list {
  display: none;
  position: absolute;
  top: 0;
  right: -20px;
  z-index: 1;
  width: 240px;
  height: 100vh;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 60px 0 30px;
  background: rgba(black, .95);
  text-align: left;
  > li {
      cursor: pointer;
      display: block;
      padding: 10px 1em;
      text-decoration: none;
      color: rgba(white, 1);
  }
}

.nav-toggle-button {
  cursor: pointer;
  &::before {
    font-family: 'FontAwesome';
    content: '\f0c9';
    // width:100px;
    // height:100px;
  }
}

.nav-toggle-selecter {
  display: none;
  &:checked {
    + .nav-list {
      display: block;
      animation: showAni .5s ease 0s 1 normal;
      @keyframes showAni {
        0% { right: -240px; }
        100% { right: -20px; }
      }
      + .nav-toggle-button::before {
        position: relative;
        height:500px;
        width:500px;
        z-index: 2;
        color: rgba(white, 1);
        content: '\f00d';
      }
    }
  }
}
</style>
