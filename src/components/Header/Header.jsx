import { NavLink } from "react-router-dom";
import { useState } from "react";
import Login from "../Login/Login";

export default function Header(){

    const [isLogged, setIsLogged] = useState(false)
    const handleLogin = () => {
        setIsLogged(!isLogged)
    }


    return(
        <>
            <header>
                <div className="flex justify-around p-8 bg-verde-claro">
                    <h1 className="py-1 text-white text-2xl">GreenWorld</h1>

                    <div className="list-none">
                        <nav className="flex justify-center gap-10">
                            <ul className="flex gap-10 py-1 text-white text-lg">
                                <li className="hover:text-verde-texto duration-500"><NavLink to='/'>Home</NavLink></li> 
                                <li className="hover:text-verde-texto duration-500"><NavLink to='/sobre'>Sobre</NavLink></li>
                                <li className="hover:text-verde-texto duration-500"><NavLink to='/comunidade'>Comunidade</NavLink></li>
                                {isLogged && <li className="hover:text-verde-texto duration-500"><NavLink to='/chat'>Chat</NavLink></li>}
                                {isLogged && <li className="hover:text-verde-texto duration-500"><NavLink to='/usuario'>Usuário</NavLink></li>}
                             
                            </ul>
                            <Login isLogged={isLogged} handleLogin={handleLogin}/>
                        </nav>
                       
                    </div>
                </div>
            </header>
        </>
    )
}