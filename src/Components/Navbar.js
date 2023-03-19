// Components
import React from 'react'
import Logo from '../logo.svg'
import { Container, Nav, Navbar, } from 'react-bootstrap'

// Contents
export default function NavbarComp() {
    return (
        <div className='mb-5'>
            <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="/portfolio">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        P.Nattapong
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="mr-auto">
                            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="/aboutme">About</Nav.Link>
                            <Nav.Link href="/educaction">Educaction</Nav.Link>
                            <Nav.Link href="/certi">Certificate</Nav.Link>
                            <Nav.Link href="/activity">Activity</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
