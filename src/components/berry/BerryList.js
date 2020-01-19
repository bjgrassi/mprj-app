import React, { Component } from 'react'
import Axios from 'axios';
import Card from '../layout/Card';

export default class BerryList extends Component {
    state = {
        urlBerry: "https://pokeapi.co/api/v2/berry/",
        berry: '',
        imageUrl: '',
        flavor: '',
        potency: ''
    }

    async componentDidMount() {

        const response = await Axios.get(this.state.urlBerry);

        this.setState({
            berry: response.data.results,
            imageUrl: 'https://github.com/PokeAPI/sprites/blob/master/sprites/items/berries/',
        })
    }

    render() {
        return (
            <React.Fragment>
            { this.state.berry ? (
                <div className="row">
                    {this.state.berry.map(berry => (
                        <Card 
                            key={berry.name}
                            name={berry.name}
                            url={berry.url}
                            index={berry.url.split("/")[berry.url.split('/').length - 2]}
                            imageUrl={`${this.state.imageUrl}${berry.name}-berry.png?raw=true`}
                            typeClass="berry"
                        />
                    ))}
                </div>
                ) : (
                <h1>Loading Berries...</h1>
            )}
            </React.Fragment> 
        )
    }
}
