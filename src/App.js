

import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';

//components
import Header from './components/header';
import Footer from './components/footer'
import Home from './components/home';
import Somos from './components/somos';
import Contacto from './components/contacto';
import Servicios from './components/servicios';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/somos" component={Somos}/>
                <Route exact path="/contacto" component={Contacto}/>
                <Route exact path="/servicios" component={Servicios}/>
                <Footer/>

            </Router>
        )
    }
}

/*<main role="main" id="section_lazarini">
      
    </main>
    
    

    <footer id="footer_lazarini"></footer>*/