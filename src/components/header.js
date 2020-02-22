import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <header>        
            <div class="menu-btn">    
                <span class="menu-btn_burguer"></span>        
            </div>
        
        
            <nav class="nav">
                <ul class="menu-nav">
                    <li class="menu-nav_item active" id='inicio'>
                        <spam class="menu-nav__link">INICIO</spam>
                    </li>
                    <li class="menu-nav_item" id='nosotros'>
                        <spam class="menu-nav__link">SOMOS</spam>
                    </li>
                    <li class="menu-nav_item" id = 'portafolio'>
                        <spam class="menu-nav__link">SERVICIOS</spam>
                    </li>
                    <li class="menu-nav_item" id='contacto'>
                        <spam class="menu-nav__link">CONTACTO</spam>
                    </li>
        
                </ul>
            </nav>
        </header>
        )
    }
}
