import React, { Component } from 'react';

import Slide from './homeComponents/sliderLazarini';
import Titulos from './homeComponents/TitulosHome';

export default class home extends Component {
    render() {
        return (
            <main role="main" id="section_lazarini">
                 <Slide/>
                 <section className="container-fluid homeContent">               
                    <Titulos/>
                </section> 
            </main> 
                        
            
        )
    }
}
