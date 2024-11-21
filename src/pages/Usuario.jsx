import React, { useEffect, useState } from 'react';
import Biomassa from '../assets/Biomassa.jpg';
import Hidreletrica from '../assets/Hidreletricas.jpg';
import PlacaSolar from '../assets/PlacasSolares.jpg';
import Eolica from '../assets/EnergiaEolica.jpg';

function Usuario() {
    const [energiasFavoritas, setEnergiasFavoritas] = useState([]);

    const energiaImagens = {
        'Energia Eólica': Eolica,
        'Energia Solar': PlacaSolar,
        'Biomassa': Biomassa,
        'Hidrelétricas': Hidreletrica
    };

    useEffect(() => {
        const favoritas = JSON.parse(localStorage.getItem('energiasFavoritas')) || [];
        setEnergiasFavoritas(favoritas);
    }, []);

    return (
        <>
        <div>
            <h1 className='text-5xl text-verde-texto font-bold text-center p-5'>Página do usuário</h1>
            <p className='text-2xl text-verde-escuro text-center font-semibold pb-28 mt-10'>Seja bem vindo a sua página do usuário!</p>
        </div>
        <div>
            <h1 className='text-3xl text-verde-texto text-center font-bold mb-20'>
                Suas Energias Favoritas:
            </h1>
            <div className='flex justify-center gap-32 mb-32'>
                {energiasFavoritas.length > 0 ? (
                    energiasFavoritas.map(energia => (
                        <div key={energia} className="flex flex-col bg-verde-escuro rounded-lg">
                            <img 
                                src={energiaImagens[energia]} 
                                alt={energia} 
                                className="max-w-72 rounded-t-lg" 
                            />
                            <h2 className="text-lg text-white font-bold text-center py-8">{energia}</h2>
                        </div>
                    ))
                ) : (
                    <p className="text-white">Nenhuma energia favorita selecionada.</p>
                )}
            </div>
        </div>
        </>
    );
}

export default Usuario;
