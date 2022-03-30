<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/llama">Llama</RouterLink> |
      <RouterLink to="/alpaca">Alpaca</RouterLink>
    </nav>
    <div class="container-view">
      <RouterView />
    </div>
  </div>
</template>

<style>

</style>
