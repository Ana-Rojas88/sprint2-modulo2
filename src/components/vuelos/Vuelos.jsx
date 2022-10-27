import React from "react";
import { useNavigate } from "react-router-dom";
import './style.scss'


const Vuelos = () => {

    const flights = JSON.parse(sessionStorage.getItem('infoVuelos'));
    console.log(flights);

    const navigate= useNavigate();
    const returnHome = ()=>{
        navigate('/')
    }

    return (
        <>
            <section className="section_vuelos">

                {
                    flights.map((item, index) => (
                        <>
                            <section className="seleccion_vuelos" >
                                <div className="vuelosRegreso">
                                    <div className="title__vuelos">
                                        <h2>Vuelo de salida</h2>
                                        <span>{item.salidaDate} <br /> Desde {item.origen} a {item.destino}</span>

                                    </div>
                                    <button onClick={returnHome}>Cambiar vuelo</button>
                                </div>
                                <div className="vuelos" >
                                    <span className="horario">Seleccion de horarios y equipajes</span>
                                    <div className="equipaje">
                                        <article>
                                            <span className="hora">{item.timeSalida}</span>
                                        </article>
                                        <button> 1 objeto personal <br /><span>$17.000 COP</span></button>
                                        <button> Equipaje de mano <br /><span>$20.000 COP</span></button>
                                        <button> Equipaje 25kg <br /><span>$25.000 COP</span></button>
                                    </div>
                                </div>
                                <article>
                                    <div className="vuelosRegreso">
                                        <div className="title__vuelos">
                                            <h2>Vuelo de regreso</h2>
                                            <span>{item.regresoDate} <br /> Desde {item.destino} a {item.origen}</span>

                                        </div>
                                        <button onClick={returnHome}>Cambiar vuelo</button>
                                    </div>
                                    <div >
                                        <span className="horario">Seleccion de horarios y equipajes </span>
                                        <div className="equipaje">
                                            <article>
                                                <span className="hora">{item.timeRegreso}</span>
                                            </article>
                                            <button> 1 objeto personal <br /><span>$20.000 COP</span></button>
                                            <button> Equipaje de mano <br /><span>$25.000 COP</span></button>
                                            <button> Equipaje 25kg <br /><span>$30.000 COP</span></button>
                                        </div>
                                    </div>
                                </article>
                            </section>
                            <aside className="tu-reversation">
                                <div className="reservation">
                                <h3>Tu reservación</h3><br />
                                <h4>Vuelo de salida</h4><br />
                                <span>{item.origen} __ {item.destino}</span><br />
                                <span>{item.timeSalida}</span><br />
                                <span>{item.salidaDate}</span><br />
                               
                                <h4>Vuelo de regreso</h4><br />
                                <span>{item.destino} __ {item.origen}</span><br />
                                <span>{item.timeRegreso}</span><br />
                                <span>{item.regresoDate}</span>
                                </div>
                                <div className="costo-vuelos">
                                    <h4>Costo de vuelo</h4><br />
                                    <span>Total {item.precio}</span>
                                </div>
                            </aside>
                        </>

                    ))
                }

            </section>

        </>
    )
}

export default Vuelos;
