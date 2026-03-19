<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    

</script>

<template>
    <div class="num-grid">
        <div type="button" class="num" @click="gameStore.addNumber('1')">1</div>
        <div type="button" class="num" @click="gameStore.addNumber('2')">2</div>
        <div type="button" class="num" @click="gameStore.addNumber('3')">3</div>
        <div type="button" class="num" @click="gameStore.addNumber('4')">4</div>
        <div type="button" class="num" @click="gameStore.addNumber('5')">5</div>
        <div type="button" class="num" @click="gameStore.addNumber('6')">6</div>
        <div type="button" class="num" @click="gameStore.addNumber('7')">7</div>
        <div type="button" class="num" @click="gameStore.addNumber('8')">8</div>
        <div type="button" class="num" @click="gameStore.addNumber('9')">9</div>
        <div type="button" class=""></div>
        <div type="button" class="num" @click="gameStore.addNumber('0')">0</div>
        <div type="button" class="num" @click="gameStore.deleteLastNumber()">C</div>   
    </div>
    
</template>

<style scoped>
    .num-grid{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    
    .num{
        margin:10px 20px;
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

    .num:active {
    transform: scale(0.95);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

</style>