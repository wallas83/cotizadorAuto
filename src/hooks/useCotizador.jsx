import { useContext } from "react";
import { CotizadorContext } from "../context/CotizadorContext";

export function useCotizador() {

    const { datos, handleChangeDatos, setError, error, cotizarSeguro, resFixed,
        setResFixed,cargando } = useContext(CotizadorContext);


    return {
        datos, handleChangeDatos, setError, error, cotizarSeguro, resFixed,
        setResFixed,cargando
    }

}