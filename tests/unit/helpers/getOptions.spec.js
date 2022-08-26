import { describe, expect } from "vitest";
import getPokemonOptions, { getPokemons, getPokemonsNames } from "../../../src/helpers/getOptions";

describe("getOptions helpers", () => {
  test("debe de regresar un arreglo de números", () => {
    const pokemons=getPokemons();
    console.log(pokemons.length);
    expect(pokemons.length).toBe(650);
    expect(pokemons[0]).toBe(1);
    expect(pokemons[500]).toBe(501);
    expect(pokemons[649]).toBe(650);
  });
  test('debe de retornar un arreglo de 4 elemntoscon nombres de pokemon', async() => { 
    const pokemons=await getPokemonsNames([1,2,3,4,5]);
    expect(pokemons).toStrictEqual([
        { name: 'bulbasaur', id: 1 },
        { name: 'ivysaur', id: 2 },
        { name: 'venusaur', id: 3 },
        { name: 'charmander', id: 4 },
        { name: 'charmeleon', id: 5 }
      ])
   });
   test('getPokemonOptions debe retornar un arreglo mezclado', async() => { 
    const pokemons=await getPokemonOptions();
    console.log(pokemons);
    expect(pokemons.length).toBe(5);
    expect(pokemons).toEqual([
        { 
            name: expect.any(String),
             id: expect.any(Number)
        },
        { 
            name: expect.any(String),
             id: expect.any(Number)
        },
        { 
            name: expect.any(String),
             id: expect.any(Number)
        },
        { 
            name: expect.any(String),
            id: expect.any(Number)
        },
        { 
            name: expect.any(String),
             id: expect.any(Number)
        }
      ])
    })
});