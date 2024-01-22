<script setup>
const {item, price} = defineProps(["item", "price"])
</script>

<template>
  <div class="flex flex-col">
    <h1 class="font-semibold text-base py-1 border-b-2 mb-2">Add new Transactions</h1>
    <h3 class="text-base mb-2">Text</h3>
    <input type="text" placeholder="Enter Text..." class="py-2 px-3 mb-2">
    <h3 class="text-base mb-2">Amount <br>(negative - expense, positive - income)</h3>
    <input type="text" placeholder="Enter Amount..." class="py-2 px-3 mb-4">
    <button type="submit" class="bg-purple-500 text-white py-2">Add Transaction</button>
  </div>
</template>