import React, { Component } from 'react'
import axios from 'axios'

import Card from "../layout/Card"

export default class PokemonList extends Component {
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964",
        index: [],
        imageUrl: null,
        typeClass: 'pokemon',
        pokemon: null
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url)

        this.setState({ 
            pokemon: res.data.results,
            imageUrl: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/`
        })
    }

    render() {
        return (
            <React.Fragment>
            { this.state.pokemon ? (
                <div className="row">
                    {this.state.pokemon.map(pokemon => (
                        <Card 
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                            index={pokemon.url.split("/")[pokemon.url.split('/').length - 2]}
                            imageUrl={`${this.state.imageUrl}${pokemon.url.split("/")[pokemon.url.split('/').length - 2]}.png?raw=true`}
                            typeClass={this.state.typeClass}
                        />
                    ))}
                </div>
                ) : (
                <h1>Loading Pokemons...</h1>
            )}
            </React.Fragment>
        )
    }
}
