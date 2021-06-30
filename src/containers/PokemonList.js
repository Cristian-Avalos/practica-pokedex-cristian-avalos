import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonListData }) => {
  const [pokemonList, setPokemonList] = useState([])
  console.log('pokemonListData', pokemonListData)
  const RenderAbilities = ({ arrayAbilities }) => {
    return arrayAbilities.map((ability) => (<p>{ability}</p>))
  }

  return (
    <div className="containerList1">
       <h1 className="titleStyle"><button className="buttonBack"><Link to="/" style={{textDecoration: "none"}}>Back</Link></button>{' '}
      Pokémon List</h1>

      {pokemonListData.map((pokemonData) => {
        const { abilities, name, weight, pokemonImage } = pokemonData
        return <div class="containerList">
        <a href="#" class="users">
          <img src={pokemonImage} class="image--cover img-responsive" />
          <p class="user-info">
            <span class="header-username">Name: {name}</span>
            <span className="spanName">Weight: {weight} KG</span>
            <span className="spanName">Abilities:
              {!abilities ? <div></div> : (abilities.map((abilitie) => {return (<label> {abilitie}, </label>)}))} 
            </span>
          </p>
        </a>
      </div> 
      })}

    </div>

  )
}
const mapStateToProps = (state) => {
  return {
    pokemonListData: state.pokemonListData.pokemonList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // addNewPokemon: (pokemon) => dispatch(addNewPokemonToTheList(pokemon))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList)
