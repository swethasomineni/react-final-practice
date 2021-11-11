import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div >
                <ul className="page">
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/dashboard'><li>Dashboard</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/axios'><li>Axios</li></Link>
                    <Link to='/forms'><li>form</li></Link>
                    <Link to='/form1'><li>form1</li></Link>
                    <Link to='/form2'><li>form2</li></Link>
                    <Link to='/task1'><li>task1</li></Link>
                    <Link to='/task2'><li>task2</li></Link>
                    <Link to='/task3'><li>Task3</li></Link>
                </ul>
            </div>
        )
    }
}

export default Navbar
