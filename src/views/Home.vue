<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import TransactionList from "../components/TransactionList.vue";
import IncomeExpense from "../components/IncomeExpense.vue";
import AddTransaction from "../components/AddTransaction.vue";

import {ref, onMounted} from "vue";

const balance = ref(600);
const transactions = ref([
  {id: 1, name: "Diamonds", price: "-100000"},
  {id: 2, name: "Paycheck", price: "3000"},
  {id: 3, name: "Blue cheese", price: "-200"},
]);
const transaction = ref(null);
const price = ref(null);
</script>

<template>
  <div class="flex justify-center transactions-center pt-10 font-poppins">
    <div class="flex flex-col">
      <Header/>
      <Balance :balance="balance"/>
      <IncomeExpense/>
      <TransactionList :transactions="transactions"/>
      <AddTransaction :transaction="transaction" :price="price"/>
    </div>

  </div>
</template>