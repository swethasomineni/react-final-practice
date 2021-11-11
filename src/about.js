import React, { Component } from 'react'
import Custbutton from './custbutton';

class About extends Component {
    render() {
        return (
            <div>
                welcome to about page 
                <Custbutton variant="primary" text="clickme" />
                <Custbutton  />
            </div>
        )
    }
}
export default About