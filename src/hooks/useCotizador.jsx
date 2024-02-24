import { useContext } from "react";
import { CotizadorContext } from "../context/CotizadorContext";

export function useCotizador() {

    const {datos, handleChangeDatos} = useContext(CotizadorContext);

    return{datos, handleChangeDatos}
    
}