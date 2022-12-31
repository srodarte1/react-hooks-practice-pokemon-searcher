import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemon] = useState([])
  const [searchPokes, setSearchPokes] = useState("")
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch('http://localhost:3001/pokemon')
        const pokeList = await res.json()
        setPokemon(pokeList)
      } catch (error){
        alert (error)
      }
    }
    fetchPokemon()
  
    
  }, [])

  const filteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchPokes.toLowerCase()))
  


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setPokemon={setPokemon} />
      <br />
      <Search searchPokes={searchPokes} setSearchPokes={setSearchPokes} />
      <br />
      <PokemonCollection pokemons={filteredPokemons} />
    </Container>
  );
}

export default PokemonPage;
