import { useCotizador } from "../hooks/useCotizador"
import { MARCAS, PLAN } from '../constants'
import { Fragment, useCallback, useRef } from "react";


export function ResultadoTotal() {
    const { resFixed, datos } = useCotizador();
    const { marca, plan, year } = datos;
    // useref devuelve unobjeto persisitente durtante la vida completa del componenente
    const refYear = useRef(year);
    const marcaSalida = useCallback( MARCAS.find(obj => obj.id === Number(marca)),[resFixed])
           
        

    const planSalida = useCallback( PLAN.find(obj => obj.id === Number(plan)),[resFixed])
   
    if (resFixed === 0) return null;
    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className=" text-gray-600 font-black text-3xl">Resumen</h2>

            <p className="my-2">
                <span className="font-bold">Marca: </span>
                {marcaSalida.nombre}

            </p>
            <p className="my-2">
                <span className="font-bold">Plan: </span>
                {planSalida.nombre}

            </p>
            <Fragment>
                <p className="my-2">
                    <span className="font-bold">Año del Auto: </span>
                    {refYear.current}

                </p>
            </Fragment>


            <p className="my-2 text-2xl">
                <span className="font-bold">Año del Auto: </span>
                {resFixed}

            </p>
        </div>
    )
}