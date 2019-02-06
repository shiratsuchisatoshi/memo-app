<template>
 <nav class="hamburger-nav">
  <input type="checkbox" id="nav-toggle" class="nav-toggle-selecter">
  <ul class="nav-list">
    <span class="close2" :index="index" @click="minus">
      X
    </span>
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>D</li>
    <li>E</li>
  </ul>
  <label for="nav-toggle" class="nav-toggle-button"><i class="fas fa-align-justify icon"></i></label>
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

<style>
.icon {
   font-size: 30px;
   color: rgb(63, 59, 59);
   top: 10px;
   right:5px;
}
.close2{
  position: absolute;
  color:white;
  top: 5px;
  right:20px;
  font-size: 25px;
  cursor: pointer;
}
</style>

<style lang="scss">
.hamburger-nav {
  // margin-top: 1.5em;
  // width: 30px;
  // text-align: right;
    position: fixed;
    width: 50px;
    height:50px;
    top: 0px;
    right:5px;
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
    // // font-family: 'FontAwesome';
    // content: '\f0c9';
    position: fixed;
    width: 50px;
    height:50px;
    top: 10px;
    right:5px;
    // background: url('../assets/1.jpg');
    color: rgba(33, 39, 98, 0.5);
    // background: grey;
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
        // position: relative;
        // height:500px;
        // width:500px;
        position: fixed;
        width: 50px;
        height:50px;
        top: 5px;
        right:5px;
        z-index: 2;
        // color: white;
        // background: white;
        // color: rgba(white, 1);
        // // content: '\f00d';
        content: '\f0c9';
      }
    }
  }
}
</style>
