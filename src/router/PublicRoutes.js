import { Routes,Route,Navigate } from "react-router-dom"
import LogingScreen from "../componentes/LoginScreen/LogingScreen"
import RegisterScreen from "../componentes/RegisterScreen/RegisterScreen"






const PublicRoutes = () => {

                return (
                    <Routes>

                            <Route path="/login" element={ <LogingScreen/> }  />
                            <Route path="/register" element={ <RegisterScreen/> }  />
                            <Route path="*" element={ <Navigate to="/login"/>  } />

                    </Routes>      
                )
}

export default PublicRoutes