import React, { Component } from 'react'
import 

export class Task3 extends Component {
    state = {
        name: "swetha",
        color:""
    }
    changeButton = () => {
        this.setState({color:"red"})
    }
    render() {
        return (
            <div>
                {this.state.name}
                {this.state.color}
                <button   onClick={this.changeButton} className="btn btn-primary">click me</button> 
            </div>
        )
    }
}

export default Task3
