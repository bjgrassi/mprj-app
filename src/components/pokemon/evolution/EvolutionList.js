import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class EvolutionList extends Component {
    state = {
        name: '',
        evolutionOne: '',
        evolutionTree: '',
        pokemonEvolution1: ''
    }

    async componentDidMount() {
        const { index, name } = this.props;

        // Urls for pokemon information
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;

        const evolutionRes = await Axios.get(speciesUrl,{headers: {'Access-Control-Allow-Origin': '*'}});

        const evolutionUrl = evolutionRes.data.evolution_chain.url
        
        const evolutionArray = await Axios.get(evolutionUrl)
        
        const evolutionOne = evolutionArray.data.chain.evolves_to.map(res => {
            return res.species
        })

        const evolutionTwoComing = evolutionArray.data.chain.evolves_to.map(res => {
            return res.evolves_to
        })

        const evolutionTwo = evolutionTwoComing.map(res => { return res[0].species })

        const pokemonName = name;
        console.log(pokemonName)
        const pokemonEvolution1 = evolutionOne.map(name => { return name.name} );
        const pokemonEvolution2 = evolutionTwo.map(name => { return name.name} );
        console.log(pokemonEvolution1)

        this.setState({
            name, index, evolutionOne, evolutionTwo, pokemonEvolution1
        })
    }

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title text-center">Evolutions</h5>
                { this.state.evolutionTwo ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.state.evolutionOne.map(pokemon => (
                                    <tr key={pokemon.url} >
                                        <th scope="row">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</th>
                                        <td><Link to={`${pokemon.url.split("/")[pokemon.url.split('/').length - 2]}`} target="_blank">Go to Page</Link></td>
                                    </tr>
                                ))}
                                {this.state.evolutionTwo.map(pokemon => (
                                    <tr key={pokemon.name} >
                                        <th scope="row">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</th>
                                        <td><Link to={`${pokemon.url.split("/")[pokemon.url.split('/').length - 2]}`} target="_blank">Go to Page</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                ): ( <h5>Don't have evolutions</h5> )}
            </div>
        )
    }
}