import LogoFooter from '../../assets/LogoFooter.png'
import InstagramFooter from '../../assets/InstagramFooter.svg'
import DiscordFooter from '../../assets/DiscordFooter.svg'
import LinkedinFooter from '../../assets/LinkedinFooter.svg'

function Footer() {
    return ( <>
                <div className='bg-verde-texto flex flex-col'>
                    <div className='flex justify-center items-center py-20'>
                        <img src={LogoFooter} alt="" className='border-r-4 border-verde-claro pr-40'/>

                        <div className='flex flex-col text-white text-center pl-40'>
                            <h3 className='text-2xl font-semibold'>Contato</h3>
                            <p className='text-xl mt-3'>greenworld@gmail.com</p>
                            <div className='flex justify-center items-center gap-10 mt-5'>
                                <a href="https://www.instagram.com/"><img src={InstagramFooter} alt="" /></a>
                                <a href="https://discord.gg/BJNdECER64"><img src={DiscordFooter} alt="" /></a>
                                <a href="https://www.linkedin.com/"><img src={LinkedinFooter} alt="" /></a>     
                            </div>
                        </div>
                    </div>
                    <p className='text-lg font-bold text-center text-white '>GreenWorld ©. Todos os direitos reservados</p>
                </div>
            </> );
}

export default Footer;