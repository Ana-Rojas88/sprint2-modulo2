import React, { useState } from "react";
import './style.scss'
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import { searchFligths } from "../../services/getflight";

const Form = () => {
 
    const navigate = useNavigate()
    const [dataForm, handleChangeInput ] = useForm({
      origen: "",
      destino: "",
      salidaDate: "",
      regresoDate: ""
    });
  
    const filterFligth =async(dataForm)=>{
      const vuelosFiltrados= await searchFligths(dataForm)
      
      if (vuelosFiltrados.length) {
        console.log(vuelosFiltrados);
        sessionStorage.setItem('infoVuelos', JSON.stringify(vuelosFiltrados));
    
        
        navigate('/vuelos')
      }else{
        Swal.fire(
          'upps',
          'No se encontraron vuelos!',
          'error'
        )
      }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(dataForm);
      if (
        dataForm.origen !== "" &&
        dataForm.destino !== "" &&
        dataForm.salidaDate !== "" &&
        dataForm.regresoDate !== "" 
       
      ) {
        console.log("se puede continuar");
        await filterFligth(dataForm)
      } else {
        console.log("llene los datos porfavor");
      }
    };

    const [openOptions, setOpenOptions] = useState(0);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        baby: 0,
    });
    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    return (

        <form className="form" onSubmit={handleSubmit}>
             <div className="form__title">
                <h1>Busca un nuevo destino y comienza la aventura.</h1>
                <span>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</span>
            </div>
            <div className="form__btn-trips">
                <button>Viaje redondo</button>
                <button>Viaje sencillo</button>
            </div>
            <div className="form__select">
            <div className="form__select__origen">
                <select name="origen" onChange={handleChangeInput}>
                <option value="">-----</option>
                <option value="Medellin">Medellín</option>
                    <option value="Bogota">Bógota</option>
                    <option value="Cucuta">Cucuta</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Cali">Cali</option>
                </select><br />
                <label>Origen</label>
            </div>
            <div className="form__select__destino"> 
                <select name="destino" onChange={handleChangeInput}>
                    <option value="">---</option>
                    <option value="Bogota">Bógota</option>
                    <option value="Medellin">Medellín</option>
                    <option value="Cucuta">Cucuta</option>
                    <option value="Cartagena">Cartagena</option>
                    <option value="Cali">Cali</option>
                </select><br />
                <label>Destino</label>
            </div>
            </div>
            <div className="form__select__date">
                <div className="date_input">
                    <label>Salida</label><br />
                <input name="salidaDate" type="date" onChange={handleChangeInput} />
                </div>
                <div className="date_input">
                <label>Regreso</label><br />
                <input name="regresoDate" type="date" onChange={handleChangeInput} />
                </div>
                
            </div>
            <div className="form__pasajeros">
            <div onClick={() => setOpenOptions(!openOptions)} className="form__pasajeros__select" >
            <span>Pasajeros</span>        
        <span>{`${options.adult} Adultos · ${options.children} Niños · ${options.baby} Bebès`}</span>
        {openOptions && (<div className="options" onChange={handleChangeInput}>
            <div className="optionItem">
                <span>Adulto</span>
                <span disabled={options.adult <= 1} onClick={() => { handleOption("adult", "d") }} className="Counter">-</span>
                <span className="CounterNumber">{options.adult}</span>
                <span onClick={() => { handleOption("adult", "i") }} className="Counter">+</span>
            </div>
            <div className="optionItem">
                <span>Niños</span>
                <span disabled={options.children <= 1} onClick={() => { handleOption("children", "d") }} className="Counter">-</span>
                <span className="CounterNumber">{options.children}</span>
                <span onClick={() => { handleOption("children", "i") }} className="Counter">+</span>
            </div>
            <div className="optionItem">
                <span>Bebés</span>
                <span disabled={options.baby <= 1} onClick={() => { handleOption("baby", "d") }} className="Counter">-</span>
                <span className="CounterNumber">{options.baby}</span>
                <span onClick={() => { handleOption("baby", "i") }} className="Counter">+</span>
            </div>
     </div>)}
                
            </div>
            <div className="form__pasajeros__promocion">
                <label>¿Tienes un código de promoción?</label>
                <input type="text"placeholder="-- -- -- --" />
            </div>
            </div>
            <button>Buscar vuelos</button>
        </form>

    )
}

export default Form;