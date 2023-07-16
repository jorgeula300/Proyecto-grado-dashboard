import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom"


export function Menu() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    if(token==null){
       window.location = window.location.origin;
    }
    
    const cerrarSesion = () => {
        // LÓGICA PARA CERRAR SESIÓN Y BORRAR EL TOKEN
        localStorage.removeItem("token");
        // NAVEGAR AL LOGIN
        navigate("/");
    };
    // const recibirToken = (token) => {
    //     console.log(token);
    // };

    return (<>
        {/* <Menu className="hidden" recibirToken={recibirToken}/> */}
        <div id='menu' className='bg-[#0B2239] w-screen h-[15%] lg:h-screen lg:w-[15%] lg:justify-center lg:space-y-20 border-r-2 border-[black] shadow-inner  shadow-[#0B2239]'>
            <div id='logo' className='shadow-sm shadow-emerald-700'>
                <img src="/airQ.png" alt="Logo" className=' ' />
            </div>
            <div id='menu-items' className='flex flex-col  w-[100%] lg:space-y-20'>
                <div id='menu-items-1' className='flex flex-col  w-[100%]'>
                    <button className='  hover:border-y-2 hover:border-emerald-500 hover:bg-cyan-900 w-full '>
                        <NavLink to="/Home" className=' text-white lg:p-2 lg:mx-5 lg:mt-1  lg:w-[100%] flex  lg:space-x-2 lg:justify-start' >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <span className='text-white font-bold text-sm'>Home</span>
                        </NavLink>
                        <hr className='hidden lg:block lg:w-full  lg:border-emerald-800' />
                    </button>


                    <button className='  hover:border-y-2 hover:border-emerald-500 hover:bg-cyan-900 w-full'>
                        <NavLink to="/Datos" className=' text-white lg:p-2 lg:mx-5 lg:mt-1  lg:w-[100%] flex  lg:space-x-2 lg:justify-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM9.75 17.25a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-.75zm2.25-3a.75.75 0 01.75.75v3a.75.75 0 01-1.5 0v-3a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0V18a.75.75 0 001.5 0v-5.25z" clip-rule="evenodd" />
                                <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                            </svg>

                            <span className='text-white font-bold text-sm'>Datos</span>
                        </NavLink>
                        <hr className='hidden lg:block lg:w-full  lg:border-emerald-800' />
                    </button>

                    <button className='  hover:border-y-2 hover:border-emerald-500 hover:bg-cyan-900 w-full'>
                        <NavLink to="/Componentes" className=' text-white lg:p-2 lg:mx-5 lg:mt-1  lg:w-[100%] flex  lg:space-x-2 lg:justify-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 01-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 016.126 3.537zM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 010 .75l-1.732 3.001c-.229.396-.76.498-1.067.16A5.231 5.231 0 016.75 12c0-1.362.519-2.603 1.37-3.536zM10.878 17.13c-.447-.097-.623-.608-.394-1.003l1.733-3.003a.75.75 0 01.65-.375h3.465c.457 0 .81.408.672.843a5.252 5.252 0 01-6.126 3.538z" />
                                <path fill-rule="evenodd" d="M21 12.75a.75.75 0 000-1.5h-.783a8.22 8.22 0 00-.237-1.357l.734-.267a.75.75 0 10-.513-1.41l-.735.268a8.24 8.24 0 00-.689-1.191l.6-.504a.75.75 0 10-.964-1.149l-.6.504a8.3 8.3 0 00-1.054-.885l.391-.678a.75.75 0 10-1.299-.75l-.39.677a8.188 8.188 0 00-1.295-.471l.136-.77a.75.75 0 00-1.477-.26l-.136.77a8.364 8.364 0 00-1.377 0l-.136-.77a.75.75 0 10-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 00-1.3.75l.392.678a8.29 8.29 0 00-1.054.885l-.6-.504a.75.75 0 00-.965 1.149l.6.503a8.243 8.243 0 00-.689 1.192L3.8 8.217a.75.75 0 10-.513 1.41l.735.267a8.222 8.222 0 00-.238 1.355h-.783a.75.75 0 000 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 10.513 1.41l.735-.268c.197.417.428.816.69 1.192l-.6.504a.75.75 0 10.963 1.149l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 101.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.771a.75.75 0 101.477.26l.137-.772a8.376 8.376 0 001.376 0l.136.773a.75.75 0 101.477-.26l-.136-.772a8.19 8.19 0 001.294-.47l.391.677a.75.75 0 101.3-.75l-.393-.679a8.282 8.282 0 001.054-.885l.601.504a.75.75 0 10.964-1.15l-.6-.503a8.24 8.24 0 00.69-1.191l.735.268a.75.75 0 10.512-1.41l-.734-.268c.115-.438.195-.892.237-1.356h.784zm-2.657-3.06a6.744 6.744 0 00-1.19-2.053 6.784 6.784 0 00-1.82-1.51A6.704 6.704 0 0012 5.25a6.801 6.801 0 00-1.225.111 6.7 6.7 0 00-2.15.792 6.784 6.784 0 00-2.952 3.489.758.758 0 01-.036.099A6.74 6.74 0 005.251 12a6.739 6.739 0 003.355 5.835l.01.006.01.005a6.706 6.706 0 002.203.802c.007 0 .014.002.021.004a6.792 6.792 0 002.301 0l.022-.004a6.707 6.707 0 002.228-.816 6.781 6.781 0 001.762-1.483l.009-.01.009-.012a6.744 6.744 0 001.18-2.064c.253-.708.39-1.47.39-2.264a6.74 6.74 0 00-.408-2.308z" clip-rule="evenodd" />
                            </svg>



                            <span className='text-white font-bold text-sm'>Componetes</span>
                        </NavLink>
                        <hr className='hidden lg:block lg:w-full  lg:border-emerald-800' />
                    </button>

                </div>

                <div id='menu-items-2' className='flex flex-col  w-[100%]'>

                    <button className='  hover:border-y-2 hover:border-emerald-500 hover:bg-cyan-900 w-full' onClick={cerrarSesion}>
                        <a href="/" className=' text-white lg:p-2 lg:mx-5 lg:mt-1  lg:w-[100%] flex  lg:space-x-2 lg:justify-start'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" />
                            </svg>
                            <span className='text-white font-bold text-sm'> Cerrar sesión</span>
                        </a>
                        <hr className='hidden lg:block lg:w-full  lg:border-emerald-800' />


                    </button>

                </div>

            </div>

        </div>
        <div>

        </div>
    </>)
}