import React from 'react'

import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">useContext</Link>
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink
                            to="/"
                            exact="true" 
                            activeClassName="selected" 
                            className="nav-link" 
                            aria-current="page" 
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="/about"
                            exact="true"
                            activeClassName="selected" 
                            className="nav-link"                             
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/login"
                            exact="true" 
                            activeClassName="selected" 
                            className="nav-link"                            
                        >
                            Login
                        </NavLink>                        
                    </div>
                </div>
            </div>
        </nav>
    )
}
