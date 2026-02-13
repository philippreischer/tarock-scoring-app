<script setup>
import { ref } from 'vue'
import NewButton from './NewButton.vue';
import GameList from './GameList.vue';
import PlayerList from './PlayerList.vue';

const newPlayerActiv = ref(true);
    
</script>

<template>
    <div class="">
    <GameList v-if="!newPlayerActiv"></GameList>
    <PlayerList v-else-if="newPlayerActiv"></PlayerList>
    </div>
    <NewButton></NewButton>
    
</template>

<style scoped>
   
</style>