<script setup>
    import { ref } from 'vue'
    import  { useGameStore } from '@/stores/gameStore.js';
    import DeleteGame from './DeleteGame.vue';
    const gameStore = useGameStore();
    const games = gameStore.games;

    let deleteGameActive = ref(false);
    const deleteGame = (index) => { deleteGameActive.value = true; console.log("index: " + index)}; 

</script>

<template>
    <div class="game-card font-size-small" v-for="(game, index) in games" :key="game.id">
        <!-- <div>{{players.points}}</div> -->
         <div class="grid-date">{{ game.date }}</div> 
        <ul >
            <li class="card-players" v-for="player in games[game.id -1].players" :key="player.id">
            <span class="grid-players">{{player.name}}</span>
            <span class="grid-points">{{player.points[game.rounds -1]}}</span>
            </li>
        </ul>
            <div type="button" class="grid-icon font-size-big" @click="deleteGame(index)">&#x2630;</div>           
    </div>
    <div v-if="deleteGameActive" class="delete-game-card">
        <DeleteGame :deleteGameActive="deleteGameActive" @deleteGameActive="deleteGameActive = false"/>
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
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin: 0 15px;
        padding: 1px;
        
    }

    .grid-date{
        grid-column: span 1;
        text-align: left;
    }

    .grid-players{
        grid-column: span 2;
        text-align: left;
    }
    .grid-points{
        grid-column: span 2;
        text-align: right;
    }

    .grid-icon{
        grid-column: span 1;
        text-align: right;
        color: #3d3d3d;
    }

    .grid-icon:hover{
        grid-column: span 1;
        text-align: right;
        color: black;
    }

    .delete-game-card{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        height: 0vh;
    }

</style>