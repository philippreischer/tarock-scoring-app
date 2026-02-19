<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    import DeleteGame from './DeleteGamePopUp.vue';
    const gameStore = useGameStore();

</script>

<template>
    <div class="game-card font-size-small" 
        v-for="(game, index) in gameStore.games" 
        :key="game.id" 
        @click="gameStore.changeHomeList(true, index)"
        >
        <div class="grid-date">
            {{ game.date }}
        </div> 
        <ul >
            <li class="card-players" 
            v-for="player in gameStore.games[index].players" 
            :key="player.id">
                <span class="grid-players">{{player.name}}</span>
                <span class="grid-points">{{player.points[game.rounds -1]}}</span>
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

</style>