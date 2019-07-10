import React, { Fragment } from 'react'
import './pokemon.css'
import teamRocket from './../../assets/teamRocket.gif'
import ReactJson from 'react-json-view'
import Layout from './../Layout/Layout'

const Pokemon = ({ match, pokemons }) => {

  const { id } = match.params
  const pokemon = pokemons.find(p => p.id == id)
  return (
    <Layout>
      <div className='pokemon'>
        {
          pokemon ?
            (
              <Fragment>
                <ReactJson src={pokemons} theme="monokai" />
                <ReactJson src={match} theme="monokai" />
                <ReactJson src={pokemon} />
              </Fragment>
            )
            :
            <img src={teamRocket} />
        }
      </div>
    </Layout>
  )
}

export default Pokemon