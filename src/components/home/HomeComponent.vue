<script setup>
    import { useRouter } from "vue-router"
    import { ref, onMounted } from "vue"
    import NewButton from './NewButton.vue';
    import GameList from './GameList.vue';
    import PlayerList from './PlayerList.vue';
    import  { useGameStore } from '@/stores/gameStore.js';
    
    const router = useRouter()
    const gameStore = useGameStore();
    //const isReady = ref(false);

    onMounted(() => {
        gameStore.changeHomeList(false, 0)
        //setTimeout(() => {
        //isReady.value = true
        //router.push("/tabelle")
        //console.log("Test R1")
        
        //}, 50)
        
    })   

</script>

<template>
    <!--<div v-if="isReady">-->
    <GameList v-if="!gameStore.newGameActiv"></GameList>
    <PlayerList v-else-if="gameStore.newGameActiv"></PlayerList>
    
    <!--</div>
        <div v-else>
        Lade...
    </div>-->
    <NewButton />
</template>

<style scoped>
   
</style>