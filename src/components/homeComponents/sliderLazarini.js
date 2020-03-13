import React, { Component } from 'react';
import mascara from '../img/mascara.png';
import slide_1 from '../img/jordan-wiseman-AsQs1AziQD4-unsplash.jpg';
import slide_2 from '../img/tobias-jussen-sek9ckKRbTo-unsplash.jpg';

export default class sliderLazarini extends Component {
    render() {
        return (
            <section className="jumbotron mt-5 slideLazarini ">
            <div className="content d-flex justify-content-center animated fadeIn">
                <div id="lazariniCarousel" className="carousel slide carousel-fade col-11 " data-ride="carousel">
                    <div className="carousel-inner slideL">
                        
                        <div className="carousel-item active">
                            <img className="mascara" src={mascara} alt="mascara"/>                            
                            <img src={slide_1} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Trabajos</h5>
                                <h5 className="subH5">Profesionales</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="mascara" src={mascara} alt="mascara"/>
                            <img src={slide_2} className="d-block w-100" alt="..."/>
                            <div className="carousel-caption ">
                                <h5>Alta calidad</h5>
                                <h5 className="subH5">Y honestidad</h5>
                            </div>
                        </div>
                    
                    </div>                    
                </div>                
            </div>
            </section>
        )
    }
}
