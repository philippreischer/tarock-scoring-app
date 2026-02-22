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
    <div class="players-card" 
    v-for="(player, index) in gameStore.games[gameStore.activeGameIndex].players" 
    :key="player.id"
    >
        <ul >
            <li class="card-players" >
            <span class="grid-players">{{player.name}}</span>
            </li>
        </ul>
        <div 
        type="button" 
        class="font-size-big" 
        @click="gameStore.changePlayerOpen(index)">
            &#x2630;
        </div>          
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

</style>