<template>
  <div>
    <div class="rocket-wrapper"
         v-for="rocket in rockets"
         track-by="$index"
         @dblclick="closeRocket(rocket)"
         @mouseover="pauseRocket(rocket)"
         @mouseout="restartRocket(rocket)"
         v-bind:style="{transform:'translate3D('+rocket.distance+'px,0,0)'}"
    >
      <div class="header"></div>
      <div class="content">
        {{rocket.content}}
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .rocket-wrapper {
    cursor: pointer;
    position: absolute;
    top: 20px;
    left: 1000px;
  }
  .header{
    height: 200px;
    width: 200px;
    transform: rotate(90deg);
    border-radius: 200px;
    background: url("../assets/rocket.gif") no-repeat center;
    background-size: 100%;
  }
  .content {
    width: 800px;
    height: 200px;
    position: absolute;
    top: 0;
    left: -820px;
    font-weight: 600;
    background: #222;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;
    color: chocolate;
    padding: 10px;
    text-align: center;
    font-size: 80px;
    opacity: 0.7;
  }

</style>
<script>
  import {mapMutations} from 'vuex'
  import {HOVER_ROCKET, LEAVE_ROCKET, CLOSE_ROCKET} from '../vuex/modules/rockets/mutation-type'
  export default{
    data(){
      return {}
    },
    methods: {
      ...mapMutations({
        pauseRocket: HOVER_ROCKET,
        restartRocket: LEAVE_ROCKET,
        closeRocket: CLOSE_ROCKET
      })
    },
    props: {
      rockets: {
        type: Array,
        required: true
      }
    }
  }
</script>
