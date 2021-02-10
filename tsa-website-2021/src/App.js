import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import React, { useState } from 'react'
import ucsb from './ucsb.mp4';
import Homepage from './components/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


export default function App() {

 
  return (
    
    <Homepage/>
  );
}