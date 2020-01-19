import React, { Component } from 'react'
import Axios from 'axios';

export default class BerryList extends Component {
    state = {
        name: '',
        next: '',
        urlBerry: '',
        flavor: '',
        potency: ''
    }

    async componentDidMount() {
        const url = `https://pokeapi.co/api/v2/berry/`;

        const response = await Axios.get(url);

        this.setState({
            name: response.data.results,
            next: response.data.next
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1>List of Berries</h1>
                {this.state.name ? (
                    <div>
                        {this.state.name.map(berry => (
                            <div className="card" key={berry.name}>
                                <div className="card-header">
                                    <h6 className="card-title text-center">
                                        {berry.name.charAt(0).toUpperCase() + berry.name.slice(1)}
                                    </h6>
                                    <div></div>
                                </div>
                            </div>
                        ))}
                        {this.state.next}
                    </div>
                ) : (
                    <h3> Searching Berries...</h3>
                )}
            </React.Fragment>
        )
    }
}
