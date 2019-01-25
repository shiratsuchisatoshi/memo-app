<template>
  <div class="plusbtn" @click="$emit('plus')">
    +
  </div>
</template>

<style>
/* .plusbtn {
   position: absolute;
   bottom: 10px;
   right: 10px;
   width: 50px;
   height: 50px;
   background: white;
   border-radius: 50px;
   font-size: 30px;
   cursor: pointer;
} */
.plusbtn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: white;
  border-radius: 50px;
  font-size: 30px;
  text-decoration: none;
  font-weight: bold;
  padding: 10px 20px;
  border-bottom: 4px solid white;
  cursor: pointer;
}

.plusbtn:active {
    transform: translateY(4px);
    border-bottom: none;
}
</style>
