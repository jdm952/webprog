<script setup>
const props = defineProps(["animal"]);
console.log(props.animal);
</script>


<template>
    <div>
      <h3>{{props.animal.commonName}}</h3>
      <p>Binomial Name: {{props.animal.binomialName}}</p>
      <p>Order: {{props.animal.order}}</p>
      <p>Family: {{props.animal.family}}</p>
      <p>Genus: {{props.animal.genus}}</p>
      <p>Species: {{props.animal.species}}</p>
      <img :src="props.animal.image" :alt="props.animal.commonName" />
    </div>
</template>

<style scoped>
div {
    max-width: 350px;
    border: 1px solid black;
    border-radius: 4px;
    padding: 20px;
    margin: 10px;
}
img {
    max-width: 200px;
    max-height: 150px;
    display: block;
}

</style>