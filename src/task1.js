import React, { Component } from 'react'

export class Task1 extends Component {
    state = {
        email: '',
        showMail:true
    }
    changeMail = (event) => {
        this.setState({ email:event.target.value})
    }
    changeMailTwo = () => {
        this.setState({showMail:false})
    }
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-4"></div>
                    <div className=" header col-md-4  mb-5">
                        <div class="card card-body">
                            <p style={{ backgroundColor: "red" }}>join the #tanstack newsletter!</p>
                            <p>
                                subscribe to get very occasional updates by email
                    </p>
                            {this.state.showMail && <input value={this.state.email} onChange={this.changeMail} className="form-control mb-3" type="text" placeholder="your email address"></input> }
                           
                            <button onClick={this.changeMailTwo} disabled={!this.state.email} className="btn btn-danger mb-3">Subscribe</button>
                            <p className="sentence">
                                we won't send you spam.unsubscribe at anytime
                        </p>
                            <p className="footer">powered by convertkit</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Task1
