import React, { Component } from 'react'
import Axios from 'axios';

export default class EvolutionList extends Component {
    state = {
        evolution: '',
        pokemonIndex: ''
    }

    async componentDidMount() {
        const { pokemonIndex } = this.props;
    
        // Urls for pokemon information
        const pokemonUrl = `https://pokeapi.co/api/v2/evolution-trigger/${pokemonIndex}/`;

        const pokemonRes = await Axios.get(pokemonUrl);
        console.log(pokemonRes)

        const evolution = 'Name'
            console.log(evolution)

        this.setState({
            evolution,
            pokemonIndex
        })
    }

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title text-center">Evolution List</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">Picture</div>
                    </div>
                    <div className="col-md-6">
                        {this.state.evolution ? (
                            <h6>{this.state.evolution}</h6>
                        ) : (
                            <h1> Don't have evolutions</h1>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
