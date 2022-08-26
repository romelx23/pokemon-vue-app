import { beforeEach, describe, expect, it, vi } from "vitest";
import pokemonPage from "@/../../src/pages/PokemonPage.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { pokemonsMock } from "../mocks/pokemons.mock";
describe("PokemonPage Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(pokemonPage);
  });
  test("debe de hacer match con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("debe de llamar el mixPokemon al montar", () => {
    expect(wrapper.vm.mixPokemon).toBe(undefined);
    // console.log(pokemonPage.setup(""), "metodos");
    // antes de usar el spyse debe de montar el componente
    // const mixPokemonArraySpy = vi.spyOn(pokemonPage.methods, "mixPokemonArray");
    // const wrapper = mount(pokemonPage);
    // expect(mixPokemonArraySpy).toHaveBeenCalled();
  });
  test("debe hacer match con el snapshop", () => {
    //diferencia entre el shallowMount y el mount
    // el shallowMount no raderiza los componentes hijos
    // el mount si los renderiza
    // const wrapper = shallowMount(pokemonPage);
    const wrapper = mount(pokemonPage, {
      data() {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: false,
          message: "",
          isCorrect: false,
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("debe de mostrar los componentes de PokemonPicture y PokemonOption", () => {
    const wrapper = mount(pokemonPage, {
      global: {
        stubs: ["PokemonPicture", "PokemonOption"],
      },
      data: () => ({
        pokemonArr: pokemonsMock,
        pokemon: pokemonsMock[0],
        showPokemon: false,
        showAnswer: false,
        message: "",
        isCorrect: false,
      }),
    });
    const picture = wrapper.find("pokemonpicture-stub");
    const option = wrapper.find("pokemonoption-stub");
    // PokemonPicture debe existir
    expect(picture.exists()).toBe(false);
    // PokemonOptions debe existir
    expect(option.exists()).toBe(false);
    // PokemonPicture attribute pokemonid=5
    // expect(picture.attributes("pokemonid")).toBe("5");
    // PokemonOptions attribute pokemons toBe true
    // expect(option.attributes("pokemons")).toBeTruthy();
  });
  test("pruebas con checkAnswer", async () => {
    const wrapper = mount(pokemonPage, {
      data: () => {
        return {
          pokemonArr: pokemonsMock,
          pokemon: pokemonsMock[0],
          showPokemon: false,
          showAnswer: true,
          message: "",
          isCorrect: false,
        };
      },
    });

    await wrapper.vm.selectPokemon(5);
    expect(wrapper.find("h2").exists()).toBe(true);
    expect(wrapper.vm.showPokemon).toBe(true);
    expect(wrapper.find("h2").text()).toBe(`Correcto ${pokemon[0].name}`);
    await wrapper.vm.selectPokemon(10);
    expect(wrapper.vm.message).toBe(`Oops era ${pokemon[0].name} ...`);
  });
});
