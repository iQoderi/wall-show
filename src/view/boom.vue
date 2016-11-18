<template>
  <div class="wrapper">
      <wall-logo />
      <transition-group name="list" tag="ul">
        <wall-item v-for="wall in walls" :wall='wall' v-bind:key="wall._id"></wall-item>
      </transition-group>
  </div>
</template>
<script>
  import WallLogo from '../components/logo.vue'
  import WallItem from '../components/wallItem.vue'
  import io from 'socket.io-client'
  export default{
    data(){
      return {
        walls:[],
        historyWalls:[],
      }
    },
    created(){
      const vm=this;
      vm.io=io.connect('http://127.0.0.1:9000')
    },
    mounted(){
      const vm=this;
      vm.io.on('pulMess',({data,_id})=>{
        vm.walls.unshift({content:data,_id});
        if(vm.walls.length>3){
          Array.prototype.push.apply(vm.historyWalls,vm.walls.slice(3));
          vm.walls.length=3;
          console.log(vm.historyWalls);
        }
      })
    },
    components:{
      WallLogo,WallItem
    }
  }
</script>
<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  .list-item {
    display: inline-block;
    margin-right: 10px;
  }
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-active {
    opacity: 0;
    transform: translateY(30px);
  }
  li {
    list-style: none;
  }
  .wrapper {
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  .wrapper {
    padding: 40px 3% 0 3%;
  }
</style>
