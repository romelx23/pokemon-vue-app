import PokemonOptions from "@/../../src/components/PokemonOption.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { beforeEach, describe, expect } from "vitest";
import { pokemonsMock } from "../mocks/pokemons.mock";

describe("PokemonOptions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(PokemonOptions, {
      propsData: {
        pokemons: pokemonsMock,
      },
    });
  });

  test("debe de hacer match con el Snapshot", () => {
    // diferencia entre toMatchSnapshot y toMatchInlineSnapshot
    // toMatchSnapshot: el snapshot se guarda en un archivo
    // toMatchInlineSnapshot : el snapshot se guarda en el mismo archivo
    // console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("debe de mostrar las 4 opciones correctamente", () => {
    const li = wrapper.findAll("li");
    expect(li.length).toBe(5);
    li.forEach((element, index) => {
      const pokemon = pokemonsMock[index];
      expect(element.text()).toBe(pokemon.name);
    });
  });
  test('debe emitir "selection" con su respectivo parámetro al hacer click', () => {
    const [li1, li2, li3, li4, li5] = wrapper.findAll("li");
    // estimulo
    li1.trigger("click");
    li2.trigger("click");
    li3.trigger("click");
    li4.trigger("click");
    li5.trigger("click");
    expect(wrapper.emitted("selectPokemon").length).toBe(5);
    expect(wrapper.emitted("selectPokemon")[0]).toEqual([
      { name: "bulbasaur", id: 1 },
    ]);
    expect(wrapper.emitted("selectPokemon")[1]).toEqual([
      { name: "ivysaur", id: 2 },
    ]);
    // console.log(wrapper.emitted("selectPokemon"));
  });
});
