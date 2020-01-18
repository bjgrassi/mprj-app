import React, { Component } from 'react'

export default class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }

    render() {
        const {name, url} = this.props;

        return (
            <div className="col-md-5 col-sm-6 mb-5">
                <div className="card">
                    <div className="card-header">
                        {name}
                    </div>
                </div>
            </div>
        )
    }
}
