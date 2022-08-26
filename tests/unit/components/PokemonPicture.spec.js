import { describe, expect } from "vitest";
import PokemonPicture from "@/../../src/components/PokemonPicture.vue";
import { mount, shallowMount } from "@vue/test-utils";

describe("PokemonPicture", () => {
  test("debe de hacer match con el SnapShot", () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonid: 1,
        showPokemon: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("debe de mostrar la imagen oculta y el pokemon 100", () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonid: 100,
        showPokemon: false,
      },
    });
    const [img1, img2] = wrapper.findAll("img");
    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    console.log(img1.classes());
    // console.log(img2.classes());
    expect(img1.classes("filter")).toBeTruthy();
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg
    expect(img1.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
    );
  });

  test("debe de mostrar la imagen del pokemon si showPokemon:true", () => {
    const wrapper = mount(PokemonPicture, {
      props: {
        pokemonid: 100,
        showPokemon: true,
      },
    });
    const img1 = wrapper.find("img");
    expect(img1.exists()).toBeTruthy();
    // console.log(img2.classes());
    expect(img1.classes("pokemon")).toBe(true);
    expect(img1.classes("fade-in")).toBe(false);
  });
});
