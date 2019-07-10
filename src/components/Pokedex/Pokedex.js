import React, { Component } from 'react'
import './pokedex.css'
import Pokecard from './../Pokecard/Pokecard'

export class Pokedex extends Component {

  render() {
    return (
      <div className="pokedex">
        <h4>Pokemon's</h4>
        <div className="pokedex-cards">
          {this.props.pokemons.map((p) => (
            <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex