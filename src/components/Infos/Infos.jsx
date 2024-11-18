import InfoBrasil from "../InfoBrasil/InfoBrasil";

function Infos() {
    const infoCard = [
        { texto: '60%', fonte: 'hidrelétricas' },
        { texto: '11%', fonte: 'energia eólica' },
        { texto: '5%', fonte: 'biomassa' },
        { texto: '11%', fonte: 'energia solar' },
        { texto: '10%', fonte: 'termelétricas' },
        { texto: '3%', fonte: 'outros' }
    ];

    return (
        <>
        <InfoBrasil infoCard={infoCard}/>
        </>
    );
}

export default Infos;
