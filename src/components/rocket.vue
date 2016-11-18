<template>
    <div class="rocket-wrapper" v-if="show">
      <div class="content">
        {{adminSay}}
      </div>
    </div>
</template>
<style lang="scss" scoped>
  .rocket-wrapper{
    height: 300px;
    width: 200px;
    transform: rotate(45deg);
    position: absolute;
    bottom: 50px;
    left: 100px;
    background: url("../assets/huojian.png") no-repeat center;
    background-size: 100%;
    animation: rocketAnimation 8s ease-in;
    .content{
      width: 150px;
      height: 200px;
      position: absolute;
      top: 255px;
      left: 15px;
      font-size: 16px;
      background: #f2f2f2;
      border-radius: 5px;
      box-sizing: border-box;
      overflow: hidden;
      color: chocolate;
      padding: 10px;
      box-shadow: 0 0 20px #FFFF00;
      text-align: center;
    }
  }

  @keyframes rocketAnimation {
    from{
      transform:translate3D(0,0,0)  rotate(60deg);
    }to{
      transform:translate3D(2000px,-800px,0);
         }
  }
</style>
<script>
    export default{
        data(){
            return{
            }
        },
      props:{
          show:{
            type:Boolean,
            required:true
          },
        adminSay:{
            type:String,
          required:true
        }
      }
    }
</script>
