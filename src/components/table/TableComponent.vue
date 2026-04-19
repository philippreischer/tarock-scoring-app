<script setup>
import { ref, onMounted, nextTick } from 'vue'
import DeleteEntryButton from './DeleteEntryButton.vue';
import DeleteEntryPopUp from './DeleteEntryPopUp.vue';
import GameInformation from './GameInformation.vue';
import TableList from './TableList.vue';
import  { useGameStore } from '@/stores/gameStore.js';

    const gameStore = useGameStore();
    const container = ref(null);

    onMounted(() => {
        nextTick(() => {
            if (container.value) container.value.scrollTop = container.value.scrollHeight
        })
    })
</script>

<template>
    <DeleteEntryButton />
    <GameInformation />
    <div class="table-scroll-container" ref="container">
        <TableList />
    </div>
    <div v-if="gameStore.deleteGamePopUpActive">
        <DeleteEntryPopUp class="update-player-cards"/>
    </div>
</template>

<style scoped>
    .table-scroll-container {
        height: 70vh;
        overflow-y: auto;
    }
</style>
