<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import TransactionList from "../components/TransactionList.vue";
import IncomeExpense from "../components/IncomeExpense.vue";
import AddTransaction from "../components/AddTransaction.vue";

import {computed, ref} from "vue";

const transactions = ref([
  {id: 1, name: "Diamonds", price: "-100000"},
  {id: 2, name: "Paycheck", price: "3000"},
  {id: 3, name: "Blue cheese", price: "-200"},
]);
// const transaction = ref(null);
// const price = ref(null);

const balance = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + Number(transaction.price);
  }, 0);
})

const income = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.price > 0)
      .reduce((acc, transaction) => {
        return  acc + Number(transaction.price)
      }, 0)
      .toFixed(2);
});

const expenses = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.price < 0)
      .reduce((acc, transaction) => {
        return  acc + Number(transaction.price)
      }, 0)
      .toFixed(2);
});

</script>

<template>
  <div class="flex justify-center transactions-center pt-10 font-poppins">
    <div class="flex flex-col">
      <Header/>
      <Balance :balance="balance"/>
      <IncomeExpense :income="income" :expenses="expenses"/>
      <TransactionList :transactions="transactions"/>
      <AddTransaction />
    </div>

  </div>
</template>