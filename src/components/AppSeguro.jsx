import { useCotizador } from "../hooks/useCotizador";
import { Formulario } from "./Formulario";
import { ResultadoTotal } from "./Resultado";
import { Spinner } from "./Spinner";

export function AppSeguro() {
    const { resFixed, cargando} = useCotizador();
    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">
                    Cotizador de seguros de auto
                </h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Formulario/>
                {cargando ? <Spinner/>: <ResultadoTotal/>}
            </main>
        </>
    )
}