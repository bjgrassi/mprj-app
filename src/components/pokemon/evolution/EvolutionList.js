import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class EvolutionList extends Component {
    state = {
        name: '',
        index: ''
    }

    async componentDidMount() {
        const { index, name } = this.props;

        // Urls for pokemon information
        const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${index}/`;

        const evolutionRes = await Axios.get(speciesUrl, {headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }});

        const evolutionUrl = evolutionRes.data.evolution_chain.url
        
        const evolutionArray = await Axios.get(evolutionUrl)

        let noEvolution1 = true;
        let noEvolution2 = true
        
        const evolutionOne = evolutionArray.data.chain.evolves_to.map(res => {
            if(res.species.name === name)
                noEvolution1 = false

            return res.species
        })

        const evolutionTwoComing = evolutionArray.data.chain.evolves_to.map(res => {
            return res.evolves_to
        })

        const evolutionTwo = evolutionTwoComing.map(res => { 
            if(res[0].species.name === name)
                noEvolution2 = false

            return res[0].species 
        })

        

        this.setState({
            name, index, evolutionOne, evolutionTwo, noEvolution1, noEvolution2
        })
    }

    render() {
        const noEvolution1 = this.state.noEvolution1
        const noEvolution2 = this.state.noEvolution2
        return (
            <div className="card-body">
                <h5 className="card-title text-center">Evolutions</h5>
                { noEvolution2 ? (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Link</th>
                            </tr>
                        </thead>
                            <tbody>
                                { noEvolution1 ? ( 
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
                ): ( <h5>Don't have evolutions</h5> )}
            </div>
        )
    }
}