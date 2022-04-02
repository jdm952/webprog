<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["flower"]);
console.log("the flower", props.flower);
</script>

<template>
  <RouterLink :to="'/' + flower.id" class="flower-container">
    <div class="collectionRow">
      <div class="collectionRow collectionRowImage">
        <img :src="flower.image" :alt="flower.name" v-cloak />
      </div>
      <h1 class="collectionRow collectionRowName">{{ flower.name }}</h1>
    </div>
  </RouterLink>
</template>

<style scoped>
body {
  margin: 0;
  font-family: var(--font-sans-serif);
}
img {
  max-width: 200px;
}
.collectionRow {
  padding-left: 1rem;
  display: inline-block;
  vertical-align: middle;
}
h1 {
  padding: 0rem;
  margin: 0;
  color: black;
  background: none;
}
[v-cloak] {
  display: none;
}
</style>
