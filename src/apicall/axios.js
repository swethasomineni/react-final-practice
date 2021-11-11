import React, { Component } from 'react'
import axios from 'axios'

export class Axios extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users').
            then(response => {
                console.log(response);
                this.setState({ list: response.data });
            })
    }
    render() {
        // const { name, id, email   } = this.state.list.length > 0 && this.state.list[0]

        return (
            <div>
                {/*                 
                {this.state.list.length > 0 && this.state.list[0].name}
                {id}
                {name}
                {email} */}
                <table className= "table table-bordered">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>id</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map(value => {
                            return (
                                <tr>
                                    <td>{value.name}</td>
                                    <td>{value.id}</td>
                                    <td>{value.email}</td>

                           </tr>
                       )
                   })
                       
                   }

                    </tbody>
                </table>

                {this.state.list.map(value => {
                    return (<div>
                        <div>{value.name}</div>
                        <div>{value.id}</div>
                    </div>)
                }
                )
                }
            </div>
        )
    }
}

export default Axios

