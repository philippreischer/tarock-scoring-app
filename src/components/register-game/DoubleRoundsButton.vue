<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    
</script>

<template>
    <div class="container" >
        <div
        type="button" 
        class="button font-size-medium" 
        @click="gameStore.openAddDoublePopUp()">
            Doppelte Runden hinzufügen
        </div>          
    </div>

</template>

<style scoped>

    .container{
        display: flex; 
        flex-direction: row-reverse;      
        
    }
    .button{
        margin:0 20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display:flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.15s ease;
    }

    .button:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }

    .card-players{
        margin: 0 15px;
        list-style: none;
        display:flex;
    }

   

</style>