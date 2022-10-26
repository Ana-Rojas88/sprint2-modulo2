import React from "react";
import './style.scss'
const Vuelos = () => {


    const flights = JSON.parse(sessionStorage.getItem('infoVuelos'));
    console.log(flights);

    return (
        <>
            <section>

                {
                    flights.map((item, index) => (
                        <>
                        
                            <div className="title__vuelos">
                                <div className="title__vuelos">
                                    <h2>{item.origen}</h2>
                                    <span>{item.salidaDate}</span>
                                    <span> Desde {item.origen} a {item.destino}</span>
                                </div>
                                <button>Cambiar vuelo</button>
                            </div>
                            <div >
                    <span>Seleccion de horarios y equipajes</span>
                    <div className="equipaje">
                        <article>
                            <span>{item.timeSalida}</span>
                        </article>
                        <button> 1 objeto personal <br />$546 MXN </button>
                        <button> Equipaje de mano <br />$1,084 MXN </button>
                        <button> Equipaje 25kg <br />$1,945 MXN </button>
                    </div>
                </div>
                <section>
                <div className="title__vuelos">
                    <div className="title__vuelos">
                        <h2>{item.destino}</h2>
                        <span>{item.regresoDate}</span>
                        <span> Desde {item.destino} a {item.origen}</span>
                    </div>
                    <button>Cambiar vuelo</button>
                </div>
                <div >
                    <span>Seleccion de horarios y equipajes </span>
                    <div className="equipaje">
                        <article>
                            <span>{item.timeRegreso}</span>
                        </article>
                        <button> 1 objeto personal <br />$546 MXN </button>
                        <button> Equipaje de mano <br />$1,084 MXN </button>
                        <button> Equipaje 25kg <br />$1,945 MXN </button>
                    </div>
                </div>
            </section>
                        </>

                    ))
                }

            </section>
           
        </>
    )
}

export default Vuelos;
