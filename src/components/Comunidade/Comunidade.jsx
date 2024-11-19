import Discord from '../../assets/discord-comunidade.svg'

function Comunidade() {
    return ( <>

                   <div className="flex flex-col justify-center items-center h-[40rem]">
                        <h1 className="text-5xl text-verde-texto font-bold mb-10">Comunidade</h1>
                    <div className="flex flex-col justify-center items-center shadow-gray-500 shadow-lg py-20 px-32 rounded-sm">
                        <h2 className='text-xl font-bold text-verde-texto mb-3'>Entre na nossa comunidade!</h2>
                        <p className="text-wrap text-verde-texto text-lg font-bold max-w-lg text-center mt-2">
                            Compartilhe suas ideias com pessoas com o mesmo intuito que você
                        </p>
                        <a href="https://discord.gg/BJNdECER64" className='flex mt-10 px-10 py-5 bg-verde-claro text-white font-bold rounded-lg'>CLIQUE AQUI <img src={Discord} alt="" className='max-w-8 ml-5' /></a>
                    </div>
                </div>

             </> );
}

export default Comunidade;