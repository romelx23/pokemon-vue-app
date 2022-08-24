<script setup>
import getPokemonOptions from '../helpers/getOptions';
const props = defineProps({
    pokemons: {
        type: Array,
        default: []
    }
})
// console.log(getPokemonOptions(), props.pokemons);
</script>

<template>
    <h3>Opciones </h3>
    <div class="options-container">
        <ul>
            <li @click="$emit('selectPokemon', pokemon)" v-for="pokemon of pokemons" :key="pokemon.id">
                {{ pokemon.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.options-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

li {
    width: 200px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: all;
}

li:hover {
    border: 1px solid rgb(144, 32, 255);
}

li:focus {
    border: 1px solid rgb(32, 255, 47);
}
</style>