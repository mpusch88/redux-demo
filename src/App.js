import React from 'react';
import logo from './logo.svg';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import './App.css';

const App = () => (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <Component1/>
            <Component2/>
        </header>
    </div>
)

export default App;
