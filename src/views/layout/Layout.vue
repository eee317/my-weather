<script setup>
import MyToolbar from '@/components/MyToolbar.vue';
import Footer from '@/components/Footer.vue'
</script>
<template>
    <div class="flex flex-col min-h-screen">
        <MyToolbar></MyToolbar>
        <RouterView class="grow" />
        <Footer></Footer>
    </div>
</template>