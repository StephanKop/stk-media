import React, {useState} from "react";
import {
    Link
} from "react-router-dom";

const Burger = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (isMenuOpen) {
            setLoaded(true);
        }
    };

    return (
            <div className={'burgerContainer'}>
                <Link to={'/'}>
                    <h1>STK<span>Media</span></h1>
                </Link>
                <button onClick={toggleMenu}>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <line x1="30" y1="25" x2="90" y2="25" stroke="white" strokeWidth="7" strokeLinecap="round" className={`${isMenuOpen ? "rotated-top" : ""}`}/>
                        <line x1="50" y1="50" x2="90" y2="50" stroke="white" strokeWidth="7" strokeLinecap="round" className={`${isMenuOpen ? "cross-fade-right" : ""}`}/>
                        <line x1="30" y1="75" x2="90" y2="75" stroke="white" strokeWidth="7" strokeLinecap="round" className={`${isMenuOpen ? "rotated-bottom" : ""}`}/>
                    </svg>
                </button>
                <nav className={`nav ${isMenuOpen ? "openMenu" : ""}${!isMenuOpen && loaded ? "closeMenu" : ""}`}>
                    <Link to={'/'} onClick={toggleMenu}>
                        <h1>STK<span>Media</span></h1>
                    </Link>
                    <ul>
                        <li>
                            <Link to="/frontend" onClick={toggleMenu}>Frontend</Link>
                        </li>
                        <li>
                            <Link to="/webdesign" onClick={toggleMenu}>Webdesign</Link>
                        </li>
                        <li>
                            <Link to="/ux" onClick={toggleMenu}>UX</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

export default Burger;