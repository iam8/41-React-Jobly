import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";


/**
 * Render a navigation bar for the site.
 *
 * Props:
 *  - logout(): log out the current user
 */
function NavBar({logout}) {

    return (
        <div className="NavBar">
            <Navbar expand="md">

                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/companies">Companies</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/jobs">Jobs</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/profile">Profile</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/" onClick={logout}>Log out</Link>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/signup">Sign up</NavLink>
                    </NavItem>
                </Nav>

                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink to="/login">Log in</NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </div>
    )
}


export default NavBar;
