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
        <h1 className="text-verde-texto text-6xl font-bold ml-80">No Brasil:</h1>
        <div className="flex justify-center flex-wrap items-center gap-24 max-w-2xl m-auto my-20">
            <InfoBrasil infoCard={infoCard}/>
        </div>
        
        </>
    );
}

export default Infos;
