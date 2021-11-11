import React, { Component } from 'react'

export class Task2 extends Component {
    state = {
        mail: '',
        message: false,
        showMail: true
    }
    changeMail = (event) => {
        console.log(event.target.value)
        this.setState({ mail: event.target.value })
    }
    changeButton = () => {
        this.setState({ message: true })
        this.setState({ showMail: false })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <label>mail</label>

                    {this.state.message &&
                        <p>welcome to subscribe</p>}
                    {this.state.showMail &&
                        <input value={this.state.mail} onChange={this.changeMail} className="form-control mb-3" />}
                    <button onClick={this.changeButton} className="btn btn-danger" disabled={!this.state.mail}>subscribe</button>
                </div>


            </div>
        )
    }
}

export default Task2
