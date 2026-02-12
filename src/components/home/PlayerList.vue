<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    console.log(games[1].players);
</script>

<template>
    <div class="game-card" v-for="player in games[1].players" :key="player.id">
        <!-- <div>{{players.points}}</div> -->
        <ul >
            <li class="card-players" >
            <span class="grid-players">{{player.name}}</span>
            </li>
        </ul>          
    </div>
    
</template>

<style scoped>
    .game-card{
        margin:20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display:flex;
        align-items: center;
    }
    
    .card-players{
        margin: 0 15px;
        list-style: none;
    }

</style>