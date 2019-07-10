import React, { Component } from 'react'
import Layout from './../Layout/Layout'
import Pokedex from './../Pokedex/Pokedex'

export default class Home extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-lg-12">
            <Pokedex pokemons={this.props.pokemons} />
          </div>
        </div>
      </Layout>
    )
  }
}
