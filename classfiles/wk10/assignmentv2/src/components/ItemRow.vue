<script setup>
import { RouterLink } from "vue-router";
const props = defineProps(["flower"]);
console.log("the flower", props.flower);
</script>

<template>
  <RouterLink :to="'/collection/' + item.id" class="item-container">
    <tr>
      <td>{{ flower.name }}</td>
      <td>{{ flower.type }}</td>
      <td>{{ flower.color }}</td>
      <td>{{ flower.height }}</td>
      <td><img :src="flower.image" :alt="flower.name" v-cloak /></td>
    </tr>
  </RouterLink>
</template>

<style scoped>
.item-container {
  border: 1px solid black;
}
</style>
