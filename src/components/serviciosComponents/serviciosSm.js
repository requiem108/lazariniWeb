import React, { Component } from 'react'

export default class serviciosSm extends Component {
    render() {
        return (
            <li className="list-group-item p-1 m-0 border-0 card_serviciosSM"
             key={this.props.servicio.id}
             onClick={() =>this.props.showService("idService"+this.props.servicio.id,
             this.props.servicio.imgCasa,
             this.props.servicio.img)}
             >
                <p                 
                className="card_serviciosSM_tituloLI m-0 pr-3 "                                       
                >{this.props.servicio.nombre}</p>                
        </li>
        )
    }
}
