<template>
  <div class="wrapper">
    <wall-logo/>
    <transition-group name="list" tag="ul">
      <wall-item
        v-for="wall in walls" :wall='wall' v-bind:key="wall.id">
      </wall-item>
    </transition-group>
    <wall-rocket :rockets="rockets"/>
  </div>
</template>
<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  import WallLogo from '../components/logo.vue'
  import WallItem from '../components/wallItem.vue'
  import WallRocket from '../components/rocket.vue'
  import {ADD_ROCKETS, ADD_ROCKET_DISTANCE} from '../vuex/modules/rockets/mutation-type'
  import {ADD_WALL, REDO_ADD_WALL} from '../vuex/modules/walls/mutation-type'
  import io from 'socket.io-client'
  export default{
    data(){
      return {
        startRocket: 0
      }
    },
    computed: {
      ...mapGetters({'rockets': 'rockets', 'walls': 'walls'})
    },
    methods: {
      ...mapMutations({
        addRockets: ADD_ROCKETS,
        addWalls: ADD_WALL,
        addRocketDis: ADD_ROCKET_DISTANCE,
      }),
      ...mapActions({
        redoAddWall: 'redoAddWall'
      })
    },
    created(){
      const vm = this;
      vm.io = io.connect(__APIHOST__)
    },
    mounted(){
      const vm = this;
      vm.io.on('pulMess', (data)=> {
        vm.addWalls(data)
      })
      vm.io.on('PULADMINWALLTOWALL', (data)=> {
        let copyData = data
        copyData.speed = 1
        copyData.distance = 0
        copyData.isHover = 0
        vm.addRockets(copyData)
        if (vm.startRocket === 0) {
          vm.startRocket=1
          setInterval(()=> {
            vm.addRocketDis()
          }, 6)
        }
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

  .button {
    position: absolute;
    top: 500px;
    height: 100px;
    width: 100px;
    left: 200px;
  }

  .button2 {
    position: absolute;
    top: 600px;
    height: 100px;
    width: 100px;
    left: 200px;
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
