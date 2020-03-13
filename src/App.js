

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
                <Route exact path="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/somos" component={Somos}/>
                <Route exact path="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/contacto" component={Contacto}/>
                <Route exact path="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/servicios" component={Servicios}/>
                <Route exact path="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/" component={Home}/>
                <Footer/>

            </Router>
        )
    }
}

/*<main role="main" id="section_lazarini">
      
    </main>
    
    

    <footer id="footer_lazarini"></footer>*/