import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

// 1. se acrea el contexto
export const CotizadorContext = createContext();
// 2, se genera el proveedor para el contexto 

export const CotizadorProvider = ({ children }) => {
    const [error, setError] = useState('');
    const [resFixed, setResFixed] = useState(0);
    const [cargando, setCargando] = useState(false);
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
    const cotizarSeguro = () => {
        let resultado = 2000;


        const diferencia = obtenerDiferenciaYear(datos.year);
        resultado -= ((diferencia * 3) * resultado) / 100;
        resultado *= calcularMarca(datos.marca);

        resultado *= calcularPlan(datos.plan);
        resultado = resultado.toFixed(2)
        resultado = formatearDinero(resultado);
       
        setCargando(true);
        setTimeout(() => {
            setResFixed(resultado);
            setCargando(false);
        }, 2000);

    }
    return (
        <CotizadorContext.Provider value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            resFixed,
            setResFixed,
            cargando
        }}>
            {children}
        </CotizadorContext.Provider>
    )
}