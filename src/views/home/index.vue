<template>
  <div id="home">
    <navtop></navtop>
    <navleft></navleft>
  </div>
</template>

<script>
export default {
  name: 'home',
  components:{
    navtop:()=>import('@/components/navmenu/navtop'),
    navleft:()=>import('@/components/navmenu/navleft'),
  }
}
</script>

<style>
#home{
  width: 100%;
  height: 100%;
}
</style>