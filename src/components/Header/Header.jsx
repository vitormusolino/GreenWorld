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
                <div className="flex justify-around p-8 bg-green-700">
                    <h1 className="py-1">GreenWorld</h1>

                    <div className="list-none">
                        <nav className="flex justify-center gap-10">
                            <ul className="flex gap-10 py-1">
                                <li><NavLink to='/'>Home</NavLink></li> 
                                <li><NavLink to='/sobre'>Sobre</NavLink></li>
                                <li><NavLink to='/comunidade'>Comunidade</NavLink></li>
                                {isLogged && <li><NavLink to='/chat'>Chat</NavLink></li>}
                                {isLogged && <li><NavLink to='/usuario'>Usuário</NavLink></li>}
                             
                            </ul>
                            <Login isLogged={isLogged} handleLogin={handleLogin}/>
                        </nav>
                       
                    </div>
                </div>
            </header>
        </>
    )
}