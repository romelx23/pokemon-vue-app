import pokemonApi from "../api/pokemonApi";

export const getPokemons=()=>{
    const pokemonsArr=Array.from(Array(650));
    return pokemonsArr.map((_,index)=>index+1);
}

const getPokemonOptions=async()=>{
    const mixPokemons=getPokemons().sort(()=>Math.random()-0.5);

    const pokemons=await getPokemonsNames(mixPokemons.slice(0,5));
    // console.table(pokemons);
    return pokemons;
}

export const getPokemonsNames=async(pokemons=[])=>{
    const [a,b,c,d,e]=pokemons;
    // const resp=await pokemonApi.get(`/1`)
    // console.log(resp.data.name,resp.data.id);
    const promiseArrr=[
        pokemonApi.get(`/${a}`),
        pokemonApi.get(`/${b}`),
        pokemonApi.get(`/${c}`),
        pokemonApi.get(`/${d}`),
        pokemonApi.get(`/${e}`),
    ]
    const [p1,p2,p3,p4,p5]=await Promise.all(promiseArrr)
    return [
        {name:p1.data.name,id:p1.data.id},
        {name:p2.data.name,id:p2.data.id},
        {name:p3.data.name,id:p3.data.id},
        {name:p4.data.name,id:p4.data.id},
        {name:p5.data.name,id:p5.data.id},
    ]
}

export default getPokemonOptions;