import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokemonReducer from '../features/PokemonLoader/pokemon.slice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
});
