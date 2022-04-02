<script>
import FlowerList from "../data/flowers.json";
import ItemRow from "../components/ItemRow.vue";
</script>

<template>
  <div class="container">
    <h1>Flowers</h1>
    <ItemRow v-for="(flower, index) in FlowerList" :key="index" :flower="flower" />
  </div>
</template>
