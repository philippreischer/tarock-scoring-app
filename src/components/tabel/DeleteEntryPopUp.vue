<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    import { ref } from 'vue'

    const rounds = ref() 
   
</script>

<template>
    <div class="delite-entry-card">
        <h2 class="font-size-big">Letzten Eintrag löschen?</h2>
        <div class="button-card">
            <span class="yes-button" @click="gameStore.deleteLastEntry()">Ja</span>
            <span class="no-button" @click="gameStore.openDeleteEntryPopUp()">Nein</span>     
        </div>      
    </div>
    
</template>

<style scoped>
    .delite-entry-card{
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

    .button-card{
       margin: 20px 0 0 0;
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

</style>