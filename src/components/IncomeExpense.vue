<script setup>
import {computed} from "vue";

const {income} = defineProps(["income", "expenses"])
</script>

<template>
  <div class="flex bg-white py-3 px-6 justify-between border border-b shadow-md mb-6">
    <div class="ml-6">
      <h3>Income</h3>
      <p class="text-green-400">+${{ income }}</p>
    </div>
    <div class="border-l mx-6"></div>
    <div class="mr-6">
      <h3>Expense</h3>
      <p class="text-red-400">-${{ expenses }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>