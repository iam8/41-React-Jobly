import React, {useContext} from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import UserContext from "../auth/UserContext";
import "./NavBar.css";


/**
 * Render a navigation bar for the site.
 *
 * Props:
 *  - logout(): log out the current user
 */
function NavBar({logout}) {
    const {currentUser} = useContext(UserContext);

    function loggedOutNavbar() {
        return (
            <>
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
            </>
        );
    }

    function loggedInNavbar() {
        return (
            <>
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
            </>
        );
    }

    return (
        <div className="NavBar">
            <Navbar expand="md">

                <NavLink exact to="/" className="navbar-brand">
                    Jobly
                </NavLink>

                {
                    currentUser ?
                        loggedInNavbar()
                    :
                        loggedOutNavbar()
                }

            </Navbar>
        </div>
    )
}


export default NavBar;
