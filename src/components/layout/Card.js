import React, { Component } from 'react';

import spinner from '../pokemon/loading.gif'
import { StyledLink, Sprite, CardStyle } from '../../utils/StyleComponent'


export default class Card extends Component {
    state = {
        name: '',
        index: '',
        typeClass: '',
        imageLoading: true,
        toManyRequests: false
    }

    componentDidMount() {
        const {name, index, imageUrl, typeClass} = this.props;

        this.setState({
            name, index, imageUrl, typeClass
        })
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <StyledLink to={`${this.state.typeClass}/${this.state.index}`}>
                    <CardStyle className="card">
                        {this.state.imageLoading ? (
                            <img alt="spinner" src={spinner} style={{width: '100px', heigth: '100px'}} className="card-img-top rounded mx-auto d-block mt-2"></img>
                        ) : null }
                        <Sprite 
                            className="card-img-top rounded mx-auto mt-2"
                            onLoad={() => this.setState({imageLoading: false})}
                            onError={() => this.setState({toManyRequests: true})}
                            src={this.state.imageUrl}
                            style= {
                                this.state.toManyRequests ? { display: "none" } : 
                                this.state.imageLoading ? null : { display: "block" } 
                            }
                        />
                        {this.state.toManyRequests ? (
                            <h6 className="mx-auto">
                                <span className="badge badge-danger mt-2"></span>
                            </h6>
                        ) : null }
                        <div className="card-header">
                            <h6 className="card-title text-center">
                                {this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}
                            </h6>
                        </div>
                    </CardStyle>
                </StyledLink>
            </div>
        )
    }
}
