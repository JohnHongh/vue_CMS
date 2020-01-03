<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import {a,b} from '@/api/index'
export default {
  name: 'App',
  mounted() {
    a({a:1}).then((res)=>{
      console.log(res)
    });
     a({a:2}).then((res)=>{
      console.log(res)
    })
    setTimeout(()=>{
      b()
    },2000)
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
