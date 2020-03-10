import React, { Component } from 'react'

export default class serviceInfoSm extends Component {
    render() {
        return (
            <div className="card mx-auto mt-4 cardsLazarini d-none  cdLazariniInfo "
             id={"idService"+this.props.servicio.id}>
                                <div className="card-header p-1 card_serviciosSM">
                                    <p className="m-0 card_serviciosSM_titulo">
                                       {this.props.servicio.nombre}
                                        </p></div>
                                <div className="card-body">
                                <p className="text-center">
                                    {this.props.servicio.description}</p>                                
                                </div>
            </div>
        )
    }
}
