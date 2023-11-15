import Navbar from "./components/Navbar.js"
import CardWidget from "./components/CardWidget.js"
import ItemListContainer from "./components/ItemListContainer.js"
import "bulma/css/bulma.css"


function App() {
  return (
    <div >
      <Navbar/>
      <ItemListContainer greeting={'Bienvenidos a PC Lux'}/>
    
    </div>
  )
}

export default App;
