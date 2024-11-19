import LogoHome from '../../assets/LogoHome.png';
import { NavLink } from "react-router-dom";

export default function GreenWorld() {
    return ( <>
            <div className='flex justify-center items-center py-20 hero-img gap-60'>
                <img src={LogoHome} alt="" className='pr-40'/>

                <div className='text-white flex flex-col items-center gap-7'>
                    <h2 className='text-3xl font-semibold text-wrap max-w-80 text-center'>Em busca de um mundo melhor</h2>
                    <NavLink to='sobre' className='bg-verde-claro px-10 py-4 text-white font-bold rounded-lg'>SAIBA MAIS</NavLink>
                </div>
            </div>
    </> );
}

 