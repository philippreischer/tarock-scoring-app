<script setup>
import { ref } from 'vue'
import NewButton from './NewButton.vue';
import NewGame from './GameList.vue';
import NewPlayer from './PlayerList.vue';

const newPlayerActiv = ref(false);
    
</script>

<template>
    <NewGame v-if="!newPlayerActiv"></NewGame>
    <NewPlayer v-else-if="newPlayerActiv"></NewPlayer>
    <NewButton></NewButton>
</template>

<style scoped>

</style>