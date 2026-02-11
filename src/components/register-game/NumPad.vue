<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    console.log(games[0].players);
</script>

<template>
    <div class="num-grid">
            <div type="button" class="num">1</div>
            <div type="button" class="num">2</div>
            <div type="button" class="num">3</div>
            <div type="button" class="num">4</div>
            <div type="button" class="num">5</div>
            <div type="button" class="num">6</div>
            <div type="button" class="num">7</div>
            <div type="button" class="num">8</div>
            <div type="button" class="num">9</div>
            <div type="button" class=""></div>
            <div type="button" class="num">0</div>
            <div type="button" class="num">C</div>   
    </div>
    
</template>

<style scoped>
    .num-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    
    .num{
        margin:10px 20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }



</style>