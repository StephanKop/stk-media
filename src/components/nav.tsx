import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Burger from "./burger";
import Home from "./pageHome";

const Nav = () => {
    const windowWidth = window.innerHeight;
    const isMobile = windowWidth < 900;
    return (
        <Router>
            {isMobile && (
                <Burger/>
            )}
            {!isMobile && (
            <div className={'navContainer'}>
                <nav className={'navContainer__nav'}>
                    <h1>STK Media</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/diensten">Diensten</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            )}
            <Switch>
                <Route path="/contact">
                    <h1>Contact</h1>
                </Route>
                <Route path="/diensten">
                    <h1>Diensten</h1>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Nav;