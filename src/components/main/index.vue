<template>
    <div id="home-main">
        <vtable></vtable>
    </div>
</template>
<script>
    export default{
        name:"home-main",
        components:{
            vtable:()=>import('@/views/table')
        }
    }
</script>
<style>
</style>