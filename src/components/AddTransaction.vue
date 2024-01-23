<script setup>
const onSubmit = () => {
  console.log("Submit")
}
</script>

<template>
  <div class="flex flex-col">
    <h1 class="font-semibold text-base py-1 border-b-2 mb-2">Add new Transactions</h1>
    <form class="flex flex-col" @submit.prevent="onSubmit">
      <label class="text-base mb-2" for="name">Text</label>
      <input type="text" placeholder="Enter Text..." class="py-2 px-3 mb-2" id="name">
      <label class="text-base mb-2" for="amount">Amount <br>(negative - expense, positive - income)</label>
      <input type="text" placeholder="Enter Amount..." class="py-2 px-3 mb-4" id="amount">
      <button type="submit" class="bg-purple-500 text-white py-2 mb-5">Add Transaction</button>
    </form>

  </div>
</template>