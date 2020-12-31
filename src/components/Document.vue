<template>
   <div class="document">
       <Paragraph v-for="item in document.paragraphs" v-key="item.id" :paragraph="item"></Paragraph>
   </div> 
</template>
<script>
import Paragraph from './Paragraph'
export default {
    name:'Document',
    props:{
        document:{}
    },
    data(){
        return{            
        }
    },
    mounted(){    
    }
}
</script>
<style scoped lang="less">

</style>