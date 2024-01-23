<script setup>
import {ref} from "vue";
import {useToast} from "vue-toastification";

const name = ref("");
const amount = ref("");

const toast = useToast()

const emit = defineEmits(["transactionSubmitted"]);
const onSubmit = () => {
  if (!name.value || !amount.value) {
    toast.error("Both fields must be filled");
    name.value = "";
    amount.value = "";
    return;
  }

  const transaction = {
    name: name.value,
    price: parseFloat(amount.value)
  }

  emit("transactionSubmitted", transaction)
  name.value = "";
  amount.value = "";
}
</script>

<template>
  <div class="flex flex-col">
    <h1 class="font-semibold text-base py-1 border-b-2 mb-2">Add new Transactions</h1>
    <form class="flex flex-col" @submit.prevent="onSubmit">
      <label class="text-base mb-2" for="name">Text</label>
      <input id="name" v-model="name" class="py-2 px-3 mb-2" placeholder="Enter Text..." type="text">
      <label class="text-base mb-2" for="amount">Amount <br>(negative - expense, positive - income)</label>
      <input id="amount" v-model="amount" class="py-2 px-3 mb-4" placeholder="Enter Amount..." type="text">
      <button class="bg-purple-500 text-white py-2 mb-5" type="submit">Add Transaction</button>
    </form>
  </div>
</template>