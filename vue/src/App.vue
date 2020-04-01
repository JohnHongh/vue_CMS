<template>
  <div id="app">
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
@import "../static/css/main.css";
@import "../static/css/color-dark.css";     /*深色主题*/
/*@import "../static/css/theme-green/color-green.css";   浅绿色主题*/
</style>
