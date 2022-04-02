<script>
import FlowerList from "../data/flowers.json";
import { useRoute } from "vue-router";

const route = useRoute();
const paramId = route.params.id * 1;
console.log(id);
// const item = FlowerList.find((item) => {
//     return item.id === paramId;
});

</script>


<template>
    <div class="container">
        <!-- <h1>{{item.name}}</h1>
        <p>{{item.type}}</p>
        <p>{{item.color}}</p>
        <p>{{item.height}}</p>
        <img :src="item.image" alt="item.name"> -->
    </div>
</template>