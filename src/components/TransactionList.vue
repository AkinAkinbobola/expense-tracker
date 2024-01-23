<script setup>
import {computed} from "vue";

const {items} = defineProps(["items"])

const color = computed((price) => {
  if(price <= 0){
    return "red";
  }
  return "green";
})
</script>

<template>
<div class="mb-4">
  <h3 class="font-semibold py-1 border-b-2 mb-2 text-base">History</h3>
  <div  v-for="(item, index) in items" :key="item.id" class="flex items-center">
    <font-awesome-icon :icon="['fas', 'xmark']" class="text-red-300 w-6 px-2 py-1 bg-red-400 text-white h-full mr-3"/>
    <div class="flex bg-white pl-2 justify-between shadow-md my-2 w-11/12">
      <p class="m-2">{{ item.name }}</p>
      <div class="flex">
        <p class="m-2">${{item.price}}</p>
        <div :class="`bg-${item.price < 0 ? 'red' : 'green'}-400 h-full`"></div>
      </div>
    </div>
  </div>

</div>
</template>