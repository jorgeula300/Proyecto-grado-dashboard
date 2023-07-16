// Proteccion.js
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Crear una instancia de axios con la URL base y el encabezado
const api = axios.create({
    baseURL: "http://191.101.235.193/panel",
    headers: {
        "Content-Type": "application/json",
    },
});

export function Proteccion({ children }) {
    const navigate = useNavigate();
    // Obtener el token del localStorage o del estado global
    const token = localStorage.getItem("token");
    // Verificar si el token es válido enviándolo al servidor con axios
    // Supongamos que hay una función llamada verificarToken que hace una petición post y devuelve true o false
    const valido = verificarToken(token);
    // Si no es válido, redirigir al login
    if (!valido) {
        console.log(valido);
        navigate("/Login");
        return null;

    } else {
        // Si es válido, renderizar los hijos

        return children;
    }

}



// Función para verificar el token con una petición post usando axios
async function verificarToken(token) {
    try {
        // Hacer la petición al servidor con el token en el cuerpo o en el encabezado
        const response = await api.post("/verify", { token }, {
            // Opcionalmente, puedes enviar el token en el encabezado de autorización
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        // Obtener la respuesta del servidor y convertirla a JSON
        const data = response.data;
        // Supongamos que la respuesta tiene un campo llamado valid que indica si el token es válido o no
        return data.valid;
    } catch (error) {
        // Si hay algún error, devolver false
        console.error(error);
        return false;
    }
}
