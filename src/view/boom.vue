<template>
  <div class="wrapper">
    <button @click="test" class="button">addWall</button>
    <wall-logo/>
    <transition-group name="list" tag="ul">
      <wall-item
        v-for="wall in walls" :wall='wall' v-bind:key="wall.id">
      </wall-item>
    </transition-group>
    <wall-rocket
      v-for="rocket in rockets" :rocket="rocket"/>
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
      return {}
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
        redoAddWall: REDO_ADD_WALL
      }),
      test(){
        this.addWalls({
          content: Date.now(),
          id: Date.now(),
          nickname: 'Qoder',
          userId: 1
        })
      },
      reAdd(){
        this.redoAddWall()
      }
    },
    created(){
      const vm = this;
      vm.io = io.connect('http://127.0.0.1:9001')
    },
    mounted(){
      const vm = this;
      vm.io.on('pulMess', (data)=> {
        vm.addWalls(data)
      })
      vm.io.on('PULADMINWALLTOWALL', ({content})=> {
        vm.addRockets({content})
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
