<template>
  <li @dblclick="redoAddWall(wall)">
    <div class="avatar-show">
      <img src="../assets/avatar.jpg" class="avatar">
      <div class="name-show">{{wall.nickname}}</div>
    </div>
    <div class="text-show" v-bind:style="{fontSize:wall.fontSize}">
      {{wall.content}}
    </div>
  </li>
</template>
<style lang="scss" scoped>
  .avatar-show {
    position: relative;
    float: left;
    width: 16%;
  }

  .avatar {
    width: 200px;
    height: 200px;
  }

  .name-show {
    width: 200px;
    height: 60px;
    line-height: 60px;
    background: rgba(0, 0, 0, .6);
    color: #fff;
    text-align: center;
    font-size: 30px;
    position: absolute;
    bottom: 2px;
    left: 0;
  }

  .text-show {
    float: left;
    width: 78%;
    height: 200px;
    word-break: break-all;
    word-wrap: break-word;
    line-height: 1.4;
    background: #fff;
    padding: 0 1%;
    position: relative;
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }

  @media all and (max-width: 1600px) {
    .text-show {
      margin-left: 5%;
      width: 75%;
    }
  }

  .text-show:before {
    content: "";
    border-right: 30px solid #fff;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    position: absolute;
    top: 75px;
    left: -30px;
  }

  li {
    overflow: hidden;
    margin-bottom: 20px;
  }
</style>
<script>
  import {mapActions} from 'vuex'
  import {REDO_ADD_WALL} from '../vuex/modules/walls/mutation-type'
  export default{
    data(){
      return {}
    },
    methods: {
      ...mapActions({
        redoAddWall:'redoAddWall'
      })
    },
    props: {
      wall: {
        required: true,
        type: Object
      }
    }
  }
</script>
