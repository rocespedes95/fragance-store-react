import { NavBar } from "./componentes/NavBar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import ItemListContainer from "./componentes/ItemListContainer.js";

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greating="texto item list container"/>
    </div>
  );
}

export default App;
