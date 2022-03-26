<script setup>
const props = defineProps(["flower"]);
console.log('the flower', props.flower);
</script>

<template>
    <tr>
        <td>{{flower.name}}</td>
        <td>{{flower.type}}</td>
        <td>{{flower.color}}</td>
        <td>{{flower.height}}</td>
        <td><img :src="flower.image" :alt="flower.name" v-cloak></td>
        <td><button class="delete" type="button" v-on:click="$emit('deleteFlower', flower)">Delete</button></td>
    </tr>
</template>

<style scoped>
 .delete {
    font-size: 1rem;
}
</style>