<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();  
</script>

<template>
    <div class="delite-game-card">
            <h2 class="font-size-big">Spiel löschen?</h2>
            <div class="button-area">
                <span class="yes-button" @click="gameStore.deleteGame(gameStore.activeGameIndex)">Ja</span>
                <span class="no-button" @click="gameStore.closePopUp()">Nein</span>     
            </div>       
    </div>
    
</template>

<style scoped>
    .delite-game-card{
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
       margin: 30px 0 0 0;
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