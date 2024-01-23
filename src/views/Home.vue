<script setup>
import Header from "../components/Header.vue";
import Balance from "../components/Balance.vue";
import TransactionList from "../components/TransactionList.vue";
import IncomeExpense from "../components/IncomeExpense.vue";
import AddTransaction from "../components/AddTransaction.vue";

import {computed, ref, onMounted} from "vue";
import {useToast} from "vue-toastification";

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem("transactions"));
  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})

const saveToLocalStorage = () => {
  localStorage.setItem("transactions", JSON.stringify(transactions.value))
}

const toast = useToast();

const transactions = ref([]);

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
  saveToLocalStorage()
  toast.success("Transaction added successfully")
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 100)
}
const handleDelete = (id) => {
  transactions.value = transactions.value.filter(
      (transaction) => transaction.id !== id
  );
  saveToLocalStorage()
  toast.success("Transaction Deleted successfully")
};

</script>

<template>
  <div class="flex justify-center transactions-center pt-10 font-poppins">
    <div class="flex flex-col">
      <Header/>
      <Balance :balance="balance"/>
      <IncomeExpense :expenses="expenses" :income="income"/>
      <TransactionList :transactions="transactions" @deleteTransaction="handleDelete"/>
      <AddTransaction @transactionSubmitted="handleTransactionSubmitted"/>
    </div>
  </div>
</template>