<script setup>
import { RouterLink } from 'vue-router';
import MusicList from "../data/music-list.json";
console.log("Music list", MusicList);
</script>
<template>
<div class="song-container">
    <div class="song-list-item" v-for="(song, index) in MusicList" :key="index">
        <RouterLink :to="'/song/' + song.slug">{{song.rank}}) {{ song.title }}</RouterLink>
    </div>
</div>
</template>

<style>
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: royalblue;
}
.song-container {
  display: flex;
  flex-direction: column;
}
.song-list-item {
  padding: 10px;
  margin: 10px;
  border: 1px solid white;
  border-radius: 4px;
  background: white;
  width: 25rem;
} 
.song-list-item a {
  color: black;
  text-decoration: none;
}
.song-list-item:hover {
  background: rgb(32, 80, 226);
}

.song-list-item:hover a {
    color: white;
}
</style>
