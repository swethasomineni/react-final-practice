import React, { Component } from 'react'

 class Handle extends Component {
    constructor() {
        super();
        this.state = {
            count:0,
            name:"swe"
        }
    }
     handleClick = () => {
         this.setState({count:this.state.count+1})
     }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>clickme</button>
           </div>
        )
    }
}

export default Handle
