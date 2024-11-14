export default function Login({isLogged, handleLogin}){

    return(
        <>
        <div>
            {isLogged && ''}
            <button 
            onClick={handleLogin}
            className="px-6 py-1 bg-blue-500 rounded-sm"> 
            {isLogged ? "Logout" : "Login"} </button>
        </div>
        </>
    )
}