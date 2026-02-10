<script setup>
import { ref } from 'vue'
import NewButton from '../home/NewButton.vue';
import NewGame from '../home/NewGame.vue';
import NewPlayer from '../home/NewPlayer.vue';

const newPlayerActiv = ref(false);
    
</script>

<template>
    <NewGame v-if="!newPlayerActiv"></NewGame>
    <NewPlayer v-else-if="newPlayerActiv"></NewPlayer>
    <NewButton></NewButton>
</template>

<style scoped>

</style>