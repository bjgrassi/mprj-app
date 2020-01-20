import React, { Component } from 'react'
import axios from 'axios'

import Card from "../layout/Card"
import Pagination from 'react-js-pagination';


export default class PokemonList extends Component {
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964",
        index: [],
        imageUrl: null,
        typeClass: 'pokemon',
        pokemon: null,
        itemsCountPerPage: '',
        activePage: '',
        isLoaded: false
    }

    handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
      }

    async componentDidMount() {
        const res = await axios.get(this.state.url)

        this.setState({ 
            pokemon: res.data.results,
            imageUrl: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/`,
            itemsCountPerPage: 20,
            activePage: 1,
            
        })
    }

    render() {
        let indexOfLastTodo = this.state.activePage * this.state.itemsCountPerPage;
        let indexOfFirstTodo = indexOfLastTodo - this.state.itemsCountPerPage;
        let renderedPokemons = this.state.pokemon && this.state.pokemon.slice(indexOfFirstTodo, indexOfLastTodo);
        return (
            <React.Fragment>
            { renderedPokemons ? (
                <div className="row">
                    {renderedPokemons.map(pokemon => (
                        <Card 
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                            index={pokemon.url.split("/")[pokemon.url.split('/').length - 2]}
                            imageUrl={`${this.state.imageUrl}${pokemon.url.split("/")[pokemon.url.split('/').length - 2]}.png?raw=true`}
                            typeClass={this.state.typeClass}
                        />
                    ))}
                    <div className="row col justify-content-center">
                        <Pagination 
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.itemsCountPerPage}
                            totalItemsCount={this.state.pokemon.length}
                            pageRangeDisplayed={8}
                            onChange={this.handlePageChange.bind(this)}
                            innerClass="pagination"
                            activeClass="active"
                            itemClass="page-item"
                            linkClass="page-link"
                            />
                    </div>
                </div>
                ) : (
                <h1>Loading Pokemons...</h1>
            )}
            </React.Fragment>
        )
    }
}
