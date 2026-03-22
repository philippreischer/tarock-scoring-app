<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

</script>

<template>
    <div class="button-container font-size-medium" >
        <div 
        v-if="!gameStore.newGameActiv" 
        class="button font-size-medium" 
        @click="gameStore.addNewGame(true)"
        >
            <span>Neues Spiel</span>
        </div>

        <div v-else-if="gameStore.newGameActiv" 
        class="button font-size-medium"
        @click="gameStore.openNewPlayerCard(true)">
            <span>Spieler hinzufügen</span>
        </div>
    </div>  
</template>

<style scoped>

.button-container{
    margin-left: 20px;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
}
/*
.button-plus {
    border-radius: 10Px;
    background-color: #e9e9ed;
    border: solid 1px black;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center; 
    z-index: +1;
    cursor: pointer;
    box-shadow: 3px 3px 5px #241641;
    max-width: 74px;
    position: absolute;
    bottom: 0;
    margin: 40px;
    color: #3d3d3d;
}

.button-plus:hover {
    color: black;
}

.plus{
    padding: 10px 17px 15px 17px;
    font-size: 40px;
    line-height: 1;
}
*/
    .button {
        margin:20px;
        padding: 15px;
        width: 90%;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display:flex;
        align-items: center;
        justify-content: center;
        transition: all 0.15s ease;
        position: absolute;
        bottom: 0;
    }

    .button:active {
        transform: scale(0.95);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
</style>