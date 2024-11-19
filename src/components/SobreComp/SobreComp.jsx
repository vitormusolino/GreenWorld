import ImgSobre from '../../assets/ImgSobre.png'

function Sobre() {
    return ( <>
                <h1 className='text-5xl text-verde-texto font-bold text-center p-10 mt-10'>Sobre</h1>

                <div className= "flex items-center shadow-gray-500 shadow-lg py-10 px-32 mx-40 rounded-sm mb-32">
                    <img src={ImgSobre} alt="" className='p-10 max-w-2xl'/>
                    <p className='text-verde-texto text-xl max-w-xl'>Temos o intuito de auxiliar pessoas e empresas informando sobre o tema de energia. Hoje em dia é um tema que muitas pessoas não entendem muito, e, com o suporte do nosso chatbot, mostrar formas de como as pessoas podem otimizar o uso da energia no seu dia a dia, basta você conectar a sua conta de luz em nossa plataforma. </p>
                </div>
            </> );
}

export default Sobre;