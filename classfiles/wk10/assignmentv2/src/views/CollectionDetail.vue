<script>
import FlowerList from "../data/flowers.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log(paramId);
const flower = FlowerList.find((flower) => {
  return flower.id === paramId;
});
</script>

<template>
  <div class="container">
    <h1>{{ flower.name }}</h1>
    <p>{{ flower.type }}</p>
    <p>{{ flower.color }}</p>
    <p>{{ flower.height }}</p>
    <img :src="flower.image" :alt="flower.name" />
  </div>
</template>

<style  scoped>
img {
    max-width: 200px;
}
</style>