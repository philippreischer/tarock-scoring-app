<script setup>
import  { useGameStore } from '@/stores/gameStore.js';
import Navigation from './components/Navigation.vue';

</script>

<template>
  <Navigation />
  <router-view />
</template>

