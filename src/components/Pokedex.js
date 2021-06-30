import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addNewPokemonToTheList } from '../actions/pokemonListActions'
import { Link } from 'react-router-dom'

const Pokedex = ({ name, abilities, weight, pokemonImage, addNewPokemon, state }) => {

  const [labelsavePokemon, setlabelsavePokemon] = useState(false);
  function ValidateSavePokemon(){
    setlabelsavePokemon(true)
    addNewPokemon({ name, abilities, weight, pokemonImage })
  }

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setlabelsavePokemon(false)
    }, 2000);
    return () => {
      window.clearInterval(timer);
    };
  }, [labelsavePokemon]);

  return (
    
      <div class="container2">
        <a href="#" class="users">
          <img src={pokemonImage} class="image--cover img-responsive" />
          <p class="user-info">
            <span class="header-username">Pokémon name: {name}</span>
            <span style={{color: "darkblue", fontWeight: "100"}}>Weight: {weight} KG</span>
            <span style={{color: "darkblue", fontWeight: "100"}}>Abilities: 
              { !abilities ? <div></div> : (abilities.map((abilitie) => {return (<label>{abilitie}, </label>)}))}
            </span>
          </p>
        </a>
        <button onClick={() => ValidateSavePokemon()} className="buttonSave">Save pokemon</button>{' '}
        {!labelsavePokemon ? <p></p> : <p>Pokémon added to list </p>}
      </div>
    
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addNewPokemon: (pokemon) => dispatch(addNewPokemonToTheList(pokemon))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
