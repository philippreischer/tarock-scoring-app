<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    
</script>

<template>
    <div class="game-value-area">
            <span class="counter">0</span>
            <span class="okay-button">&#10003;</span>       
    </div>
    
</template>

<style scoped>
    .game-value-area{
        margin:20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        border: solid 1px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .counter{
        margin: 0 15px;
        list-style: none;
    }

    .okay-button{
        margin: 0 15px;
        list-style: none;
        cursor: pointer;
    }

</style>