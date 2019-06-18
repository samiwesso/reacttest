import React, { Component } from 'react'

class LoginForm extends Component {
    render() {
        return(
            <div className="container mt-5">
                <form onSubmit={this.props.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">E-Postadress</label>
                        <input type="email" className="form-control" id="email" placeholder="Ange e-postadress" value={this.props.cred.email} onChange={this.props.onChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Lösenord</label>
                        <input type="password" className="form-control" id="password" placeholder="Ange lösenord" value={this.props.cred.password} onChange={this.props.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Logga in</button>
                </form>
            </div>
        )
    }
}

export default LoginForm