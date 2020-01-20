import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class EvolutionList extends Component {
    state = {
        name: '',
        index: ''
    }

    async componentDidMount() {
        const { index } = this.props.match.params;
        const { name } = this.props;

        // Urls for pokemon information
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;

        const evolutionRes = await Axios.get(speciesUrl);

        const evolutionUrl = evolutionRes.data.evolution_chain.url
        
        const evolutionArray = await Axios.get(evolutionUrl)

        let hasEvolution1 = true;
        let hasEvolution2 = true
        
        const evolutionOne = evolutionArray.data.chain.evolves_to.map(res => {
            if(res.species.name === name)
                hasEvolution1 = false

            return res.species
        })

        const evolutionTwoComing = evolutionArray.data.chain.evolves_to.map(res => {
            return res.evolves_to
        })

        const evolutionTwo = evolutionTwoComing.map(res => { 
            if(res[0].species.name === name)
                hasEvolution2 = false

            return res[0].species 
        })

        this.setState({
            name, index, evolutionOne, evolutionTwo, hasEvolution1, hasEvolution2
        })
    }

    render() {
        return (
            <div className="card-body">
                { this.state.hasEvolution2 ? (<h5 className="card-title text-center">Evolutions</h5>): (null)}
                { this.state.hasEvolution2 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                            <tbody>
                                { this.state.hasEvolution1 ? ( 
                                    this.state.evolutionOne.map(pokemon => (
                                        <tr key={pokemon.url} >
                                            <th scope="row">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</th>
                                            <td><Link to={`${pokemon.url.split("/")[pokemon.url.split('/').length - 2]}`} target="_blank">Go to Page</Link></td>
                                        </tr>
                                    ))
                                ): (null)}
                                {this.state.evolutionTwo.map(pokemon => (
                                    <tr key={pokemon.name} >
                                        <th scope="row">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</th>
                                        <td><Link to={`${pokemon.url.split("/")[pokemon.url.split('/').length - 2]}`} target="_blank">Go to Page</Link></td>
                                    </tr>
                                ))}
                            </tbody>
                    </table>
                ): ( <h5 className="card-title text-center">Don't have evolutions</h5> )}
            </div>
        )
    }
}