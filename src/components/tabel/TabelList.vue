<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
    
</script>

<template>   
        <table class="tabel font-size-small">
            <tr class="tabel-grid font-size-small">
                <th class="tabel-head" 
                    v-for="player in gameStore.games[gameStore.activeGameIndex].players" 
                    :key="player.id">
                        {{ player.name }}
                </th> 
                <th class="tabel-head">
                    Punkte
                </th>  
            </tr>
            <tr class="tabel-grid" 
                v-for="(game, index) in gameStore.games[gameStore.activeGameIndex].rounds" 
                :key="game.id"
            >
                <td class="tabel-item color-gray" 
                    v-for="player in gameStore.games[gameStore.activeGameIndex].players" 
                    :key="player.id"
                >
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
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>