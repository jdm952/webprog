<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink class="nav-item" to="/">Home</RouterLink>
      <RouterLink class="nav-item" to="/llama">Llama</RouterLink>
      <RouterLink class="nav-item" to="/alpaca">Alpaca</RouterLink>
    </nav>
    <div class="container-view">
      <RouterView />
    </div>
  </div>
</template>

<style>
body {
  margin: auto;
  background: rosybrown;
}
.container {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}
.container-view {
  padding: 0 1rem;
}
nav {
  background: rgb(112, 46, 46);
  display: flex;
}
.nav-item {
  padding: 1rem;
  text-decoration: none;
  color: white;
}
</style>
