<script setup>
    import { onMounted } from 'vue';
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

    onMounted(() => {
        gameStore.resetAllPlayers()
    })


    const changeStatus = player => {
        console.log("player.status: " + player.status)
        if (player.status === 'notPlayed') {
            player.statusColor = 'color-green';
            player.statusText = 'gewonnen';
            player.status = 'win';
            Number(gameStore.currentWin++);
        } else if (player.status === 'win') {
            player.statusColor = 'color-red';
            player.statusText = 'verloren';
            player.status = 'lose';
            Number(gameStore.currentWin--);
            Number(gameStore.currentLose++);
        } else if (player.status === 'lose') {
            player.statusColor = 'color-gray';
            player.statusText = 'Nicht gespielt';
            player.status = 'notPlayed';
            Number(gameStore.currentLose--);
        }
        console.log("player.status: " + player.status)
        console.log("Ob: " + gameStore.games[gameStore.activeGameIndex].players[1].status)
        console.log("Ob: " + gameStore.games[gameStore.activeGameIndex].players[1].statusColor)
        console.log("gameStore.currentWin: " + gameStore.currentWin)
        console.log("gameStore.currentLose: " + gameStore.currentLose)
    }

</script>

<template>
    <div v-if="gameStore.games.length > 0" class="player-grid">
        <div class="player-card" 
            v-for="player in gameStore.games[gameStore.activeGameIndex].players" 
            :key="player.id"
            @click="changeStatus(player, index)"
            >
            <!-- <div>{{players.points}}</div> -->
            <span class="">{{player.name}}</span>
            <div class="card-status" :class="player.statusColor">
                <span>{{ player.statusText }}</span>
            </div>               
        </div>
    </div>
    
</template>

<style scoped>
    .player-grid{
        display: grid;
        grid-template-columns: repeat(2, 1fr); 
        margin: 10px 0 0 10px;
    }

    .player-card{
        margin: 10px 0 20px 5px;
        padding: 15px;
        width: 170px;
        height: 80px;
        background: #ffffff;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        
    }

    .player-card:active {
        transform: scale(0.95);
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    }
    
    .card-status{
        width: 170px;
        padding: 10px 0;
        margin-top: 15px;
        border-radius: 0 0 10px 10px;
        display: flex;
        justify-content: center;
    }


</style>