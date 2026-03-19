<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    import ChangePlayerPopUp from './ChangePlayerPopUp.vue';
    import NewPlayerPopUp from './NewPlayerPopUp.vue';
    import DeleteGameButton from './DeleteGameButton.vue';
    import DeleteGamePopUp from './DeleteGamePopUp.vue';
    const gameStore = useGameStore();
    
</script>

<template>
    <DeleteGameButton />
    <h1 v-if="gameStore.games[gameStore.activeGameIndex].players.length === 0" class="font-size-large default-text">
        <span>Trag zuerst</span>
        <span>die Vorhand ein</span>
    
    </h1>
    
    <div class="players-card" 
    v-for="(player, index) in gameStore.games[gameStore.activeGameIndex].players" 
    :key="player.id"
    @click="gameStore.changePlayerOpen(index)"
    >
        <ul >
            <li class="card-players" >
            <span class="grid-players">{{player.name}}</span>
            </li>
        </ul>
        <!--<div 
        type="button" 
        class="font-size-big" 
        @click="gameStore.changePlayerOpen(index)">
            &#x2630;
        </div> -->         
    </div>
    <div v-if="gameStore.changePlayerActive && gameStore.pupUp === 'ChangePlayerPopUp'" class="update-player-cards">
        <ChangePlayerPopUp />
    </div>
    <div v-else-if="gameStore.newPlayerActive && gameStore.pupUp === 'NewPlayerPopUp'" class="update-player-cards">
        <NewPlayerPopUp />
    </div>
    <div v-else-if="gameStore.deleteGameActive && gameStore.pupUp === 'DeleteGamePopUp'" class="update-player-cards">
        <DeleteGamePopUp />
    </div>

</template>

<style scoped>
    .default-text {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .players-card {
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

    .players-card:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    
    .card-players {
        margin: 0 15px;
        list-style: none;
        display:flex;
    }

</style>