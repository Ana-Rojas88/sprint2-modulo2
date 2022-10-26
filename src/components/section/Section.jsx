import React from "react";
import Form from "./form/Form";
import './style.scss'
import image from "../avion-desktop.jpg";
import Aside from "../aside/Aside";
const Section = () => {
    return (
        <>
        <div className="section">
            <Form />
            <div className="container">
            <img src={image} alt="Imagen de avion" />
            </div>
        </div>
        <Aside/>
        </>
    )
}

export default Section;