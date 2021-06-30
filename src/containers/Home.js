import React, { useEffect, useState } from 'react'
import Pokedex from '../components/Pokedex'
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../assets/styles/containers/Home.css'

const Home = () => {
  const [currentPokemonData, setCurrentPokemonData] = useState({})
  const [currentPokemonID, setCurrentPokemonID] = useState(1)
  const getPokemonDataByIDAndSetData = async () => {
    if (!currentPokemonID) {
      return
    }
    const pokemonData = await axios.get(`https://pokeapi.co/api/v2/pokemon/${currentPokemonID}`)
    const { data } = pokemonData
    const { abilities, name, weight } = data
    const allAbilities = []
    abilities.forEach((abilityData) => {
      allAbilities.push(abilityData.ability.name)
    })
    setCurrentPokemonData({
      abilities: allAbilities, name, weight, pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPokemonID}.png`
    })

  }

  useEffect(() => {
    getPokemonDataByIDAndSetData()
  }, [currentPokemonID])

  return (
    <div className="homeContainer">
      <nav>
          <div class="cont">
              <label>search by id</label>
              <input type="search" placeholder="in the pokedex" title="Presione Esc para supender la búsqueda" onChange={(e) => setCurrentPokemonID(e.target.value)} />
          </div>
      </nav>

      <div className="container">
        <h1 className="titleStyle">Pokedex</h1>
        <button className="buttonAgregar"><Link to="/pokemonList" style={{textDecoration: "none"}}> Go to pokémon list</Link></button>
        <button className="buttonAgregar"><Link to="/createPokemon" style={{textDecoration: "none"}}>create Pokémon</Link></button>
      </div>

      <Pokedex name={currentPokemonData.name} abilities={currentPokemonData.abilities} weight={currentPokemonData.weight} pokemonImage={currentPokemonData.pokemonImage} />  

    </div>
  )
}

export default Home
