import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import React, { useState } from 'react'

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
                {/* <div class="scroll-icon">
                    <a class="scrollTo" data-scrollTo="portfolio" href="#"><img src="img/scroll-icon.png" alt=""/></a>
                </div> */}
            </div>
        </div>
        <video autoplay="" loop="" muted>
        	<source src="ucsb.mp4" type="video/mp4" />
        </video>
      </div>


      <div style={{}}>
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
    </div>
  );
}

