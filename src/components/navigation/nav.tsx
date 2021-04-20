import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from "react-router-dom";
import Burger from "./burger";
import Home from "../pages/pageHome";
import Frontend from "../pages/pageFrontend";
import Design from "../pages/pageWebDesign";
import UX from "../pages/pageUX";
import Contact from "../pages/pageContact";
import About from "../pages/pageAbout";

const Nav = () => {
    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 700;
    return (
        <Router>
            {isMobile && (
                <Burger/>
            )}
            {!isMobile && (
            <header className={'navContainer'}>
                <nav className={'navContainer__nav'}>
                    <Link to={'/'}>
                        <h1>STK<span>Media</span></h1>
                    </Link>
                    <ul>
                        <li>
                            <NavLink to="/development" activeClassName='is-active'>Development</NavLink>
                        </li>
                        <li>
                            <NavLink to="/webdesign" activeClassName='is-active'>Webdesign</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ux" activeClassName='is-active'>UX</NavLink>
                        </li>
                        <li>
                            <NavLink to="/over" activeClassName='is-active'>Over</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeClassName='is-active'>Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            )}
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/development" component={Frontend}/>
                <Route path="/webdesign" component={Design}/>
                <Route path="/ux" component={UX}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/over" component={About}/>
                <Route component={Home}/>
            </Switch>
        </Router>
    )
}

export default Nav;