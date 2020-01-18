import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" >
                <div className="container">
                    <Link to="/" className="navbar-brand mr-0 col-md-5 col-sm-4 col-xs-6 navbar-link">Home</Link>
                    <a className="navbar-brand mr-0 col-md-7 col-sm-8 col-xs-6">Pokemon - Challenge</a>
                </div>
            </nav>
        )
    }
}
