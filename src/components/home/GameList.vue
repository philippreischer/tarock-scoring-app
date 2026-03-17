<script setup>
    import { ref, onMounted } from "vue"
    import  { useGameStore } from '@/stores/gameStore.js';
    
    const gameStore = useGameStore();
    const isReady = ref(false);

    onMounted(() => {
        setTimeout(() => {
        isReady.value = true
        }, 50)
    })


</script>

<template>
    <div v-if="isReady">
        <h1 v-if="gameStore.games.length === 0" class="font-size-large default-text">
            <span>Erstelle eint</span>
            <span>neues Spiel</span>
        
        </h1>
        <div  class="game-card font-size-small" 
            v-for="(game, index) in gameStore.games" 
            :key="game.id" 
            @click="gameStore.changeHomeList(true, index)"
            >
            <div class="grid-date">
                {{ game.date }}
            </div> 
            <ul >
                <li class="card-players" 
                v-for="player in gameStore.games[index].players" 
                :key="player.id">
                    <span class="grid-players">{{player.name}}</span>
                    <!--<span class="grid-points">{{player.points[game.rounds -1]}}</span>-->
                    <span class="grid-points">{{player.points?.[game.rounds -1] ?? 0}}</span>
                </li>
            </ul>        
        </div>
    </div> 
    <div v-else>
        Lade...
    </div>  
</template>

<style scoped>
    .default-text{
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .game-card{
        margin:20px;
        padding: 15px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display:flex;
        align-items: center;
    }
    
    .card-players{
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        margin: 0 15px;
        padding: 1px;
        
    }

    .grid-date{
        grid-column: span 1;
        text-align: left;
    }

    .grid-players{
        grid-column: span 2;
        text-align: left;
    }
    .grid-points{
        grid-column: span 2;
        text-align: right;
    }

</style>