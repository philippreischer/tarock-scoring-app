<script setup>
import  { useGameStore } from '@/stores/gameStore.js';
    const gameStore = useGameStore();

</script>

<template>
    <nav class="navbar">
        <router-link class="nav-link" to="/" @click="gameStore.changeHomeList(false)">Home</router-link>
        <router-link class="nav-link" to="/SpielEintragen">Spiel eintragen</router-link>
        <router-link class="nav-link" to="/tabelle">Tabelle</router-link>
    </nav>
    

</template>

<style scoped>

    .navbar{
        display:flex;
        justify-content: space-around;
        margin: 40px;
    }
    .nav-link{
        text-decoration: none;
        color: inherit;
    }

</style>