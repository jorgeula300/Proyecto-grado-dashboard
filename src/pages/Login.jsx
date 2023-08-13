import React from 'react';
import logo from '../logo.svg';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export function Login({ recibirToken }) {
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    // const [login, setLogin] = useState(false);
    // const [recordarme, setRecordarme] = useState(false);
    let token = '';
    let navigate = useNavigate();
    const tomarDatosDelInputText = (e) => {

        setUsuario(e.target.value);
    }
    const tomarDatosDelInputPassw = (e) => {

        setPassword(e.target.value);
    }
    // const tomarDatosDelInputCheck = (e) => {
    //     console.log(e.target.checked);
    //     // setRecordarme(e.target.checked);
    // }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Objeto con los datos de inicio de sesión
        const data = {
            user: usuario,
            password: password
        };

        // Envío de la solicitud POST a la API
        axios.post('http://191.101.235.193/panel', data)
            .then(response => {
                // Si la autenticación fue exitosa, puedes manejar la respuesta aquí

                token = response.data;
                // console.log(token.detail);
                console.log(token);

                // Guardar el token en el localStorage o en el estado global
                localStorage.setItem("token", token);
                navigate('/Home');

            })
            .catch(error => {
                // Si ocurrió un error durante la autenticación, puedes manejarlo aquí
                console.log(error.request.status);
                if (error.request.status === 0) {
                    setError("Error de red verifica tu conexión")
                } else if (error.request.status === 400) {
                    setError("Error en los datos ingresados")
                }
                else if (error.request.status === 401) {
                    setError("Usuario o contraseña incorrectos")
                } else if (error.request.status === 403) {
                    setError("Usuario no autorizado")
                } else if (error.request.status === 404) {
                    setError("Recurso no encontrado")
                }
                else if (error.request.status === 500) {
                    setError("Error del servidor")
                }
                else if (error.request.status === 503) {
                    setError("Servicio no disponible")
                }
                else if (error.request.status === 504) {
                    setError("Servicio no disponible")
                
                } 
                else if (error.request.status === 505) {
                    setError("Servicio no disponible")
                } else{
                    setError(error.message);
                }

            });


    };




    return (<div className="container flex items-center w-screen h-screen ">
        <form onSubmit={handleSubmit} className='container flex flex-col p-5 mx-auto bg-slate-300 w-2/4 h-2/4 items-center space-y-2 rounded-2xl shadow-lg shadow-[#0B2239]'>
            <img
                src={logo}
                alt="logo"
                className='w-[100px] h-[100px]  bg-black text-white rounded-full'
            />
            {error&& <p className=' bg-red-800 text-white p-2 rounded-md'>{error} </p>}
            <input
                type="text"
                placeholder='Usuario'
                id='usuario'
                onChange={tomarDatosDelInputText}
                className='bg-white  text-[#0B2239] border-2 border-[#0B2239]  w-[50%] h-[10%] p-2 rounded-md placeholder-[#0B2239]'
            />
            <input
                type="password"
                placeholder='Contraseña'
                id="password"
                onChange={tomarDatosDelInputPassw}
                className='bg-white  text-[#0B2239] border-2 border-[#0B2239]  w-[50%] h-[10%] p-2 rounded-md placeholder-[#0B2239]'
            />
            {/* <div className='flex justify-stretch  w-[50%]'>
                <input
                    type="checkbox"
                    placeholder='Recordarme'
                    id='check'
                    // checked={recordarme}
                    onChange={tomarDatosDelInputCheck}
                    className='bg-white relative right-[20%]  text-[#0B2239] border-2 border-[#0B2239]  w-[50%] rounded-md '

                /> <label className='text-[#0B2239] relative right-[40%]'>Recordarme</label>

            </div> */}
            <button className='bg-[#0B2239] hover:bg-sky-900 focus:outline-none focus:ring-sky-700 text-white w-[50%]  p-2 rounded-md'>Ingresar</button>
        </form>
    </div>);

}