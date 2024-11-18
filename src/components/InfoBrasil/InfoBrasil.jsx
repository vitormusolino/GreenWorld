function InfoBrasil({ infoCard }) {
    return (
        <>
            {infoCard.map(card => (
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-6xl text-verde-numeros font-bold border-b-8 border-verde-claro">{card.texto}</h1>
                    <p className="font-bold text-verde-texto text-xl text-wrap text-center mt-3">{card.fonte}</p>
                </div>
            ))}
        </>
    );
}

export default InfoBrasil;
