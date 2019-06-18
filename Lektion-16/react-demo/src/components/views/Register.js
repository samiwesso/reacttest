import React, { Component } from 'react'
import RegisterForm from '../forms/RegisterForm'

class Register extends Component {


    render() {
        return(
            <div className="container my-5">
                <h1>Register</h1>
                <RegisterForm />
            </div>   
        )
    }

}

export default Register