<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    import { ref } from 'vue';
    const gameStore = useGameStore();


    const status= ref('color-green')
/*
    const statusColor = computed(() => ({
        'color-gray': status.value === 'notPlayed',
        'color-green': status.value === 'win',
        'color-red': status.value === 'lose'
    }))


    const statusColor = player => {
        if (player.status === 'notPlayed') {
            return 'color-gray'; 
        } else if (player.status === 'win') {
            return 'color-green';
        } else if (player.status === 'lose') {
            return 'color-red';
        }
        console.log(statusColor);
    }
*/

    
</script>

<template>   
        <table v-if="gameStore.games.length > 0" class="tabel font-size-small">
            <tr class="tabel-grid font-size-small">
                <th class="tabel-head" 
                    v-for="player in gameStore.games[gameStore.activeGameIndex].players" 
                    :key="player.id">
                        {{ player.name }}
                </th> 
                <th class="tabel-head color-gray">
                    Punkte
                </th>  
            </tr>
            <tr class="tabel-grid" 
                v-for="(game, index) in gameStore.games[gameStore.activeGameIndex].rounds" 
                :key="index"
            >
                <td class="tabel-item "
                v-for="player in gameStore.games[gameStore.activeGameIndex].players" 
                :key="player.id"
                :class="player.colorList[index]"
                >
                <!--{{ player.colorList[index] }}-->
                    {{ player.points[index] }}
                </td>
                <td class="tabel-item" >
                    {{ gameStore.games[gameStore.activeGameIndex].gamePoints[index] }}
                </td> 
            </tr>
        </table>     
</template>

<style scoped>
    .tabel {
        width: 100%;
    }

    th{
       font-weight: normal; 
    }

    .tabel-grid {
        display: grid;
        grid-auto-flow: column;
        margin: 8px 10px;
    }

    .tabel-grid {
        display: flex;
        justify-content: space-between;
        
        
    }

    .tabel-head {
        flex: 1 1 50px;
        min-height: 50px;
        margin: 0 2px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column-reverse;
    }

 
    .tabel-item {
        flex: 1 1 50px;
        min-height: 50px;
        margin: 0 2px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>