<template>
  <div id="home">
    <navtop></navtop>
    <div class="main">
      <navleft></navleft>
      <homemain></homemain>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{

    }
  },
  components:{
    navtop:()=>import('@/components/navmenu/navtop'),
    navleft:()=>import('@/components/navmenu/navleft'),
    homemain:()=>import('@/components/main/index'),
  }
}
</script>
