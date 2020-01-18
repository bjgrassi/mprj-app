import React, { Component } from 'react'
import Axios from 'axios';

export default class BerryList extends Component {
    state = {
        name: ''
    }

    async componentDidMount() {
        const url = `https://pokeapi.co/api/v2/berry/`;

        const resBerries = await Axios.get(url);


        console.log(resBerries.data.results)

        this.setState({
            name: resBerries.data.results
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.name ? (
                    <h6>{this.state.name.map(berry => (
                        <div className="card" key={berry.name}>
                            <div className="card-header">
                                <h6 className="card-title text-center">
                                    {berry.name.charAt(0).toUpperCase() + berry.name.slice(1)}
                                </h6>
                            </div>
                        </div>
                    ))}</h6>
                ) : (
                    <h1> Searching Berries...</h1>
                )}
            </React.Fragment>
        )
    }
}
