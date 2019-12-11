import React from 'react';
import '../css/register.css'
import { Component } from 'react';
import CRUDService from "../services/CRUDService";
class Registration extends React.Component {

    constructor() {
        super();
        this.CRUDServiceObj = new CRUDService();
    }

    state = {
        name: '',
        email: '',
        address: '',
        salary: '',
        password: ''
    }

    Change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleName(event) {
        debugger
        this.setState({
            name: event.target.value
        })
    }

    handleAddress(event) {
        debugger
        this.setState({
            address: event.target.value
        })
    }


    handleSalary(event) {
        debugger
        this.setState({
            salary: event.target.value
        })
    }

    handleEmail(event) {
        debugger
        this.setState({
            email: event.target.value
        })
    }

    onSubmit = e => {
        debugger
        e.preventDefault();
        //  console.log("state" + this.state);


        this.CRUDServiceObj.addNewRecord(this.state, "/Save").then(
            response => {
                alert("Registered Successfully...")
            }

        );
        this.props.history.push("/login");


    }
    render() {
        return (<div className="container-fluid">
            <div className="row justify-content-md-center">
                <form onSubmit={this.handleSubmit}>

                    <div className="row">
                        <label id="inputLable">
                            Name </label>
                        <input type="text" name="name" autoComplete="off" id="inputID" onChange={e => this.handleName(e)} class="form-control" value={this.state.name} placeholder="name..." aria-label="Username" aria-describedby="basic-addon1" />

                    </div>
                    <div className="row">
                        <label id="inputLable">
                            Email </label>
                        <input type="text" name="email" autoComplete="off" id="inputID" onChange={e => this.handleEmail(e)} class="form-control" value={this.state.email} placeholder="email..." aria-label="Username" aria-describedby="basic-addon1" />

                    </div>
                    <div className="row">
                        <label id="inputLable">
                            Address</label>
                        <input type="text" name="address" autoComplete="off" id="inputID" onChange={e => this.handleAddress(e)} class="form-control" value={this.state.address} placeholder="address..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="row">
                        <label id="inputLable">
                            Salary </label>
                        <input type="text" name="salary" autoComplete="off" id="inputID" onChange={e => this.handleSalary(e)} class="form-control" value={this.state.salary} placeholder="salary..." aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="row">
                        <label id="inputLable">
                            Password </label>
                        <input type="text" name="password" autoComplete="off" id="inputID" onChange={e => this.Change(e)} class="form-control" value={this.state.password} placeholder="password..." aria-label="Username" aria-describedby="basic-addon1" />

                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary btn-sm" onClick={e => this.onSubmit(e)} >Submit</button>

                </form>
            </div >
        </div >)
    }
}
export default Registration;