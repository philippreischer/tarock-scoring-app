<script setup>
import DeleteEntryButton from './DeleteEntryButton.vue';
import DeleteEntryPopUp from './DeleteEntryPopUp.vue';
import GameInformation from './GameInformation.vue';
import TableList from './TabelList.vue';
import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();


</script>

<template>
    <DeleteEntryButton />
    <GameInformation />
    <TableList />
    <div v-if="gameStore.deleteGamePopUpActive">
        <DeleteEntryPopUp class="update-player-cards"/>
    </div>

</template>

<style scoped>

</style>