import React, { Component } from 'react'
import {Card,Button} from "react-bootstrap"

export default class Custcard extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.title }</Card.Title>
                        <Card.Text>
                           {this.props.description}
    </Card.Text>
                        <Button variant="primary">{this.props.end}</Button>
                    </Card.Body>
                </Card> 
            </div>
        )
    }
}

