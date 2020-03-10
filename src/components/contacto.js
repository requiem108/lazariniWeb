import React, { Component } from 'react';

import Figura from './otherComponents/figura'

export default class contacto extends Component {
    render() {
        return (
            <main role="main" id="section_lazarini" className='mainLazarini mt-5' >
                <div className="container mt-5 row col-12 somosTitulos">
                    <div className="col-12 col-sm-6"><Figura text="Contacto"></Figura></div>
                    <div className="col-12 col-sm-6 text-justify mx-auto">
                        <div className="card p-2 cardsLazarini animated slideInRight">
                                <ul className="list-group">
                                    <li className="list-group-item p-3 text-center border-0"><p>Con gusto te atenderemos en:</p></li>
                                    <li className="list-group-item p-2 border-0">Mariano Jiménez No. 353 Zona centro, Celaya Gto. C.P. 38040 Tel: 61-2-50-27 Nextel: 20688961-2068611</li>
                                    <li className="list-group-item p-3 text-center border-0">De igual manera puedes escribirnos al siguiente mail:</li>
                                    <li className="list-group-item p-2 text-center border-0">Lazaringerardo@gmail.com</li>                                    
                                </ul>
                            </div> 
                    </div>
                </div>  

                 <div className="container-fluid mt-5 homeContent">
                    <div className="row">
                        
                        <div className="card col-10 col-sm-5 mx-auto mt-4 cardsLazarini animated slideInRight">
                            
                            <div className="card-body">
                                <h3 className="text-center">Mandanos un mensaje</h3>
                                <p className="text-center">Nos pondreos en contacto lo antes posible</p>
                                <form>
                                    <div className="form-group">
                                        <input type="text" 
                                        className="form-control form-control-sm" 
                                        placeholder="Nombre" 
                                        minLength="4"
                                        name="Name"
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" 
                                        minLength="10" 
                                        maxLength="10" 
                                        placeholder="Telefono a 10 digitos" 
                                        className="form-control form-control-sm" 
                                        name="Telefono" 
                                        pattern=".{10,10}"
                                        required />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                        className="form-control form-control-sm" 
                                        name="mensaje"/>
                                    </div>
                                    <div className="form-group invisible m-0">
                                        <input name="catch" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Enviar</button>
                                </form>
                                <div className="contactoRespuesta"></div>
                            </div>
                        </div>

                        <div className="card col-10 col-sm-6 mx-auto mt-4  cardsLazarini animated slideInRight">
                            
                            <div className="card-body p-2">
                                <iframe 
                                title="This is a unique title" 
                                aria-hidden="true" 
                                frameBorder="0" 
                                tabIndex="-1"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.4471014142528!2d-100.82239528507569!3d20.528879686271317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cba92f3348f29%3A0x715bf489c303d186!2sGral.%20Mariano%20Jim%C3%A9nez%20353%2C%20Residencial%20del%20Valle%2C%2038048%20Celaya%2C%20Gto.!5e0!3m2!1ses!2smx!4v1583455869651!5m2!1ses!2smx"
                                 />
                                
                            </div>
                        </div>

                    </div>
                </div>             

                
            </main>
        )
    }
}
