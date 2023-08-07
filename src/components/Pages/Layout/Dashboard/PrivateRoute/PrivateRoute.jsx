import { Navigate } from "react-router-dom";


//recibe user, que es la propiedad que va a controlar
//si no esta logueado, lo redirige a login
//utilizando la etiqueta Navigate
//caso contrario me va a renderizar children
//es una prop que los componentes que generan mas componentes tienen
const PrivateRoute = ({user, children}) => {
    if (!user) {
        return <Navigate to='/login' replace= {true}/>
    }
    return children
}

export default PrivateRoute