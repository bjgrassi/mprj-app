import React, { Component } from 'react'
import axios from 'axios'

import Card from "../layout/Card"

import { StyledLink } from '../../utils/StyleComponent'

export default class PokemonList extends Component {
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        index: [],
        imageUrl: null,
        pokemon: null,
        prevPage: null,
        nextPage: null
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
