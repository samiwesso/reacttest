import React, { Component } from 'react'
//import http from 'axios'
import { register } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { authError } from '../../store/reducers/authReducer'


class RegisterForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstname: '', 
            lastname: '', 
            email: '', 
            password: '', 
            addressline: '', 
            zipcode: '', 
            city: '', 
            country: 'Sweden', 
            termsaccept: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.id] : e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()

        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            addressline: this.state.addressline,
            zipcode: this.state.zipcode,
            city: this.state.city,
            country: this.state.country,
            email: this.state.email,
            password: this.state.password,
            termsaccept: this.state.termsaccept
        }
        
        this.props.register(user)
    }

    render() {
        const {firstname, lastname, email, password, addressline, zipcode, city, country, termsaccept} = this.state;
        const { authError, token } = this.props;        

        if(this.props.regsuccess) {
            return( <Redirect to="/login" />)
        }

        return (
            <form onSubmit={this.handleSubmit}>  
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" className="form-control" id="firstname" placeholder="First Name" value={firstname} onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Last Name" value={lastname} onChange={this.handleChange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={this.handleChange} />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="addressline">Address</label>
                    <input type="text" className="form-control" id="addressline" placeholder="1234 Main St" value={addressline} onChange={this.handleChange} />
                </div>

                <div className="form-row">
                    <div className="form-group col-md-2">
                        <label htmlFor="zipcode">Zip</label>
                        <input type="text" className="form-control" id="zipcode" value={zipcode} onChange={this.handleChange} />
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" value={city} onChange={this.handleChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="country">Country</label>
                        <select id="country" className="form-control" value={country} onChange={this.handleChange}>
                            <option value="Sweden">Sweden</option>
                            <option value="Norway">Norway</option>
                            <option value="Finnland">Finnland</option>
                            <option value="Denmark">Denmark</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="termsaccept" value={termsaccept} onChange={this.handleChange} />
                        <label className="form-check-label" htmlFor="termsaccept">
                            I accept the user terms and agreement.
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      //  authError: state.auth.authError,
      //  token: state.auth.token,
      //  regsuccess: state.auth.regsuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        register: (credentials) => dispatch(register(credentials))
    }
}


//export default (RegistrationForm)

 export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm)