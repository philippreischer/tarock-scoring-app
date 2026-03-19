<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    
</script>

<template>
    <div class="container" >
        <div
        type="button" 
        class="button font-size-medium" 
        @click="gameStore.deleteGameOpen()">
            Spiel löschen
        </div>          
    </div>

</template>

<style scoped>

    .container {
        display: flex; 
        flex-direction: row-reverse;      
        
    }
    .button {
        width: 160px;
        margin:0 20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        border: solid 1px black;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display:flex;
        align-items: center;
        justify-content: center;
        
    }
    .button:hover {
        color: #ff0000;
    }

    .button:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    
    
    .card-players {
        margin: 0 15px;
        list-style: none;
        display:flex;
    }

   

</style>