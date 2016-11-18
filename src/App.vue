<template>
  <div id="app">
    <boom></boom>
  </div>
</template>
<script>
  import Boom from './view/boom.vue'
  import Draw from './view/draw.vue'
  export default {
    name: 'app',
    components: {
      Boom, Draw
    }
  }
</script>
<style lang="scss">
  html,body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  #app{
    width: 100%;
    height: 100%;
    background: url("./assets/Wall_back.png") no-repeat;
    background-size: 100% 100%;
    overflow: hidden;
  }
</style>
