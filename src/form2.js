import React, { Component } from 'react'

export class Form2 extends Component {
    state = {
        isActive: true
    }
    handleShow = () => {
        this.setState({ isActive: !this.state.isActive})
    }
    render() {
         return (
            <div>
                {this.state.isActive && <div>hiiiiiiiiiiii</div>}
                <button onClick={this.handleShow}  className="btn btn-primary mb-3">click</button> 
              
            </div>
        )
    }
}

export default Form2
