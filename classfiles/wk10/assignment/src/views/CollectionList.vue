<script>
import FlowerList from '../data/flowers.json';
import ItemRow from '../components/ItemRow.vue';
</script>

<template>
    <div class="container">
        <h1>Collection List</h1>
        <ItemRow v-for="(item, index) in FlowerList" 
        :key="index" 
        :item="item" />
    </div>
</template>