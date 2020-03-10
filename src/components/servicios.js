import React, { Component } from 'react';

import Figura from './otherComponents/figura';
import ServiceMovil from './serviciosComponents/serviciosMovil';
import ServiceInfo from './serviciosComponents/serviceInfoSm';
import ServiceSM from './serviciosComponents/serviciosSm';

export default class servicios extends Component {

    state = {
        servicios: [{nombre:"CONCERTINAS",id:0,img:"concer_lazarini", imgCasa:"cerca-exterior-top", description:"Es el sistema de seguridad perimetral más efectivo y comúnmente usado por el sector residencial, comercial, industrial, militar y gubernamental."},
            {nombre:"MAYAS CICLONICAS",id:1, img:"malla_ciclonica_lazarini", imgCasa:"cerca-exterior", description:"La malla ciclónica es una red de alambre de acero galvanizado con forma de zig-zag entrelazados"},
            {nombre:"REJA DE ACERO",id:2, img:"reja_acero_lazarini", imgCasa:"cerca-exterior-all", description:"La Reja de Acero es producto de un intenso desarrollo de tecnología que combina estética y funcionalidad con resistencia y seguridad, para brindarle el mejor sistema de cercos en México."},
            {nombre:"MAYA GANADERA", id:3, img:"malla_ganadera_lazarini", imgCasa:"cerca-exterior-all", description:" Malla ganadera especializada fabricada con alambre de acero de alta resistencia recubierto de zinc por inmersión en caliente para dar una gran durabilidad en diferentes climas"},
            {nombre:"CINTA PLASTICA", id:4, img:"malla_plastica_lazarini", imgCasa:"cerca-exterior", description:"Para cubrir las cercas de malla ciclonica y dar privacidad de alta resistencia "},
            {nombre:"CERCAS ELECTRICAS",id:5, img:"cercas_electricas",imgCasa:"cerca-pa", description:"Una valla electrificada, cerca eléctrica o cerco eléctrico funciona por el principio de descargas eléctricas de impulsos de varios miles de voltios"},
            {nombre:"ALAMBRE DE PUAS",id:6, img:"alambre_puas", imgCasa:"cerca-exterior", description:" Las barreras de alambre de espino pueden llegar a tener varios metros de grosor y altura, formando una tupida malla de alambre con púas"},
            {nombre:"CIRCUITO CERRADO",id:7, img:"circuito_cerrado_lazarini", imgCasa:"camaras", description:"Circuito cerrado de televisión o CCTV es una tecnología de videovigilancia diseñada para supervisar una diversidad de ambientes y actividades."}
        ],
        imgCasa:"casa",
        imgExample:"Example"       
    }

    //Show card with info of service lazarini in window size SM
    ShowService = (idService, imgCasa, imgEx) =>{
        let obj = document.getElementById(idService);
        let listaInfoCards = document.querySelectorAll('.cdLazariniInfo');
        for(let card of listaInfoCards){
            card.classList.remove("d-sm-block");
        }
        obj.classList.add("d-sm-block");
        
        this.setState({
            imgCasa:imgCasa,
            imgExample:imgEx
        })
    }
 

    render() {
        return (
            
            <main role="main" id="section_lazarini" className='mainLazarini mt-5' >
                <div className="container mt-5 row col-12 serviciosTitulos">
                    <div className="col-12 col-sm-5"><Figura text="Servicios"></Figura></div>
                    <div className="col-12 col-sm-7 text-justify mx-auto">

                      {/* POSIBLES IMAGENES */}
                      {
                          this.state.servicios.map(servicio => 
                            <ServiceInfo servicio={servicio} 
                            key={`keyInfo${servicio.id}`}/>
                            )
                      }
                        
                    </div>
                </div>

                <div className="container-fluid  homeContent">
                    <div className="row">

                    {/*Datos del servicio movil  */}
                    <div className="card col-10 col-sm-5 mx-auto mt-4 cardsLazarini d-sm-none animated slideInRight">
                            
                            <div className="card-body">
                                <ul className="list-group">                        
                                    {
                                        this.state.servicios.map(servicio => 
                                            <ServiceMovil servicio={servicio} 
                                            key={`keyMovil${servicio.id}`}/>
                                            )
                                    }
                                </ul>
                            </div>
                        </div>

                    {/*Datos del servicio SM  */}
                    <div className="card col-10 col-sm-5 mx-auto mt-4 cardsLazarini d-none d-sm-block animated slideInRight">
                            
                            <div className="card-body">
                                <ul className="list-group">                        
                                    {
                                        this.state.servicios.map(servicio => 
                                            <ServiceSM servicio={servicio} 
                                            key={`keyMovil${servicio.id}`}
                                            showService={this.ShowService}/>
                                            )
                                    }
                                </ul>
                            </div>
                        </div>
                    
                    {/*IMAGEN DE LA CASA  */}
                    <div className="card col-10 col-sm-5 mx-auto mt-4 cardsLazarini d-none d-sm-block animated slideInRight">
                            
                            <div className="p-2 card-body-lazarini">
                                
                                <img  src={"img/servicios/"+this.state.imgCasa+".jpg"} alt=""/>
                                <img className="img-thumbnail examapleImgLazarini" src={"img/servicios/"+this.state.imgExample+".jpg"} alt="imagen muestra"/>

                            </div>
                        </div>
                    </div>
                </div>
                 
            </main>
        )
    }
}
