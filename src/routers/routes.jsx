import { Routes,Route } from "react-router-dom";
import {
    Categorias,
    ErrorMolecula,
    Home, 
    Login, 
    Paquetes, 
    ProtectedRoute,
    SpinnerLoader,
    UserAuth, 
    useUsuariosStore 
} from "../index";
import { useQuery } from "@tanstack/react-query";
import { Configuracion } from "../pages/Configuracion";

export function MyRoutes(){
    const {user} = UserAuth();
    const {MostrarUsuarios} = useUsuariosStore();
    const { data, isLoading, error } = useQuery({
        queryKey: ["mostrar usuario"], 
        queryFn: MostrarUsuarios,
    });
    if (isLoading){
        return <SpinnerLoader/>
    }
    if (error){
        //return <ErrorMolecula mensaje={error.message}/>
        <span>Error</span>
    }
    return (
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />}/>
                <Route path="/configurar" element={<Configuracion />} />
                <Route path="/configurar/paquetes" element={<Paquetes />} />
                <Route path="/configurar/Categorias" element={<Categorias />} />
            </Route>
        </Routes>
    );
}