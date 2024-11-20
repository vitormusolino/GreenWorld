import Biomassa from '../../assets/Biomassa.jpg'
import Hidreletrica from '../../assets/Hidreletricas.jpg'
import PlacaSolar from '../../assets/PlacasSolares.jpg'
import Eolica from '../../assets/EnergiaEolica.jpg'
import CardsEnergia from '../CardsEnergia/CardsEnergia'

function EnergiaFav() {

      const EnergiaCards = [
        {
            foto: Eolica,
            nome: 'Energia Eólica',
        },
        {
            foto: PlacaSolar,
            nome: 'Energia Solar',
        },
        {
            foto: Biomassa,
            nome: 'Biomassa',
        },
        {
            foto: Hidreletrica,
            nome: 'Hidrelétricas',
        }
      ]

    return ( <>
            <h1 className='text-5xl text-verde-texto text-center font-bold mb-20'>Escolha sua Favorita:</h1>
            <div className='flex justify-center gap-32 mb-32'>
               <CardsEnergia EnergiaCards={EnergiaCards}/>
            </div>
            </> );
}

export default EnergiaFav;