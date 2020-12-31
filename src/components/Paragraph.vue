<template>
   <div class="paragraph" id="{id}" style="{style}">
       <Segment v-for="item in paragraph.segments" v-key="item.id" :segment="item"></Segment>
   </div> 
</template>
<script>
import Segment from './Segment'
export default {
    name:'Paragraph',
    props:{
        paragraph:{},       
    }
}
</script>
<style scoped lang="less">

</style>