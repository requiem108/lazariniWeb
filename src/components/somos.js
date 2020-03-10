import React, { Component } from 'react';

import Figura from './otherComponents/figura'

export default class somos extends Component {
    render() {
        return (
            <main role="main" id="section_lazarini" className='mainLazarini mt-5' >
                <div className="container mt-5 row col-12 somosTitulos">
                    <div className="col-12 col-sm-6"><Figura text="Somos"></Figura></div>
                    <div className="col-12 col-sm-6 text-justify mx-auto animated slideInRight">Especialistas en protección perimetral con una gran fuerza Tecnológica y Humana. Somos Especialistas en la instalación de cerca electrificada así como todo tipo de alambrado, puaz, concertina, accesorios a lamina galvanizada, etc. Así mismo le garantizamos calidad, profesionalidad y excelente servicio al cliente.</div>
                </div>
                <div className="container-fluid mt-5 homeContent">
                    <div className="row">
                    <div className="card col-10 col-sm-5 col-lg-3 mx-auto mt-4 cardsLazarini animated slideInRight">
                        <div className="card-header">
                                <h2 className="text-center">VALORES</h2>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item border-0 ">Honradez</li>
                                <li className="list-group-item border-0">Trabajo en equipo</li>
                                <li className="list-group-item border-0">Responsabilidad</li>
                                <li className="list-group-item border-0">Respeto</li>
                                <li className="list-group-item border-0">Perseverancia</li>
                                <li className="list-group-item border-0">Calidad</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card col-10 col-sm-5 col-lg-3 mx-auto mt-4 cardsLazarini animated slideInRight">
                        <div className="card-header">
                                <h2 className="text-center">MISION</h2>
                        </div>
                        <div className="card-body">
                            <p>Ser la empresa con la más alta calidad de fabricación e instalación en protecciones perimetrales, para brindar a nuestros clientes tranquilidad, beneficio y seguridad. puas, concertina, accesorios a lamina galvanizada, etc. Así mismo le garantizamos calidad, profesionalidad y excelente servicio al cliente</p>
                        </div>
                    </div>

                    <div className="card col-10 col-sm-5 col-lg-3 mx-auto mt-4 cardsLazarini animated slideInRight">
                        <div className="card-header">
                                <h2 className="text-center">VISION</h2>
                        </div>
                        <div className="card-body">
                            <p>Consolidarnos como una empresa lider, siendo un proveedor confiable, serio y responsable, logrando ser la mejor opción para nuestros clientes.</p>
                        </div>
                    </div>

                    {/* ROW END */}
                    </div>  
                </div>

                
            </main>
        )
    }
}
