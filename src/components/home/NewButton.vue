<script setup>
    import { ref } from 'vue';
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

</script>

<template>
    <div class="plus-button-container" >
        <button v-if="!gameStore.newGameActiv" class="button-plus " @click="gameStore.changeHomeList(true)">
            <span class="plus">+</span>
        </button>
        <button v-else-if="gameStore.newGameActiv" class="button-plus " @click="gameStore.openNewPlayerCard(true)">
            <span class="plus">+</span>
        </button>
    </div>  
</template>

<style scoped>

.plus-button-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

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


</style>