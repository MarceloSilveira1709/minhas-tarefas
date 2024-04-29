import BotaoAdicionar from "../../Components/BotaoAdicionar"
import BarraLateral from "../../containers/Barralateral"
import ListaDeTarefas from "../../containers/Barralateral/ListaDeTarefas"


const Home = () =>  (
  <>
  <BarraLateral  mostrarFiltros/>
  <ListaDeTarefas />
  <BotaoAdicionar/>
  </>
)

export default Home
