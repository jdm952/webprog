<script setup>

import { reactive } from 'vue';
import ItemRow from './components/ItemRow.vue';

const flowers = [
                {
                    name: "Black-Eyed Susan",
                    type: "Perennial",
                    color: "Yellow",
                    height: "Medium",
                    image: "img/blackeyedsusan.jpg" 
                },
                {
                    name: "Coneflower",
                    type: "Perennial",
                    color: "Purple",
                    height: "Medium",
                    image: "img/coneflower.jpg" 
                },
                {
                    name: "Marigold",
                    type: "Annual",
                    color: "Multicolor",
                    height: "Short",
                    image: "img/marigold.jpg"
                },
                {
                    name: "Shasta Daisy",
                    type: "Perennial",
                    color: "White",
                    height: "Medium",
                    image: "img/daisy.jpg"
                },
                {
                    name: "Sunflower",
                    type: "Annual",
                    color: "Yellow",
                    height: "Tall",
                    image: "img/sunflower.jpg"
                },
                {
                    name: "Zinnia",
                    type: "Annual",
                    color: "Multicolor",
                    height: "Medium",
                    image: "img/zinnia.jpg"
                }
                ];
const flowerTypes = [
                { value: "annual", name: "Annual"},
                { value: "perennial", name: "Perennial"}
            ];
const flowerHeights = [
                { value: "short", name: "Short"},
                { value: "medium", name: "Medium"},
                { value: "tall", name: "Tall"},
            ];
const newFlower = {
                    name: "",
                    type: "",
                    color: "",
                    height: "",
                    image: ""
                  };
const state = reactive({flowers: flowers, newFlower: newFlower});
function addNewFlower() {
            state.flowers.push({
                name: state.newFlower.name,
                type: state.newFlower.type,
                color: state.newFlower.color,
                height: state.newFlower.height,
                image: state.newFlower.image,
            });
            state.newFlower.name= "";
            state.newFlower.type= "";
            state.newFlower.color= "";
            state.newFlower.height= "";
            state.newFlower.image= "";
}
function handleDelete(flowerToDelete) {
  state.flowers = state.flowers.filter((flowerToCheck) => {
    return flowerToDelete != flowerToCheck;
  });
}
</script>

<template>
  <div class="collection-wrapper">
    <h1>Garden Flowers</h1>
    <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Color</th>
                        <th>Height</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  <ItemRow v-for="(flower, index) in state.flowers" :class="{odd: (index + 1) % 2 !== 0}"
                  :key="index" 
                  :flower="flower"
                  :index="index" 
                  v-on:delete-flower="handleDelete"
                  />
                </tbody>
            </table>
            <form v-on:submit.prevent="addNewFlower">
                <fieldset>
                    <legend>Add a flower</legend>
                    <div class="flower-form">
                        <div class="flower flower-name">
                            <label for="name">Flower Name
                                <input id="name" type="text" v-model="newFlower.name">
                            </label>
                        </div>
                        <div class="flower flower-type">
                            <label for="chooseType">Flower Type
                                <select id="chooseType" v-model="newFlower.type">
                                <option v-for="flowerType in flowerTypes" :key="flowerType.value" :value="flowerType.value">{{flowerType.name}}</option>
                            </select>
                            </label>
                        </div>
                        <div class="flower flower-color">
                            <label for="color">Flower Color
                                <input id="color" type="text" v-model="newFlower.color">
                            </label>
                        </div>
                        <div class="flower flower-height">
                            <label for="chooseHeight">Flower Height
                                <select id="chooseHeight" v-model="newFlower.height">
                                    <option v-for="flowerHeight in flowerHeights" :key="flowerHeight.value" :value="flowerHeight.value">{{flowerHeight.name}}</option>
                                </select>
                            </label>
                        </div>
                        <div class="flower flower-image">
                            <label for="image">Image (URL)
                                <input id="image" type="text" v-model="newFlower.image">
                            </label>
                        </div>
                        <div class="flower flower-button">
                            <button type="submit">Add Flower</button>
                        </div>
                    </div>
                </fieldset>
            </form>
  </div>
</template>

<style>
html {
    --pink: #ff7878;
    --yellow: #ffba26;
    --green: #0c8827;
    --pink-light: #ffeee7;
    --pink-dark: #cc0235;
    --font-sans-serif: 'Poppins', sans-serif;
}
body {
  margin: 0;
}
.collection-wrapper {
    font-family: var(--font-sans-serif);
    margin: 0;
    width: 100%;
}

img {
    max-width: 200px;
    padding: 1rem 1rem 1rem 0;
}

h1 {
    margin: 0;
    padding: 1rem;
    background-color: var(--pink-dark);
    color: white;
    font-size: 3rem;
}

table {
    border-collapse: collapse;
    width: 100%;
    overflow: hidden;
}

th {
    font-weight: 700;
    background-color: var(--yellow);
    font-size: 1.5rem;
}

tr {
    text-align: left;
    padding: 0 1rem;
    font-size: 1.2rem;
}

.odd {
    background-color: var(--pink-light);
}
td, th {
    padding: 1.2rem; 
    
}

button {
    padding: .2rem .5rem;
}

[v-cloak] {
    display: none;
}

form {
    width: 100%;
}

.flower-form {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    width: 100%;
}

.flower {
    padding: 0 7rem 0 0;
}

.flower input, .flower select {
    display: block;
    margin-top: .5rem;
}

.flower-color input {
    max-width: 15rem;
}

.flower-button {
    padding-top: 1.7rem;
    margin-left: 4rem;
}


</style>
