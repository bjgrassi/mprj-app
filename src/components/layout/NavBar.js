import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
                <div className="container">
                    <Link to="/" className="navbar-brand mr-0 col-md-2 col-sm-4 navbar-link">Pokemons</Link>
                    <Link to="/berry" className="navbar-brand mr-0 col-md-2 col-sm-4 navbar-link">Berries</Link>
                    <span className="navbar-brand mr-0 col-md-8 col-sm-4 text-right">MPRJ Challenge</span>
                </div>
            </nav>
        )
    }
}
