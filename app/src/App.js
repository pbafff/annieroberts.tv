import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';

export default function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route path="/portfolio">
                    <Portfolio/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
        </Router>
    );
}

function Portfolio() {
    return <h1>Portfolio</h1>
}

function About() {
    return <h1>About</h1>
}

function Contact() {
    return <h1>Contact</h1>
}
