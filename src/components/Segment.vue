<template>
   <div class="segment">
       <span :id="segment.id" :style="segment.style">{segment.text}</span>
   </div> 
</template>
<script>
export default {
    name:'Segment',
    props:{
       segment:{}
    }  
}
</script>
<style scoped lang="less">

</style>