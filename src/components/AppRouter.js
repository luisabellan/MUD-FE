import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import Registration from './Registration';
import Login from './Login';

const AppRouter = () => {

    return (
        <Router>
            <div className='app-router'>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </div>

            <Switch>
                <Route exact path='/' />
                <Route path='/register' component={Registration} />
                <Route path='/login' component={Login} />
            </Switch>

        </Router>
    )
}

export default AppRouter;