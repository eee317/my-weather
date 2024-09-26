<script setup>
import { onMounted, ref } from 'vue';
import WatherAPI from '@/api/wather';
//import HelloWord from '@/components/HelloWorld.vue';

const getEvent = async () => {
    await WatherAPI.getAll()
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
           console.log(err)
        })
        .finally(() => {
            
        });
};
onMounted(() => {
    getEvent();
});
</script>
<template>
    
    <p>7789</p>
</template>