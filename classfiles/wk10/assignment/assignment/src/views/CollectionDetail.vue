<script>
import { FlowerList } from '../data/flowers.json';
import { useRoute } from 'vue-router';

const route = useRoute();
const paramId = route.params.id * 1;
console.log('the id is', paramId);
const item = FlowerList.find(item => {
    return item.id === paramId;
})

</script>


<template>
    <div class="container">
        <h1>{{item.name}}</h1>
        <p>{{item.body}}</p>
        <img :src="item.image" alt="item.name">
    </div>
</template>