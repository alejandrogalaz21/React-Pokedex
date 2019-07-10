import React from 'react'
import './pokecard.css'

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
// const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'
// const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

const Pokecard = ({ name, type, exp, src }) => {

  return (
    <div className="pokecard">
      <h1 className="pokecard-title">{name}</h1>
      <div className="pokecard-image">
        <img src={src} alt={name} />
      </div>
      <div className="pokecard-data">Type: {type}</div>
      <div className="pokecard-data">EXP: {exp}</div>
    </div>
  )
}

export default Pokecard