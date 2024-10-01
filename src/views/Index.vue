<script setup>
import { RouterLink } from 'vue-router';

    
    
</script>
<template>
    
    <RouterLink :to="{ name: 'WeatherTable'}">
        <Button label="查看更多天氣" text plain />
    </RouterLink>
    
</template>