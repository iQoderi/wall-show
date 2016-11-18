<template>
  <div class="wrapper">
    <div>
      <button @click="addWall">add</button>
      <wall-logo />
      <ul>
        <wall-item v-for="wall in walls" :wall='wall'></wall-item>
      </ul>
    </div>
  </div>

  </div>
</template>
<script>
  import WallLogo from '../components/logo.vue'
  import WallItem from '../components/wallItem.vue'
  export default{
    data(){
      return {
        walls:[{content:'我是墙啊'},{content:'我是墙啊'},{content:'我是墙啊'},{content:'我是墙啊'}]
      }
    },
    methods:{
      addWall(){
        const vm=this;
        vm.walls.unshift({content:"我是新添加的内容"})
      }
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
  li {
    list-style: none;
  }
  .wrapper {
    width: 100%;
    height: 880px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .wrapper {
    padding: 40px 3% 0 3%;
  }
</style>
