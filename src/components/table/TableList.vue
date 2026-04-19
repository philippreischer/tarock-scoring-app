<script setup>
    import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();
</script>

<template>
    <div v-if="gameStore.games.length > 0" class="table font-size-small">
        <div class="table-grid table-header font-size-small">
            <div class="table-head"
                v-for="player in gameStore.games[gameStore.activeGameIndex].players"
                :key="player.id">
                    {{ player.name }}
            </div>
            <div class="table-head color-gray">
                Punkte
            </div>
        </div>
        <div class="table-grid"
            v-for="(_, index) in gameStore.games[gameStore.activeGameIndex].rounds"
            :key="index"
        >
            <div class="table-item"
                v-for="player in gameStore.games[gameStore.activeGameIndex].players"
                :key="player.id"
                :class="player.colorList[index]"
            >
                {{ player.points[index] }}
            </div>
            <div class="table-item">
                {{ gameStore.games[gameStore.activeGameIndex].gamePoints[index] }}
            </div>
        </div>
    </div>
</template>

<style scoped>
    .table {
        width: 100%;
    }

    .table-grid {
        display: flex;
        justify-content: space-between;
        margin: 8px 10px;
    }

    .table-header {
        position: sticky;
        top: 0;
        z-index: 2;
        background: white;
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
        font-weight: normal;
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
