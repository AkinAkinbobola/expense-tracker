<script setup>
import {computed} from "vue";

const {transactions} = defineProps(["transactions"])

const emit = defineEmits(["deleteTransaction"]);

const removeTransaction = (index) => {
  emit('deleteTransaction', index)
}
</script>

<template>
  <div class="mb-4">
    <h3 class="font-semibold py-1 border-b-2 mb-2 text-base">History</h3>
    <div v-for="(transaction, index) in transactions" :key="transaction.id" class="flex items-center">
      <font-awesome-icon :icon="['fas', 'xmark']" class="w-4 px-2 py-1 bg-red-400 text-white h-full mr-3" @click="removeTransaction(index)"/>
      <div class="flex bg-white pl-2 justify-between shadow-md my-2 w-11/12">
        <p class="m-2">{{ transaction.name }}</p>
        <div class="flex">
          <p class="m-2">${{ transaction.price }}</p>
          <div :class="[transaction.price < 0 ? 'bg-red-400' : 'bg-green-400', 'w-1']"></div>
        </div>
      </div>
    </div>
  </div>
</template>