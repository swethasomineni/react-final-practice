import React, { Component } from 'react'

export default class Pract extends Component {
    render() {
       const {name}=this.props
        return (
            <p>hello {name}</p>
        )
    }
}


