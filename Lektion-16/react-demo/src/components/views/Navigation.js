import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class Navigation extends Component {


    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <div id="navbarNav" className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">Hem</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/profile" activeClassName="active" className="nav-link">Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/" activeClassName="active" className="nav-link">More</NavLink>
                            </li>
                            </ul>
                        <ul className="navbar-nav">
                        <li className="nav-item">
                                <NavLink exact to="/login" activeClassName="active" className="nav-link">Logga in</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/register" activeClassName="active" className="nav-link">Registrera</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        )
    }

}

export default Navigation