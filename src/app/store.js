import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import pokemonReducer from '../features/PokemonLoader/pokemon.slice';

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: { pokemon: pokemonReducer },
  middleware,
});
