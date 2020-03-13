import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import logo from './img/logo.svg';

export default class header extends Component {

    state = {
        showMenu: false,
        estadoNav:'menu-btn_burguer',
        nav:'nav',
        menu_nav:'menu-nav col-12',
        menu_nav_item:'menu-nav_item'
    }

    toogleMenu = () =>{

        
        if(!this.state.showMenu){
           
            this.setState({
                showMenu:true,
                estadoNav:'menu-btn_burguer open',
                nav:'nav open',
                menu_nav:'menu-nav col-12 open',
                menu_nav_item:'menu-nav_item open'
            });
        }else {
          
            this.setState({
                showMenu:false,
                estadoNav:'menu-btn_burguer',
                nav:'nav',
                menu_nav:'menu-nav col-12',
                menu_nav_item:'menu-nav_item'
            });
        }
    }

    MostrarSeccion = event => {
        

        const navItems = document.querySelectorAll('.menu-nav_item');

        this.setState({
            showMenu:false,
            estadoNav:'menu-btn_burguer',
            nav:'nav',
            menu_nav:'menu-nav col-12',
            
        });

        for(let opcion of navItems){
            opcion.classList.remove('active')
        }

        event.currentTarget.classList.add('active'); 

    }


    render() {
        return (
            <header className="container-fluid">
                <div className="col-12"> 

                <div className="logo">
                    <img  src={logo} alt="logo softwarewith life"/>

                    </div>
                        
                <div className="menu-btn" onClick={this.toogleMenu}>    
                    <span className={this.state.estadoNav}></span>        
                </div>
            
            
                <nav className={this.state.nav}>
                    <ul className={this.state.menu_nav}>
                        <li className={this.state.menu_nav_item + ' active'} 
                        id='inicio'
                        onClick={this.MostrarSeccion}>
                            <Link className="menu-nav__link " to="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/">INICIO</Link>
                        </li>
                        <li className={this.state.menu_nav_item}  
                        id='nosotros'
                        onClick={this.MostrarSeccion}>
                            <Link className="menu-nav__link" to="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/somos">SOMOS</Link>
                        </li>
                        <li className={this.state.menu_nav_item} 
                        id = 'portafolio'
                        onClick={this.MostrarSeccion}>
                            <Link className="menu-nav__link" to="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/Servicios">SERVICIOS</Link>
                        </li>
                        <li className={this.state.menu_nav_item} 
                        id='contacto'
                        onClick={this.MostrarSeccion}>
                            <Link className="menu-nav__link"to="/502/WP-Lazarini/frontend-React/mayas-lazarini/build/Contacto">CONTACTO</Link>
                        </li>
            
                    </ul>
                </nav>
            </div>
        </header>
        )
    }
}
