import React from "react";
import './style.scss'

// import image from "../avion-desktop.jpg";
const Aside = () => {
    return (
        <div className="aside">
            <h2>Pago seguro</h2>
            <div className="aside__pagos">
                <div>
                    <span>Tarjeta de credito,tarjeta de debito y pago electrónico</span>
                </div>
                <div>
                    <span>Efectivo en cualquiera de las sucursales participantes</span>
                </div>
            </div>
            <h2>Servicios Disponibles</h2>
        </div>
    )
}

export default Aside;