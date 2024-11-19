import Comunidade from "../components/Comunidade/Comunidade";
import Footer from "../components/Footer/Footer";
import GreenWorld from "../components/GreenWorld/GreenWorld";
import Infos from "../components/Infos/Infos";
import Missao from "../components/Missao/Missao";

function Home() {
    return ( <>
              <GreenWorld/>  
              <Missao/>
              <Infos/>
              <Comunidade/>
              <Footer/>
            </> );
}

export default Home;