<template>
  <div id="app">
   <my-header :lista="lista"></my-header>
   <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from 'base/hearder'
export default {
  name: 'App',
  data() {
    return{
      lista:["首页","服务","关于我们","联系我们"],
    }
  },
  components:{
    MyHeader
  }
}
</script>

<style>

</style>
