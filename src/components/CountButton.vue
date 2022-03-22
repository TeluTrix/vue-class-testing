<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div>
    <button id="increment" type="button" class="actionBtn" @click="count++">Minus(-)</button>
    <p>count is: {{ count }}</p>
    <button id="decrement" type="button" class="actionBtn" @click="count--">Plus(+)</button>
  </div>
</template>

<style scoped>
.actionBtn {
  margin: 5pt;
  padding: 5pt;
}
</style>
