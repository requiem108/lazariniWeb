

import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

//components
import Header from './components/header';
import Home from './components/home';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Route exact path="/" component={Home}/>



            </Router>
        )
    }
}

/*<main role="main" id="section_lazarini">
      
    </main>
    
    

    <footer id="footer_lazarini"></footer>*/