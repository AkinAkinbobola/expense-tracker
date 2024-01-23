<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import TransactionList from "../components/TransactionList.vue";
import IncomeExpense from "../components/IncomeExpense.vue";
import AddTransaction from "../components/AddTransaction.vue";

import {computed, ref} from "vue";
import {useToast} from "vue-toastification";

const toaster = useToast();

const transactions = ref([
  {id: 1, name: "Diamonds", price: "-100000"},
  {id: 2, name: "Paycheck", price: "3000"},
  {id: 3, name: "Blue cheese", price: "-200"},
]);

const balance = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + Number(transaction.price);
  }, 0);
})

const income = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.price > 0)
      .reduce((acc, transaction) => {
        return acc + Number(transaction.price)
      }, 0)
      .toFixed(2);
});

const expenses = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.price < 0)
      .reduce((acc, transaction) => {
        return acc + Number(transaction.price)
      }, 0)
      .toFixed(2);
});

const handleTransactionSubmitted = (transaction) => {
  transactions.value.push({
    id: generateUniqueId(),
    name: transaction.name,
    price: transaction.price
  })
  toaster.success("Transaction added successfully")
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100)
}
</script>

<template>
  <div class="flex justify-center transactions-center pt-10 font-poppins">
    <div class="flex flex-col">
      <Header/>
      <Balance :balance="balance"/>
      <IncomeExpense :expenses="expenses" :income="income"/>
      <TransactionList :transactions="transactions"/>
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted"/>
    </div>

  </div>
</template>