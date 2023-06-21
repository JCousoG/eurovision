import { ContextProvider } from "./components/contexto"
import Navegador from "./vistas/navegador"
import "./App.css"


function App() {
 

  return (
    <div className="App">
     <h1>Eurovisión 2023</h1>
     <ContextProvider>
      <Navegador/>
     </ContextProvider>
    </div>
  
    )

}

export default App
