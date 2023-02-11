import { Routes,Route,Navigate } from "react-router-dom"
import LogingScreen from "../componentes/LoginScreen/LogingScreen"






const PublicRoutes = () => {

                return (
                    <Routes>

                            <Route path="/login" element={ <LogingScreen/> }  />
                            <Route path="*" element={ <Navigate to="/login"/>  } />

                    </Routes>      
                )
}

export default PublicRoutes