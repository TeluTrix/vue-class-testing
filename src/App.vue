<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import PlusCount from "./components/CountButton.vue";
import CoinSearch from "./components/coins/Search.vue";
</script>

<template>
  <PlusCount />
  <coin-search />
</template>

<style>
#app {
  text-align: center;
  margin-top: 120pt;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
