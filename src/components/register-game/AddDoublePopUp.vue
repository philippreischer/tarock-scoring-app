<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    import { ref } from 'vue'

    const rounds = ref();
    const newRounds = ref();
   
</script>

<template>
    <div class="delite-player-card">
        <h2 class="font-size-big">Doppelte Runden aktuell</h2>
        <div class="rounds-number">{{ gameStore.games[gameStore.activeGameIndex].doubleRounds }}</div>
        <h2 class="font-size-big">Runden hinzufügen</h2>
            <input
            v-model="rounds" 
            type="text" 
            class="text-area" 
            placeholder="">
        <div class="button-area">
            <span class="yes-button" @click="gameStore.addDoubleRounds(rounds)">Ja</span>
            <span class="no-button" @click="gameStore.openAddDoublePopUp()">Nein</span>     
        </div> 
        <h2 class="font-size-big">Runden ändern</h2>
            <input
            v-model="newRounds" 
            type="text" 
            class="text-area" 
            placeholder="">
        <div class="button-area">
            <span class="yes-button" @click="gameStore.updateDoubleRounds(newRounds)">Ja</span>
            <span class="no-button" @click="gameStore.openAddDoublePopUp()">Nein</span>     
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
       margin: 10px 0 10px 0;
    }

    .rounds-number{
       margin: 10px;
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
        margin:  10px 0 10px 0;
        padding: 10px;
        max-width: 50px;
        background: #ffffff;
        border-radius: 10px;
        border: solid 1px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display:flex;
        align-items: center;
        justify-content: center;
        align-self: center;
    }

</style>