import { Link } from 'react-router-dom';

function CardsEnergia({ EnergiaCards }) {
    const handleFavoritar = (nomeEnergia) => {
        const favoritas = JSON.parse(localStorage.getItem('energiasFavoritas')) || [];

        if (favoritas.includes(nomeEnergia)) {
            const novasFavoritas = favoritas.filter(energia => energia !== nomeEnergia);
            localStorage.setItem('energiasFavoritas', JSON.stringify(novasFavoritas));
            alert("Energia favorita removida :(")
        } else {
            favoritas.push(nomeEnergia);
            localStorage.setItem('energiasFavoritas', JSON.stringify(favoritas));
            alert("Energia Favorita adicionada!")
        }
    };

    return (
        <>
            {EnergiaCards.map(card => (
                <div key={card.nome} className="flex flex-col bg-verde-escuro rounded-lg">
                    <img src={card.foto} alt="" className="max-w-72 rounded-t-lg" />
                    <h2 className="text-lg text-white font-bold text-center py-8">{card.nome}</h2>
                    <Link to={`/comunidade/${card.nome}`} className="text-center text-white hover:underline mb-4">
                        Saiba Mais
                    </Link>
                    <button 
                        onClick={() => handleFavoritar(card.nome)} 
                        className="bg-verde-escuro text-white py-2 px-4 rounded-b-lg hover:bg-verde-claro mt-4">
                        {JSON.parse(localStorage.getItem('energiasFavoritas'))?.includes(card.nome) 
                            ? "Remover" 
                            : "Favoritar"
                        }
                    </button>
                </div>
            ))}
        </>
    );
}

export default CardsEnergia;
