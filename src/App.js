import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';

function App() {
  return (
    <div className='App'>
      <Navbar dark color='primary'>
        <div className='container'>
          <NavbarBrand href='/'>NuCamp</NavbarBrand>
        </div>
      </Navbar>
      <Directory />
    </div>
  );
}

export default App;
