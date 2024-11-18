import Comunidade from "../components/Comunidade/Comunidade";
import GreenWorld from "../components/GreenWorld/GreenWorld";
import Infos from "../components/Infos/Infos";
import Missao from "../components/Missao/Missao";

function Home() {
    return ( <>
              <GreenWorld/>  
              <Missao/>
              <Comunidade/>
              <Infos/>
            </> );
}

export default Home;