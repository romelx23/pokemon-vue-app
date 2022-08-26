import { mount } from "@vue/test-utils";
import { describe, expect } from "vitest";
import PokemonApi from "@/../src/api/pokemonApi.js";

describe("pokemonApi", () => {
  test("axios debe estar configurado con la api de pokemon", () => {
    // console.log(PokemonApi);
    expect(PokemonApi.defaults.baseURL).toBe("https://pokeapi.co/api/v2/pokemon");
//    const wrapper = mount(PokemonApi);
//    expect(wrapper.vm.pokemon).toBe("pikachu");
  });
});