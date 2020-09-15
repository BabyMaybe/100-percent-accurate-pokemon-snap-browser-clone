import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemon = createAsyncThunk(
  'pokemon/fetchPokemon',

  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    const pokemon = await response.json();

    return pokemon.results;
  },

);

export const pokemonSlice = createSlice({
  name: 'pokemon',

  initialState: {
    status: 'idle',
    error: null,
    pokemon: [],
  },
  extraReducers: {
    [fetchPokemon.pending]: state => {
      state.status = 'loading';
    },
    [fetchPokemon.fulfilled]: (state, action) => {
      state.pokemon = action.payload;
      state.status = 'succeeded';
    },
    [fetchPokemon.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },

});

export default pokemonSlice.reducer;

export const pokemonSelector = state => state.pokemon;
