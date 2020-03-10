import React, { Component } from 'react'

export default class serviciosMovil extends Component {
    render() {
        return (
            
            <li className="list-group-item p-1 m-0 border-0 card_servicios" key={this.props.servicio.id}>
                <p 
                data-toggle="collapse"
                data-target={'#L'+this.props.servicio.id}
                className="card_servicios_titulo m-0 pr-3 "                                       
                >{this.props.servicio.nombre}</p>
                <div id={'L'+this.props.servicio.id} className="collapse mb-2">
                    <p className="text-center">{this.props.servicio.description}</p>
                    <img className="rounded mx-auto d-block" src={`img/servicios/${this.props.servicio.img}.jpg`} alt="concertina"/>
                </div>
            </li>
                                   
                                    
                        
        )
    }
}
/* <li className="list-group-item p-1 m-0 text-left border-0 card_servicios" key={servicio.id}>
                                            <p 
                                            data-toggle="collapse"
                                            data-target={'#L'+servicio.id}
                                            className="card_servicios_titulo m-0"                                       
                                            >{servicio.nombre}</p>
                                            <div id={'L'+servicio.id} className="collapse">
                                                <p className="text-center">{servicio.description}</p>
                                                <img className="rounded mx-auto d-block" src={`img/servicios/${servicio.img}.jpg`} alt="concertina"/>
                                            </div>
                                        </li>*/