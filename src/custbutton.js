import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Custbutton extends Component {
    render() {
        return (
            <div>
                <Button variant={this.props.variant}>{this.props.text}</Button>
            </div>
        )

    }

}
Custbutton.defaultProps = {
    variant: "warning",
    text: "hiiii"
}
