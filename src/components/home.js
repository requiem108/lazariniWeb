import React, { Component } from 'react';

import Slide from './homeComponents/sliderLazarini';
import Titulos from './homeComponents/TitulosHome';
import Card from './homeComponents/card'

export default class home extends Component {
    render() {
        return (
            <main role="main" id="section_lazarini" className='mainLazarini' >
                 <Slide/>
                 <section className="container-fluid homeContent">  

                 <div className="container">
                 <Titulos/>
                    </div>             
                    
                    <Card/>
                </section> 
                
            </main> 
                        
            
        )
    }
}
