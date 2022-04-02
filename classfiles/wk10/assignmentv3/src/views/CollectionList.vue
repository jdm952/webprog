<script setup>
import FlowerList from "../data/flowers.json";
import ItemRow from "../components/ItemRow.vue";
console.log(FlowerList);
</script>

<template>
  <div>
    <ItemRow
      v-for="(flower, index) in FlowerList"
      :key="index"
      :flower="flower"
      :class="{ odd: (index + 1) % 2 !== 0 }"
    />
  </div>
</template>
