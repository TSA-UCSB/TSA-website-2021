import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import React, { useState } from 'react'
import ucsb from './ucsb.mp4';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()
  return (
    
    <div className="App">
      <div id="video-container">
        <div class="video-overlay"></div>
        <div class="video-content">
            <div class="inner">
              <h1>Welcome to <em>UCSB TSA</em></h1>
              <p>UCSB Taiwanese Student Association</p>
              <p>Homepage with full-width image gallery</p>
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

