<script setup>
import NumPad from './NumPad.vue';
import PlayerButton from './PlayerButton.vue';
import PlayValue from './GameValue.vue';
import DoubleRoundsButton from './DoubleRoundsButton.vue';
import AddDoublePopUp from './AddDoublePopUp.vue';
import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();


</script>

<template>
    <DoubleRoundsButton />
    <PlayValue />
    <NumPad />
    <PlayerButton />
    <div v-if="gameStore.addDoubleActive">
    <AddDoublePopUp class="update-player-cards"/>
    </div>
</template>

<style scoped>
    
</style>