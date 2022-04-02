<script setup>
import FlowerList from "../data/flowers.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log("the id is", paramId);
const flower = FlowerList.find((flower) => {
  return flower.id === paramId;
});
</script>

<template>
  <div class="container">
    <h2>{{ flower.name }}</h2>
    <p>Type: {{ flower.type }}</p>
    <p>Color: {{ flower.color }}</p>
    <p>Height: {{ flower.height }}</p>
    <img :src="flower.image" :alt="flower.name" />
  </div>
</template>

<style scoped>
.container {
  background-color: var(--pink-light);
  font-family: var(--font-sans-serif);
  padding: 0.2rem 1rem;
  margin: 1rem;
  max-width: fit-content;
  border: 1rem solid var(--yellow);
}
.container h2 {
  font-size: 2rem;
}
.container p {
  margin: 0;
}
img {
  max-width: 300px;
}
</style>
