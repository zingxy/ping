<script setup lang="ts">
import WButton from './button/src/Button'
import MyCounter from './components/MyCounter'
import TestComp from './components/TestComp.vue'
</script>

<template>
  <TestComp />
  <MyCounter />
  <w-button
    type="primary"
    size="small"
  >
    1234567
  </w-button>
  <w-button
    type="secondary"
    size="medium"
  >
    1234567
  </w-button>
  <w-button
    type="primary"
    size="large"
    disabled
  >
    1234567
  </w-button>
</template>
