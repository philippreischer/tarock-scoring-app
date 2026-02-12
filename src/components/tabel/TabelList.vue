<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    const games = gameStore.games;
    console.log(games[0].players);
</script>

<template>   
        <tabel class="font-size-small">
            <tr class="tabel-grid font-size-small">
                
                <th class="tabel-head" v-for="player in games[1].players" :key="player.id">{{ player.name }}</th> 
                <th class="tabel-head"></th>  
            </tr>
            <tr class="tabel-grid" v-for="(game, index) in games[1].rounds" :key="game.id">
                
                <td class="tabel-item color-gray" v-for="player in games[1].players" :key="player.id">{{ player.points[index] }}</td>
                <td class="tabel-item" >{{ games[1].gamePoints[index] }}</td> 
            </tr>
        </tabel>     
</template>

<style scoped>
    th{
       font-weight: normal; 
    }

    .tabel-grid{
        display: grid;
        grid-auto-flow: column;
        margin: 8px 10px;
        
    }

    .tabel-head{
        width: 45px;
        height: 45px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
    }

 
    .tabel-item{
        width: 45px;
        height: 45px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>