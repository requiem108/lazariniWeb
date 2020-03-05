import React, { Component } from 'react'

export default class figura extends Component {
    render() {
        return (
            <div className="container figuraLz">
                <div className="figuraLz_figura"></div>
                <h3 className="text-center">{this.props.text}</h3>
            </div>
        )
    }
}
