<script setup>
    import { ref } from 'vue'
    import  { useGameStore } from '@/stores/gameStore.js';
    import ChangePlayer from './ChangePlayer.vue';
    import NewPlayer from './NewPlayer.vue';
    const gameStore = useGameStore();
    

  /*  const deletePlayer = (index) => { 
        gameStore.deletePlayerActive = true; 
        console.log("index: " + index)
        gameStore.activePlayerIndex = index;
        console.log("index P: " + gameStore.activePlayerIndex)
    };
  */
</script>

<template>
    <div class="players-card" v-for="(player, index) in gameStore.games[gameStore.activeGameIndex].players" :key="player.id">
        <ul >
            <li class="card-players" >
            <span class="grid-players">{{player.name}}</span>
            </li>
        </ul>
        <div type="button" class="font-size-big" @click="gameStore.changePlayerOpen(index)">&#x2630;</div>          
    </div>
    <div v-if="gameStore.changePlayerActive" class="update-player-cards">
        <ChangePlayer />
    </div>
    <div v-else-if="gameStore.newPlayerActive" class="update-player-cards">
        <NewPlayer />
    </div>
</template>

<style scoped>
    .players-card{
        margin:20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .card-players{
        margin: 0 15px;
        list-style: none;
        display:flex;
    }

    .update-player-cards{
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        position:absolute;
        top: 35vh;
        left:50px;
    }

</style>