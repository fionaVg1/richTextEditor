<template>
    <div class="editArea" contenteditable="true" @keydown="($event)">
        <Document :document="{document}"></Document>
    </div>
</template>
<script>
import Document from './Document'
import { getDocument } from '@/utils/db'
export default {
    name:'EditArea',
    data(){
        return {
            document:{}
        }
    },
    mounted(){
        this.document = getDocument();
    }
}
</script>
<style scoped lang="less">

</style>