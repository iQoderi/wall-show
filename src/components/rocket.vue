<template>
  <div class="rocket-wrapper">
    <div class="content">
      {{word}}
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .rocket-wrapper {
    height: 300px;
    width: 200px;
    position: absolute;
    top: 20px;
    left: 200px;
    background: url("../assets/huojian.png") no-repeat center;
    background-size: 100%;
    /*animation: rocketAnimation 5s ease-in-out;*/
    animation-fill-mode: forwards;
    -webkit-animation-fill-mode:forwards;
  }
  .content {
    width: 150px;
    height: 200px;
    position: absolute;
    top: 255px;
    left: 15px;
    font-size: 20px;
    font-weight: 600;
    background: #f2f2f2;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    color: chocolate;
    padding: 10px;
    box-shadow: 0 0 20px #FFFF00;
    text-align: center;
  }

  @keyframes rocketAnimation {
    from {
      transform:rotate(90deg) translate3D(0, 0, 0) ;
    }
    to {
      transform:translate3D(2000px, 0, 0) rotate(90deg);
    }
  }
</style>
<script>
  export default{
    data(){
      return {}
    },
    props: {
      word: {
        type: String,
        required: true
      }
    }
  }
</script>
