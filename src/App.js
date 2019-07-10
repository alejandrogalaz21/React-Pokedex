import React from 'react'
import Pokedex from './components/Pokedex/Pokedex'
import Pokemon from './components/Pokemon/Pokemon'
import Home from './components/Pages/Home'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom"


function App() {
  const defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', exp: 62, src: require('./assets/img/004.png') },
      { id: 7, name: 'Squirtle', type: 'water', exp: 63, src: require('./assets/img/007.png') },
      { id: 11, name: 'Metapod', type: 'bug', exp: 72, src: require('./assets/img/011.png') },
      { id: 12, name: 'Butterfree', type: 'flying', exp: 178, src: require('./assets/img/012.png') },
      { id: 25, name: 'Pikachu', type: 'electric', exp: 112, src: require('./assets/img/025.png') },
      { id: 39, name: 'Jigglypuff', type: 'normal', exp: 95, src: require('./assets/img/039.png') },
      { id: 94, name: 'Gengar', type: 'poison', exp: 225, src: require('./assets/img/094.png') },
      { id: 133, name: 'Eevee', type: 'normal', exp: 65, src: require('./assets/img/133.png') }
    ]
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={props => <Home {...props} pokemons={defaultProps.pokemon} />}
          />
          <Route
            path="/pokemon/:id"
            exact
            render={props => <Pokemon {...props} pokemons={defaultProps.pokemon} />}
          />



        </Switch>
      </Router>
    </div>
  )
}

export default App