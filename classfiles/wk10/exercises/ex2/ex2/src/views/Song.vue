<script setup>
import { useRoute } from "vue-router";
import MusicList from "../data/music-list.json"
const route = useRoute();
const song = MusicList.find((song) => {
    return song.slug === route.params.slug;
});
</script>

<template>
<div class="song-detail" :class="{rising: song.rank < song.position.positionLastWeek, falling: song.rank > song.position.positionLastWeek, same: song.rank === song.position.positionLastWeek}">
    <h1>{{ song.rank }}</h1>
    <h2>{{ song.title }}</h2>
    <img :src="song.cover" :alt="song.title">
    <p>Artist: {{ song.artist }}</p>
</div>
</template>
<style scoped>
.song-detail {
    background: white;
    border-radius: 4px;
    padding: .25rem 1rem;
    margin: 10px;
    width: 200px;
}
.song-detail.rising h1 {
     color: green;
}
.song-detail.falling h1 {
    color: red;
}
</style>