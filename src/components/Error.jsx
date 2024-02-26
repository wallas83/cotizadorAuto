import { useCotizador } from "../hooks/useCotizador"

export function Error (){
    const {error} = useCotizador();
    return(
        <div className="border text-center py-3 border-red-400 bg-red-100 text-red-700">{error}</div>
    )
}