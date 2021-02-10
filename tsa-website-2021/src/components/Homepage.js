import Login from './Login';
import Logout from './Logout';
import React, { useState } from 'react'
import {Component} from 'react'
import ucsb from '../ucsb.mp4';

import Navbar from 'react-bootstrap/Navbar'

const Homepage = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState()
    return (
        <div className="App">

            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>

            <div id="video-container">
            <div class="video-overlay"></div>
            <div class="video-content">
                <div class="inner">
                    <h1>Welcome to <em>UCSB TSA</em></h1>
                    <p>UCSB Taiwanese Student Association</p>
                    
                    <div class="scroll-icon">
                        <a class="scrollTo" data-scrollTo="portfolio" href="#"><img src="img/scroll-icon.png" alt=""/></a>
                    </div>
                </div>
            </div>
            <video autoPlay loop muted style = {{position: "absolute", width: "100%", 
                                            left: "50%", top: "50%", height: "100%", objectFit: "cover", 
                                            transform: "translate(-50%, -50%)", zIndex:"-1" }}>
                <source src={ucsb} type="video/mp4" />
            </video>
            {/* <iframe width="725" height="480" src="https://www.youtube.com/embed/QSEPStBgwRQ?list=PLJV_el3uVTsPy9oCRY30oBPNLCo89yu49" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            </div>

            <div style={{}}>
                <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
                {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
                <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
            </div>
        </div>
        
    ); 
}

export default Homepage