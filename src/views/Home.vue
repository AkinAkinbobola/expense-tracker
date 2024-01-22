<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import TransactionList from "../components/TransactionList.vue";
import IncomeExpense from "../components/IncomeExpense.vue";
import AddTransaction from "../components/AddTransaction.vue";

import {ref, onMounted} from "vue";

const balance = ref(600)
</script>

<template>
  <div class="flex justify-center items-center pt-10 font-poppins">
    <div class="flex flex-col">
      <Header/>
      <Balance :balance="balance"/>
      <IncomeExpense/>
      <TransactionList/>
      <AddTransaction/>
    </div>

  </div>
</template>