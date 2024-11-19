export default function Login({isLogged, handleLogin}){

    return(
        <>
        <div>
            {isLogged && ''}
            <button 
            onClick={handleLogin}
            className="px-6 py-1 bg-verde-escuro text-white rounded-lg text-lg"> 
            {isLogged ? "Logout" : "Login"} </button>
        </div>
        </>
    )
}