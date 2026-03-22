<script setup>
import NumPad from './NumPad.vue';
import PlayerButton from './PlayerButton.vue';
import PlayValue from './GameValue.vue';
import DoubleRoundsButton from './DoubleRoundsButton.vue';
import AddDoublePopUp from './AddDoublePopUp.vue';
import  { useGameStore } from '@/stores/gameStore.js';
import ErrorMessage from '../ErrorMessage.vue';
    const gameStore = useGameStore();


</script>

<template>
    <div v-if="gameStore.errorMessageActive">
    <ErrorMessage class="update-player-cards"/>
    </div>
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