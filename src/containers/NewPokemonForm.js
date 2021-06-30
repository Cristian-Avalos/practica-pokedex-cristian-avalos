import React, { useEffect, useState } from 'react'
import CreatePokemon from '../components/CreatePokemon'

const NewPokemonForm = () => {

  return (
      <>
        <div className="ContainerA1">
          <h1 className="titleStyle">Create Pokémon</h1><br></br>
          <CreatePokemon /> 
        </div>
      </>
  )
}

export default NewPokemonForm;