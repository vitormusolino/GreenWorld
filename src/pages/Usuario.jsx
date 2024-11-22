import { useEffect, useState } from 'react';
import Biomassa from '../assets/Biomassa.jpg';
import Hidreletrica from '../assets/Hidreletricas.jpg';
import PlacaSolar from '../assets/PlacasSolares.jpg';
import Eolica from '../assets/EnergiaEolica.jpg';
import Footer from '../components/Footer/Footer';

function Usuario() {
    const [usuarios, setUsuarios] = useState([]);
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

    const associarEnergiaFavorita = (usuarios) => {
        const energias = ['Energia Eólica', 'Energia Solar', 'Biomassa', 'Hidrelétricas'];
        return usuarios.map(usuario => {
            const energiaAleatoria = energias[Math.floor(Math.random() * energias.length)];
            return { ...usuario, energiaFavorita: energiaAleatoria };
        });
    };

    useEffect(() => {
        const favoritas = JSON.parse(localStorage.getItem('energiasFavoritas')) || [];
        setEnergiasFavoritas(favoritas);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const usuariosComEnergia = associarEnergiaFavorita(data);
                setUsuarios(usuariosComEnergia.slice(0, 3)); 
            })
            .catch(error => console.error('Erro ao carregar os usuários:', error));
    }, []);

    return (
        <>
        <div>
            <h1 className='text-5xl text-verde-texto font-bold text-center p-10 mt-10'>Página do usuário</h1>
            <p className='text-2xl text-verde-escuro text-center font-semibold pb-28 mt-10'>Seja bem vindo a sua página do usuário!</p>
        </div>
        <div>
            <h1 className='text-3xl text-verde-texto text-center font-bold mb-20'>
                Suas Energias Favoritadas:
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
                    <p className="text-verde-escuro">Nenhuma energia favorita selecionada.</p>
                )}
            </div>
        </div>
        <h1 className='text-3xl text-verde-texto text-center font-bold mb-20'>
                Alguns usuários e suas energias favoritas:
            </h1>
            <div className='flex flex-wrap justify-center gap-32 mb-32'>
                {usuarios.length > 0 ? (
                    usuarios.map(usuario => (
                        <div key={usuario.id} className="flex flex-col bg-verde-escuro rounded-lg p-4">
                            <h2 className="text-xl text-white font-bold text-center">{usuario.name}</h2>
                            <p className="text-md text-white text-center">{usuario.email}</p>
                            <div className="flex flex-col items-center mt-4">
                                <img 
                                    src={energiaImagens[usuario.energiaFavorita]} 
                                    alt={usuario.energiaFavorita} 
                                    className="max-w-72 rounded-t-lg" 
                                />
                                <h3 className="text-lg text-white font-bold text-center py-4">{usuario.energiaFavorita}</h3>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-verde-escuro">Nenhum usuário encontrado.</p>
                )}
            </div>
            <Footer/>
        </>
    );
}

export default Usuario;
