<script setup>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOption from '../components/PokemonOption.vue';
import { onMounted, ref } from 'vue';
import getPokemonOptions from '../helpers/getOptions';
const pokemonArr = ref([]);
const pokemon = ref(null);
const showPokemon = ref(false);
const showAnswer = ref(false);
const message = ref('');
const isCorrect = ref(false);
const mixPokemonArray = async () => {
    pokemonArr.value = await getPokemonOptions();
    // console.log(pokemonArr.value);
    const random = Math.floor(Math.random() * pokemonArr.value.length);
    pokemon.value = pokemonArr.value[random];
    // console.log(random);
}
const selectPokemon = (selectedPokemon) => {
    console.log(selectedPokemon);
    console.log(pokemon.value);
    // pokemon.value = pokemon;
    showPokemon.value = true;
    showAnswer.value = true;
    if (selectedPokemon.id === pokemon.value.id) {
        isCorrect.value = true;
        message.value = `Correcto ${pokemon.value.name}`;
    } else {
        isCorrect.value = false;
        message.value = `Oops era ${pokemon.value.name} ...`;
    }
}
const newGame = () => {
    showPokemon.value = false;
    showAnswer.value = false;
    pokemonArr.value = [];
    pokemon.value = null;
    mixPokemonArray();
}
onMounted(() => {
    mixPokemonArray();
    console.log('mounted');
})

</script>

<template>
    <div class="container-pokemon">
        <h1>¿Quien es este Pokemon?</h1>
        <div v-if="!pokemon" class="cargando">
            Cargando el pokemon...
        </div>
        <div v-if="pokemon">
            <!-- TODO Imagen del pokemon -->
            <PokemonPicture :pokemonid="pokemon.id" :showPokemon="showPokemon" />
            <!-- TODO opciones -->
            <PokemonOption @select-pokemon="selectPokemon" :pokemons="pokemonArr" />
            <template v-if="showAnswer">
                <h2 :class="isCorrect ? 'check' : 'cross'">{{ message }}</h2>
                <button @click="newGame()" class="btn">
                    Nuevo Juego
                </button>
            </template>
        </div>
    </div>
</template>

<style scoped>
.btn {
    width: 200px;
    height: 50px;
    /* display: flex; */
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all;
}

.cargando {
    font-size: larger;
}

.container-pokemon {
    width: 100%;
    min-height: 100vh;
}

.check {
    color: green;
}

.cross {
    color: red;
}
</style>