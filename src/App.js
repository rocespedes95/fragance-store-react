
import 'bootstrap/dist/css/bootstrap.min.css';

import { LoginProvider } from "./componentes/context/LoginContext.js";
import { CartProvider } from "./componentes/context/CartContext.js";
import "./App.css";
import AppRouter from './router/AppRouter.js';

function App() {
    

  return (
          <LoginProvider>
              <CartProvider>
                      <AppRouter/>
              </CartProvider>
          </LoginProvider>
  
  );
}

export default App;
