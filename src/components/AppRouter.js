import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import Registration from './Registration';
import Login from './Login';
import GameView from './game-components/GameView.js';

const AppRouter = () => {

    return (
        <Router>
            <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                <Link to='/game-view'>Game</Link>
            </div>

            <Switch>
                <Route exact path='/' />
                <Route path='/register' component={Registration} />
                <Route path='/login' component={Login} />
                <Route path='/game-view' component={GameView} />
            </Switch>

        </Router>
    )
}

export default AppRouter;