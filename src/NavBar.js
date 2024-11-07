//=====================================================================
// File: pb-client/src/NavBar.js
// --------------------------------------
/* Description: Navigation bar for PeerBox web application. 
                Includes navigation to: 
=====================================================================*/
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function NavBar() {

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            sticky="top"
        >
            <Container fluid>
                <Navbar.Brand as={NavLink} to='/'>
                    PeerBox
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="peerbox-navbar-nav" />
                <Navbar.Collapse id="peerbox-navbar-nav" >
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link as={NavLink} to='/dashboard'>
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/login'>
                            Login
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

