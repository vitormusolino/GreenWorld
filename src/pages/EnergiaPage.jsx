import Biomassa from '../assets/Biomassa.jpg'
import Hidreletrica from '../assets/Hidreletricas.jpg'
import PlacaSolar from '../assets/PlacasSolares.jpg'
import Eolica from '../assets/EnergiaEolica.jpg'
import { useParams } from 'react-router-dom';

function EnergiaPage() {
    const { id } = useParams();

    const energiaDetalhes = {
        "Energia Eólica": {
            descricao: "A energia eólica é gerada através do vento.",
            beneficios: "Renovável, limpa e abundante.",
            imagem: Eolica
        },
        "Energia Solar": {
            descricao: "A energia solar é gerada a partir da luz do sol.",
            beneficios: "Sustentável, baixo custo e abundante.",
            imagem: PlacaSolar
        },
        "Biomassa": {
            descricao: "A biomassa é energia obtida de matéria orgânica.",
            beneficios: "Renovável, reduz a dependência de combustíveis fósseis.",
            imagem: Biomassa
        },
        "Hidrelétricas": {
            descricao: "A energia hidrelétrica é gerada por barragens e rios.",
            beneficios: "Confiável, grande capacidade de geração.",
            imagem: Hidreletrica
        }
    };
    const energia = energiaDetalhes[id];

    return (
        <div>
            {energia ? (
                <>
                    <h1 className='text-3xl text-verde-texto text-center font-bold mt-10'>{id}</h1>
                    <div className='flex justify-center mt-10'>
                        <img src={energia.imagem} alt={id} className="max-w-96 rounded-lg" />
                        <div className='flex flex-col ml-5'>
                            <p className='text-lg font-semibold text-verde-texto'>{energia.descricao}</p>
                            <p className='mt-10 text-xl text-verde-claro font-bold'><strong>Benefícios:</strong></p>  
                            <p>{energia.beneficios}</p>  
                        </div>
                    </div>
                    
                </>
            ) : (
                <p>Energia não encontrada!</p>
            )}
        </div>
    );
}

export default EnergiaPage;
