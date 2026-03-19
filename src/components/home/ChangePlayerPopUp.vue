<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    console.log(gameStore.games[gameStore.activeGameIndex].players[gameStore.activePlayerIndex])
</script>

<template>
    <div class="delite-player-card">
        <h2 class="font-size-big">Name ändern?</h2>
            <input 
            v-model="gameStore.games[gameStore.activeGameIndex].players[gameStore.activePlayerIndex].name" 
            type="text" 
            class="text-area" 
            placeholder="">
            <span class="save-button" @click="gameStore.closePopUp()">Speichern</span>    
        <h2 class="font-size-big">Spieler löschen?</h2>
        <div class="button-area">
            <span class="yes-button" @click="gameStore.removePlayer (gameStore.activePlayerIndex)">Ja</span>
            <span class="no-button" @click="gameStore.closePopUp()">Nein</span>     
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
    .save-button{
        margin: 5px 0 10px 0;
        cursor: pointer;
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