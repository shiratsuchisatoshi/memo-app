<template>
  <div
    class="removebtn"
    @click="$emit('remove')"
  >
    <span>×</span>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.removebtn {
  position: fixed;
  top: 20px;
  right: 20px;
  border-radius: 50%;
  background:red;
  border: red 2px solid;
  width: 60px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  transition: 0.2s;
}

.removebtn:hover {
  transform: scale(1.1);
}

.removebtn > span {
  font-size: 50px;
  display: inline-block;
  margin-top: -10px;
}
</style>
