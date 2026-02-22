<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

</script>

<template>
    <div class="game-informations font-size-small">
            <span>Runde: 22</span>
            <span>Geber: Peter</span>
            <span>Doppelte: {{gameStore.doubleRounds}}</span>       
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