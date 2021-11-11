import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import Custcard from './custcard.js'


class Home extends Component {
    render() {
        return (
            <div>
                welcome to home page
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <Custcard title="jai" description="Some quick example text to build" end="clickme" />

                        </div>
                        <div class="col-md-4">
                            <Custcard title="jayanth" description="Some quick example text to build" end="clickme" />
                        </div>
                        <div class="col-md-4">
                            <Custcard title="swetha" description="Some quick example text to build" end="clickme" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
