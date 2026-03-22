<script setup>
import  { useGameStore } from '@/stores/gameStore.js';
import Navigation from './components/Navigation.vue';

const gameStore = useGameStore();
</script>

<template>
  <Navigation />
  <router-view />
</template>

