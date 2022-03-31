<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div>
    <nav>
      <RouterLink to="/"><h1>Top Songs</h1></RouterLink>
      <RouterLink class="song" to="/song/test">Song</RouterLink>
    </nav>
      <RouterView />
</div>
</template>
<style scoped>
.song {
  display: none;
}
h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: royalblue;
  padding: 10px;
  margin: 10px;
  background: white;
  border: 1px solid white;
  border-radius: 4px;
  width: 25rem;
}
a {
    text-decoration: none;
}
h1:hover {
  background: rgb(32, 80, 226);
  color: white;
}
</style>