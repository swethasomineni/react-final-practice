import axios from 'axios'
import React, { Component } from 'react'


export class Form1 extends Component {
    state = {
        username: '',
        passWord: '',
        color: '',
        dob: '',
        accept:false
    }
    getInput = (event) => {
        this.setState({ username: event.target.value })

    }
    getInputPassWord = (event) => {
        this.setState({ passWord: event.target.value })
    }
    handleColorChange = (e) => {
        const color = e.target.value;
        this.setState({ color });
    };
    handleDateChange = (event) => {
        this.setState({dob:event.target.value})
    }
    changeCheck = (event) => {
        console.dir(event.target.checked)
        this.setState({ accept:event.target.checked})
    }
    onSubmit = (event) => {
        event.preventDefault();
        // https://reqres.in/api/login
        console.log(this.state);
        const Details = {
            email: this.state.username,
            password: this.state.passWord,
            color: this.state.color,
            dob:this.state.dob
        }
        axios.post(' https://reqres.in/api/login', Details)
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group ">
                                <label>username</label>
                                <input value={this.state.username}
                                    onChange={this.getInput}
                                    className="form-control"
                                    placeholder="enter username"></input>
                            </div>
                            <div className="form-group mb-3">
                                <label>password</label>
                                <input type="password" value={this.state.passWord}
                                    onChange={this.getInputPassWord}
                                    className="form-control" placeholder="enter password"></input>
                                <div className="form-group mt-3">
                                    <label>Desired color:</label>
                                    <select  className="form-control"  value={this.state.color} onChange={this.handleColorChange} >
                                        <option></option>
                                        <option value="blue">Blue</option>
                                        <option value="red">Red</option>
                                        <option value="green">Green</option>
                                        <option value="yellow">Yellow</option>
                                    </select>
                                </div>
                               
                                <div className="form-group mt-3" >
                                <label>dob</label>
                                    <input className="form-control" placeholder="enter dob" value={this.state.dob} onChange={this.handleDateChange} type="date"></input>
                                </div>
                                <div className="form-group mt-3">
                                    <label>acceptedagreement</label>
                                    <input type="checkbox" value={this.state.accept} onChange={this.changeCheck}></input>
                                </div>
                                <button disabled={!this.state.accept} className="button btn btn-primary mt-3" >submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default Form1

