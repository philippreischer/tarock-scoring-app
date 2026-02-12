<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    console.log(games[0].players);
</script>

<template>
    <div class="game-card" v-for="game in games" :key="game.id">
        <!-- <div>{{players.points}}</div> -->
        <ul >
            <li class="card-players" v-for="player in games[game.id -1].players" :key="player.id">
            <span class="grid-players">{{player.name}}</span>
            <span class="grid-points">{{player.points[game.rounds -1]}}</span>
            </li>
        </ul>
            <div>{{ game.date }}</div>           
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
    }
    
    .card-players{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin: 0 15px;
        
    }
    .grid-players{
        grid-column: span 3;
        text-align: left;
    }
    .grid-points{
        grid-column: span 1;
        text-align: right;
    }

    .grid-points{
        grid-column: span 2;
        text-align: right;
    }


</style>