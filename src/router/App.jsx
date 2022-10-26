import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Section from "../components/section/Section";
import Vuelos from "../components/vuelos/Vuelos";



const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Section />} />
                <Route path="vuelos" element={<Vuelos />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App;
