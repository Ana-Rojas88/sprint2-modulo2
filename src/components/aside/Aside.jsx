import React from "react";
import './style.scss'

// import image from "../avion-desktop.jpg";
const Aside = () => {
    return (
        <div className="aside">
            <h2>Pago seguro</h2>
            <div className="aside__pagos">
                <div>
                <span>Tarjeta de credito, tarjeta de debito y pago electrónico</span><br />
                    <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/visa.svg"
                  alt="visa"
                />
                <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/mastercard.svg"
                  alt="mastercard"
                />
                <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/amex.svg"
                  alt="amex"
                />
                <img
                 className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/paypal.svg"
                  alt="paypal"
                />
                <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/invex.svg"
                  alt=""
                />
                </div>
                <div>
                    <span>Efectivo en cualquiera de las sucursales participantes</span><br />
                    <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/oxxo.svg"
                  alt="oxxo"
                />
                <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/seven.svg"
                  alt="seven"
                />
                <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/walmart.svg"
                  alt="walmart"
                />
                <img
                  className="itemImg"
                  src="https://cms.volaris.com/globalassets/1nextgen/payments/famahorro.svg"
                  alt="farmahorro"
                />
                </div>
            </div>
            <h2>Servicios Disponibles</h2>
            <div className="serviciosDisponibles">
            <div className="info">
              <img
                src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovertransportation.svg"
                alt="carro"
              />
             <h3>Transporte</h3>
              <p>
                Renta un auto o reserva un shuttle.
              </p>
            </div>
            <div className="info">
              <img
                src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoveryavas.svg"
                alt="yavas"
              />
              <h3>Vuelo + Hotel</h3>
              <p>
                Encuentra las mejores ofertas para tu viaje.
              </p>
            </div>
            <div className="info">
              <img
                src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovergroups.svg"
                alt="grupos"
              />
              <h3>Grupos</h3>
              <p>
                Obtén una cotización para grupos de más de 9 personas.
              </p>
            </div>
            <div className="info">
              <img
                src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hoverhotels.svg"
                alt="hoteles"
              />
              <h3>Hoteles</h3>
              <p>
                Reserva una habitación en cualquier parte del mundo.
              </p>
            </div>
            <div className="info">
              <img
                src="https://cms.volaris.com/globalassets/1nextgen/externalproducts/hovercargo.svg"
                alt="carga"
              />
              <h3>Carga</h3>
              <p>
                Contamos con servicio de carga y mensajería.
              </p>
            </div>
          </div>
        </div>
    )
}

export default Aside;