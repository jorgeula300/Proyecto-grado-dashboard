
export function Home() {
    return (<div className="container flex  justify-center w-[70%] h-[90%] mx-auto my-10 shadow-md shadow-[#0B2239]  bg-slate-300 break-words relative overflow-y-scroll animate-fade animate-once animate-duration-1000 animate-delay-0">

        <div className="flex flex-col justify-center  mx-20 my-3 absolute">
            <h1 className=" text-3xl font-bold text-[#0B2239] uppercase m-auto ">El aire que respiramos</h1>
            <hr className="w-[80%] mx-auto my-2 border-[#0B2239]"></hr>
            <p className="whitespace-pre-line leading-7 text-justify text-[#0B2239] text-[2vh] font-bold hyphens-auto" lang="es">
                La calidad del aire es crucial para nuestra salud y el medio ambiente. Medirla es esencial por varias razones. En primer lugar, la contaminación atmosférica puede tener graves efectos en nuestra salud, como enfermedades respiratorias y cardiovasculares. Al medir la calidad del aire, podemos identificar áreas con altos niveles de contaminantes y tomar acciones para protegernos.

                Además, la medición del aire nos permite evaluar el cumplimiento de los estándares ambientales. Al monitorear los niveles de contaminación, podemos determinar si se están superando los límites permitidos y tomar medidas correctivas.

                También es importante medir la calidad del aire para comprender el impacto de nuestras actividades en el medio ambiente. La industria, el transporte y otros sectores pueden generar emisiones dañinas. Al medir la calidad del aire, podemos identificar las fuentes de contaminación y trabajar hacia soluciones más limpias y sostenibles.

                En resumen, la medición de la calidad del aire nos ayuda a proteger nuestra salud, evaluar el cumplimiento de estándares ambientales y promover prácticas más sostenibles. Es una herramienta fundamental para crear conciencia sobre la importancia de un aire limpio y tomar medidas para garantizarlo.
            </p>
            <div className="flex flex-row justify-center  mx-auto my-2 space-x-4 ">
                <div className="w-[25vh] h-[20vh] hover:animate-wiggle hover:animate-once hover:animate-duration-1000 hover:animate-delay-0  " >
                    <img src="/imgC1.jpeg" className="w-full h-full rounded-lg shadow-md shadow-slate-600" alt="imagenC1" />
                </div>
                <div className="w-[25vh] h-[20vh] hover:animate-jump hover:animate-wiggle hover:animate-duration-1000 hover:animate-delay-0  " >
                    <img src="/imgC2.jpg" className="w-full h-full rounded-lg shadow-md shadow-slate-600" alt="imagenC1" />
                </div>
                <div className="w-[25vh] h-[20vh] hover:animate-jump hover:animate-wiggle hover:animate-duration-1000 hover:animate-delay-0 " >
                    <img src="/imgC3.jpg" className="w-full h-full rounded-lg shadow-md shadow-slate-600   " alt="imagenC1" />
                </div>

            </div>



        </div>

    </div>);

}
