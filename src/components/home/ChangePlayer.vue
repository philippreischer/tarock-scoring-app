<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;

    defineProps({
        deleteGameActive: Boolean
        })
    const emit = defineEmits(['deletePlayerActive'])
    
</script>

<template>
    <div class="delite-player-card">
        <h2 class="font-size-big">Name ändern?</h2>
            <input type="text" class="text-area">    
        <h2 class="font-size-big">Spieler löschen?</h2>
        <div class="button-area">
            <span class="yes-button">Ja</span>
            <span class="no-button" @click="emit('deletePlayerActive')">Nein</span>     
        </div>      
    </div>
    
</template>

<style scoped>
    .delite-player-card{
        margin:20px;
        padding: 20px 30px;
        max-width: 300px;
        background: #ffffff;
        border-radius: 10px;  
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.28);
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    .button-area{
       margin: 10px 0 0 0;
    }
    
    .yes-button{
        margin: 0 40px;
        list-style: none;
        cursor: pointer;
    }

    .no-button{
        margin: 0 40px;
        list-style: none;
        cursor: pointer;
    }

    .text-area{
        margin: 10px 0 10px 0;
        padding: 10px;
        background: #ffffff;
        border-radius: 10px;
        border: solid 1px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display:flex;
        align-items: center;
        justify-content: space-between;
    }

</style>