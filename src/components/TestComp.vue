<script setup lang="ts">
import { ref } from 'vue'
const counter = ref(0)

const inc = () => counter.value++
</script>

<template>
  <h1 @click="inc">counter:{{ counter }}</h1>
</template>
