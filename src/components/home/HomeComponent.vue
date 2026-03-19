<script setup>
    import { ref, onMounted } from "vue"
    import NewButton from './NewButton.vue';
    import GameList from './GameList.vue';
    import PlayerList from './PlayerList.vue';
    import  { useGameStore } from '@/stores/gameStore.js';
    
    const gameStore = useGameStore();
    const isReady = ref(false);

    onMounted(() => {
        setTimeout(() => {
        isReady.value = true
        }, 50)
    })   

</script>

<template>
    <div v-if="isReady">
    <GameList v-if="!gameStore.newGameActiv"></GameList>
    <PlayerList v-else-if="gameStore.newGameActiv"></PlayerList>
    </div>
    <div v-else>
        Lade...
    </div>
    <NewButton />
</template>

<style scoped>
   
</style>