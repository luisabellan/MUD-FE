import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//Styled Components
import { Nav } from "./StyledWidgets";

//contexts
import GameProvider from "../contexts/GameProvider";

//Components
import Registration from "./Registration";
import Login from "./Login";
import GameView from "./game-components/GameView.js";
import PrivateRoute from "./PrivateRoute";
import WelcomePage from "./WelcomePage";

const AppRouter = () => {
  return (
    <Router>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/game-view">Game</Link>
        <Link to='/' onClick={() => {
            localStorage.removeItem("token");}}>LogOut</Link>
      </Nav>

      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />

        <GameProvider>
          <PrivateRoute path="/game-view" component={GameView} />
        </GameProvider>
      </Switch>
    </Router>
  );
};

export default AppRouter;

