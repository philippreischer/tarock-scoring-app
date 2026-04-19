<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

</script>

<template>
        <table v-if="gameStore.games.length > 0" class="table font-size-small">
            <tr class="table-grid font-size-small">
                <th class="table-head"
                    v-for="player in gameStore.games[gameStore.activeGameIndex].players"
                    :key="player.id">
                        {{ player.name }}
                </th>
                <th class="table-head color-gray">
                    Punkte
                </th>
            </tr>
            <tr class="table-grid"
                v-for="(_, index) in gameStore.games[gameStore.activeGameIndex].rounds"
                :key="index"
            >
                <td class="table-item "
                v-for="player in gameStore.games[gameStore.activeGameIndex].players"
                :key="player.id"
                :class="player.colorList[index]"
                >
                <!--{{ player.colorList[index] }}-->
                    {{ player.points[index] }}
                </td>
                <td class="table-item" >
                    {{ gameStore.games[gameStore.activeGameIndex].gamePoints[index] }}
                </td>
            </tr>
        </table>
</template>

<style scoped>
    .table {
        width: 100%;
    }

    th{
       font-weight: normal;
    }

    .table-grid {
        display: grid;
        grid-auto-flow: column;
        margin: 8px 10px;
    }

    .table-grid {
        display: flex;
        justify-content: space-between;


    }

    .table-head {
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


    .table-item {
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