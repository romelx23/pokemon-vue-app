<script setup>
import { computed } from "@vue/runtime-core";
const { pokemonid } = defineProps({
    pokemonid: {
        type: Number,
        default: 4,
        required: true,
    },
    showPokemon: {
        type: Boolean,
        default: false,
        required: true,
    },
});
const image = computed(() => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonid}.svg`;
});
</script>

<template>
    <div class="pokemon-image">
        <img class="filter pokemon" :src="image" alt="pokemon" title="pokemon">
        <img v-if="showPokemon" class="fade-in pokemon" :src="image" alt="pokemon" title="pokemon">
    </div>
</template>

<style scoped>
.pokemon-image {
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

img {
    position: absolute;
}

.pokemon {
    width: auto;
    height: 100%;
}

.filter {
    filter: brightness(0);
    pointer-events: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}

.fade-in {
    animation: fade-in 1s;
}

@keyframes fade-in {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>