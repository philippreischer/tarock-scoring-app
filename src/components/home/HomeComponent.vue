<script setup>
import NewButton from './NewButton.vue';
import GameList from './GameList.vue';
import PlayerList from './PlayerList.vue';
import  { useGameStore } from '@/stores/gameStore.js';
const gameStore = useGameStore();
    

</script>

<template>
    <div>
    <GameList v-if="!gameStore.newGameActiv"></GameList>
    <PlayerList v-else-if="gameStore.newGameActiv"></PlayerList>
    </div>
    <NewButton />
</template>

<style scoped>
   
</style>