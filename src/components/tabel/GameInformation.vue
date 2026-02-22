<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

</script>

<template>
    <div class="game-informations font-size-small">
            <span>Runde: {{gameStore.games[gameStore.activeGameIndex].rounds}}</span>
            <span>Geber: {{gameStore.games[gameStore.activeGameIndex].dealer}}</span>
            <span>Doppelte: {{gameStore.games[gameStore.activeGameIndex].doubleRounds}}</span>       
    </div>
    
</template>

<style scoped>

    .game-informations{
        margin:20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        /*box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);*/
        display:flex;
        align-items: center;
        justify-content: space-around;
    }   

</style>