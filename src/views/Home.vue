<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import TransactionList from "../components/TransactionList.vue";
import IncomeExpense from "../components/IncomeExpense.vue";
import AddTransaction from "../components/AddTransaction.vue";
</script>

<template>
  <div class="flex flex-col items-center">
    <Header/>
    <Balance/>
    <IncomeExpense/>
    <TransactionList/>
    <AddTransaction/>
  </div>
</template>