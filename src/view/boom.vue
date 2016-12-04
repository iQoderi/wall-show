<template>
  <div class="wrapper">
    <button @click="addRockets({content:1})">rocket</button>
    <wall-logo/>
    <transition-group name="list" tag="ul">
      <wall-item v-for="wall in walls" :wall='wall' v-bind:key="wall._id"></wall-item>
    </transition-group>
    <wall-rocket  v-for="word in rockets" :word="word"/>
  </div>
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex'
  import WallLogo from '../components/logo.vue'
  import WallItem from '../components/wallItem.vue'
  import WallRocket from '../components/rocket.vue'
  import {ADD_ROCKETS} from '../vuex/modules/rockets/mutation-type'
  import io from 'socket.io-client'
  export default{
    data(){
      return {
        walls: [],
        historyWalls: [],
        rocketShow: false,
        timer: null,
        adminSay: ['dawda'],
      }
    },
    computed:{
      ...mapGetters({'rockets':'rockets'})
    },
    methods: {
      ...mapMutations({addRockets:ADD_ROCKETS}),
      showRocket(){
        const vm = this
        vm.adminSay.push('dwadawdaed')
      },
    },
    created(){
      const vm = this;
      vm.io = io.connect('http://127.0.0.1:9001')
    },
    mounted(){
      const vm = this;
      vm.io.on('pulMess', ({content, id})=> {
        vm.walls.unshift({content, _id: id})
        if (vm.walls.length > 3) {
          Array.prototype.push.apply(vm.historyWalls, vm.walls.slice(3));
          vm.walls.length = 3
        }
      })
      vm.io.on('PULADMINWALLTOWALL', ({content})=> {
        vm.addRocket({content})
      })
    },
    components: {
      WallLogo, WallItem, WallRocket
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
