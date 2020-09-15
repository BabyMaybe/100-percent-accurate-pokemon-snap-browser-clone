import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
import counterReducer from '../features/counter/counterSlice';
import pokemonReducer from '../features/PokemonLoader/pokemon.slice';

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemon: pokemonReducer,
  },
  middleware,
});
