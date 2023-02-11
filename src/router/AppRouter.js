import React from "react";
import { BrowserRouter } from "react-router-dom";
import {  useLoginContext } from "../componentes/context/LoginContext.js";
import PrivateRoutes from "./PrivateRoutes.js";
import PublicRoutes from "./PublicRoutes.js";




const AppRouter = () => {
    const { user } = useLoginContext()
    
    return (
        <BrowserRouter>
                { user.logged
                        ?   <PrivateRoutes/>
                        :   <PublicRoutes/>
                }
        </BrowserRouter>

  )
}

export default AppRouter