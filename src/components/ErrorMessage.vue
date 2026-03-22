<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();  
</script>

<template>
    <div class="error-card">
            <h2 class="font-size-big">{{gameStore.errorMessage}}</h2>    
    </div>
    
</template>

<style scoped>
    .error-card{
        margin:20px;
        padding: 20px 30px;
        max-width: 300px;
        background: #ffffff;
        border-radius: 10px;  
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        color: red;
    }

</style>