<template>
  <div class="rocket-wrapper"
       @mouseover="pauseRocket(rocket)"
       @mouseout="restartRocket(rocket)"
       v-bind:style="{transform:'rotate(90deg) translate3D(0,'+-rocket.distance+'px,0)'}"
      >
    <div class="content">
      {{rocket.content}}
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .rocket-wrapper {
    cursor: pointer;
    height: 200px;
    width: 200px;
    position: absolute;
    top: 20px;
    left: -100px;
    border-radius: 200px;
    background: url("../assets/rocket.gif") no-repeat center;
    background-size: 100%;
    /*transition: all 5s;*/
    /*transform: rotate(90deg);*/
    /*animation: rocketAnimation 5s ease-in-out;*/
    /*animation-fill-mode: forwards;*/
    /*-webkit-animation-fill-mode:forwards;*/
  }

  .content {
    width: 800px;
    height: 200px;
    position: absolute;
    top: 515px;
    left: -300px;
    font-weight: 600;
    background: #222;
    display: flex;
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    color: chocolate;
    padding: 10px;
    text-align: center;
    font-size: 50px;
    opacity: 0.7;
    transform: rotate(270deg);
  }

  @keyframes rocketAnimation {
    from {
      transform: rotate(90deg) translate3D(0, 0, 0);
    }
    to {
      transform: translate3D(2000px, 0, 0) rotate(90deg);
    }
  }
</style>
<script>
  import {mapMutations} from 'vuex'
  import {HOVER_ROCKET,LEAVE_ROCKET} from '../vuex/modules/rockets/mutation-type'
  export default{
    data(){
      return {}
    },
    methods: {
      ...mapMutations({
        pauseRocket: HOVER_ROCKET,
        restartRocket:LEAVE_ROCKET
      })
    },
    props: {
      rocket: {
        type: Object,
        required: true
      }
    }
  }
</script>
