import { ADD_POKEMON } from '../actions/actionsTypes'
const initialState = {
  pokemonList: []
}

const pokemonListData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return { ...state, pokemonList: [...state.pokemonList, action.payload] }

    default:
      return state;
  }
}
export default pokemonListData