function InfoBrasil({ infoCard }) {
    return (
        <>
            {infoCard.map((card, index) => (
                <div key={index}>
                    <h1>{card.texto}</h1>
                    <p>{card.fonte}</p>
                </div>
            ))}
        </>
    );
}

export default InfoBrasil;
