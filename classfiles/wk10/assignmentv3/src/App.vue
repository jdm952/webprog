<script setup>
import { RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
</script>

<template>
  <div class="container">
    <NavigationBar />
    <RouterView class="table" />
  </div>
</template>

<style>
html {
  --pink: #ff7878;
  --yellow: #ffba26;
  --green: #0c8827;
  --pink-light: #ffeee7;
  --pink-dark: #cc0235;
  --font-sans-serif: "Poppins", sans-serif;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
  font-family: var(--font-sans-serif);
}
.collection-wrapper {
  font-family: var(--font-sans-serif);
  margin: 0;
  width: 100%;
}
img {
  max-width: 200px;
  padding: 1rem 1rem 1rem 0;
}
h1 {
  font-family: var(--font-sans-serif);
  margin: 0;
  padding: 1rem;
  background-color: var(--pink-dark);
  color: white;
  font-size: 3rem;
}
.table {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.odd {
  background-color: var(--pink-light);
}
</style>
