import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { pokemonSelector, fetchPokemon } from './pokemon.slice';

const PokemonLoader = () => {
  const dispatch = useDispatch();

  const { pokemon, status } = useSelector(pokemonSelector);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPokemon());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>{status}</h1>
      {pokemon.map(p => <h3 key={p.name}>{p.name}</h3>)}
    </div>
  );
};

export default PokemonLoader;
