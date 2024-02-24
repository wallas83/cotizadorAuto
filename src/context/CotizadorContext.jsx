import { createContext, useState } from "react";

// 1. se acrea el contexto
export const CotizadorContext = createContext();
// 2, se genera el proveedor para el contexto 

export const CotizadorProvider = ({ children }) => {
    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })
    const handleChangeDatos = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    return (
        <CotizadorContext.Provider value={{ datos, handleChangeDatos }}>
            {children}
        </CotizadorContext.Provider>
    )
}