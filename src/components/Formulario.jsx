import { Fragment } from 'react'
import{MARCAS, YEARS, PLAN} from '../constants/index'
export function Formulario () {

    return(
        <>
            <form>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        Marca
                    </label>
                    <select name="marca" className="w-full p-3 bg-white border border-gray-200">
                        <option value="">-- Selecciona Marca --</option>
                        {
                            MARCAS.map(marca => (
                                <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        AÑO
                    </label>
                    <select name="marca" className="w-full p-3 bg-white border border-gray-200">
                        <option value="">-- Selecciona año--</option>
                        {
                            YEARS.map((year, index) => (
                                <option key={index} value={year}>{year}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="my-5">
                    <label className="block mb-3 font-bold text-gray-400 uppercase">
                        ELIGE TU PLAN
                    </label>
                    <div className='flex gap-3 items-center'>
                        {
                            PLAN.map(item => (
                                <Fragment key={item.id}>
                                    <label>
                                        {item.nombre}
                                    </label>
                                    <input
                                        type='radio'
                                        name='plan'
                                        value={item.id}
                                    />
                                </Fragment>
                            ))
                        }
                    </div>
                </div>
                <input type='submit' className='w-full  bg-indigo-500 hover:bg-indigo-600 transition-colors
                text-white cursor-pointer p-3 uppercase font-bold' value='cotizar'/>
            </form>
        </>
    )
}