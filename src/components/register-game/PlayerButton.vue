<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    console.log(games[0].players);
</script>

<template>
    <div class="player-grid">
        <div class="player-card" v-for="player in games[0].players" :key="player.id">
            <!-- <div>{{players.points}}</div> -->
            <span class="">{{player.name}}</span>
            <div class="card-status color-gray">
                <span>Win</span>
            </div>               
        </div>
    </div>
    
</template>

<style scoped>
    .player-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        margin: 10px 0 0 10px;
    }


    .player-card{
        margin: 10px 10px 20px 10px;
        padding: 15px;
        width: 170px;
        height: 80px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        
    }
    
    .card-status{
        width: 170px;
        padding: 10px 0;
        margin-top: 15px;
        border-radius: 0 0 10px 10px;
        display: flex;
        justify-content: center;
    }


</style>