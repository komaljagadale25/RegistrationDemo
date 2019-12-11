import React from 'react';
import { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="container">
                <h3>Login</h3>
                <div className="row">
                    <label id="inputLable">
                        Name: </label>
                    <input type="text" autoComplete="off" id="inputID" class="form-control" placeholder="address..." aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="row">
                    <label id="inputLable">
                        Password: </label>
                    <input type="text" autoComplete="off" id="inputID" class="form-control" placeholder="salary..." aria-label="Username" aria-describedby="basic-addon1" />
                </div><br></br>
                <button type="submit" class="btn btn-primary btn-sm">Login</button>
            </div>)
    }
}

export default Login;