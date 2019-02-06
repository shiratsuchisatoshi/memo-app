<template>
  <form class="inputZone">
    <input type="text" id="input" value="1" autocomplete="off"  @keyup.enter="$emit('plus')" >
    <div
    id="btn"
     @click="$emit('plus')"
    >
     作成
    </div>
  </form>
</template>

<script>
export default {

}

</script>

<style>

.inputZone {
    width: 50%;
    display:flex;
}

#input {
  position: fixed;
  width: 80px;
  height:50px;
  top: 600px;
  right:80px;
  font-size: 20px;
  text-align: center;
}

#btn {
  background-color: lightslategray;
  position: fixed;
  top: 600px;
  right: 26px;
  line-height:33px;
  padding: 8px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

</style>
