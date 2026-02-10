<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    console.log(games);
</script>

<template>
    <h1>NewButton</h1>
    
</template>

<style scoped>

</style>