import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'

class Main extends Component {


    render() {
        return(
            <main>
                <Switch>
                    <Route exact path='/' component={ Home } />
                    <Route path='/login' component={ Login } />
                    <Route path='/register' component={ Register } />
                    <Route path='/profile' component={ Profile } />
                </Switch>
            </main>   
        )
    }

}

export default Main