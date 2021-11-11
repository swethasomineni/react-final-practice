import axios from 'axios'
import React, { Component } from 'react'


export class Form extends Component {
    state = {
        username: '',
        passWord: ''
    }
    getInput = (event)=>{
        this.setState({ username: event.target.value })
       
    }
    getInputPassWord = (event) => {
        this.setState({passWord:event.target.value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        // https://reqres.in/api/login
        console.log(this.state); 
        const Details = {
            email: this.state.username,
            password:this.state.passWord
        }
        axios.post(' https://reqres.in/api/login', Details )
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
                                <input  type="password" value={this.state.passWord}
                                    onChange={this.getInputPassWord}  
                                    className="form-control" placeholder="enter password"></input>
                                <button className="button btn btn-primary mt-3" >submit</button>
                            </div>
                        </form>
                    </div>
                    </div>
               
           </div>
        )
    }
}

export default Form
