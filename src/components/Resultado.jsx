import { useCotizador } from "../hooks/useCotizador"

export function ResultadoTotal () {
    const {resFixed}=  useCotizador();
    
    if(resFixed === 0) return null;
    return(
        <div>{resFixed}</div>
    )
}