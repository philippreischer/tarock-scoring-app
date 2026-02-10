<script setup>
import { ref } from 'vue'
import NewButton from './NewButton.vue';
import NewGame from './NewGame.vue';
import NewPlayer from './NewPlayer.vue';

const newPlayerActiv = ref(false);
    
</script>

<template>
    <NewGame v-if="!newPlayerActiv"></NewGame>
    <NewPlayer v-else-if="newPlayerActiv"></NewPlayer>
    <NewButton></NewButton>
</template>

<style scoped>

</style>