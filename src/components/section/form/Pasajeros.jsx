import React, { useState }  from "react";

const Pasajeros = () => {
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
        <div onClick={() => setOpenOptions(!openOptions)} className="form__pasajeros"> 
        <span>Pasajeros</span>        
        <span>{`${options.adult} Adultos · ${options.children} Niños · ${options.baby} Bebès`}</span>
        {openOptions && (<div className="options">
            <div className="optionItem">
                <span>Adulto</span>
                <span disabled={options.adult <= 1} onClick={() => { handleOption("adult", "d") }}>-</span>
                <span>{options.adult}</span>
                <span onClick={() => { handleOption("adult", "i") }}>+</span>
            </div>
            <div className="optionItem">
                <span>Niños</span>
                <span disabled={options.children <= 1} onClick={() => { handleOption("children", "d") }}>-</span>
                <span>{options.adult}</span>
                <span onClick={() => { handleOption("adult", "i") }}>+</span>
            </div>
            <div className="optionItem">
                <span>Bebés</span>
                <span disabled={options.baby <= 1} onClick={() => { handleOption("baby", "d") }}>-</span>
                <span>{options.adult}</span>
                <span onClick={() => { handleOption("adult", "i") }}>+</span>
            </div>
     </div>)}
     </div>
    )
}
 
export default Pasajeros;