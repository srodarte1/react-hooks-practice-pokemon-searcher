import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemons}) {
  const mappedPokemon = pokemons.map(pokemon => 
    <PokemonCard key={pokemon.id}{...pokemon} />)
  
  return (
    <Card.Group itemsPerRow={6}>
      {mappedPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
