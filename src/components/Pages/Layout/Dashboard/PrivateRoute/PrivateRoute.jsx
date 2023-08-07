import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


//si no esta logueado, lo redirige a login
//utilizando la etiqueta Navigate
//caso contrario me va a renderizar children
//es una prop que los componentes que generan mas componentes tienen
const PrivateRoute = ({children}) => {
    const userLogged = useSelector((state) => state.user.user)
    

    if (!userLogged) {
        return <Navigate to='/login' replace= {true}/>
    }
    return children
}

export default PrivateRoute