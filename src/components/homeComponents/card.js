import React, { Component } from 'react'

export default class card extends Component {
    render() {
        return (
            <div className="cuerpoHome">
                <div className="row col-12 d-flex justify-content-center">

                    <div className="card col-9">
                        <div className="card-header  border-0 ">
                            <div className="w-100 cardTitle">
                                <h3 className="text-center">25 años</h3>
                                <h3 className="text-center">nos respaldan</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <p>Somos una empresa con más de 25 años de experiencia, dedicada a la fabricación, comercialización, distribución e instalación de cercas profesionales, para la protección y seguridad Habitacional e industrial todo tipo de terreno.</p>
                            <p>Estamos comprometidos con la garantía, seguridad y servicio a nuestros clientes y distribuidores. Estas razones son las que nos impulsan a seguir brindándole productos de la más alta calidad.</p>
                        </div>
                    </div>

                </div>
    </div>
        )
    }
}
