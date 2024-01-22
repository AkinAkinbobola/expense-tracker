<script setup>
const {balance} = defineProps(["balance"])
</script>

<template>
  <div class="mb-3">
    <h2 class="text-base">Your Balance</h2>
    <h3 class="font-semibold text-2xl">${{balance}}</h3>
  </div>
</template>