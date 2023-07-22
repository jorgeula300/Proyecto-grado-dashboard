export function Componentes() {
    return (<div className="grid grid-cols-3 gap-3 w-full h-full m-auto pt-3 pb-3 pl-5 pr-5 overflow-auto animate-fade animate-once animate-duration-1000 animate-delay-0" >
        <div className=" border-2 bg-white border-white shadow-md shadow-slate-800 rounded-lg w-[100%] h-[80%]">
            <img className=" rounded-lg w-[100%] h-[50%]" src="/ESP32-1.jpg" alt="ESP32" />
            <p className="text-center text-xl font-bold">ESP32</p>
            <p className=" text-justify text-md font-semibold px-3">ESP32 es la denominación de una familia de chips SoC de bajo
                coste y consumo de energía, con tecnología Wi-Fi y Bluetooth de modo dual integrada.</p>
        </div>
        <div className=" bg-transparent border-2 bg-white border-white shadow-md shadow-slate-800 rounded-lg w-[100%] h-[80%]">
            <img className=" rounded-lg w-[100%] h-[50%]" src="/Protoboard.jpg" alt="Protoboard" />
            <p className="text-center text-xl font-bold">PROTO BOARD</p>
            <p className=" text-justify text-md font-semibold px-3">Una placa de pruebas o placa de inserción es un tablero con
                orificios que se encuentran conectados eléctricamente entre sí de manera interna.</p>

        </div>
        <div className=" bg-transparent border-2 bg-white border-white shadow-md shadow-slate-800 rounded-lg w-[100%] h-[80%]">
            <img className=" rounded-lg w-[100%] h-[50%]" src="/sensor-dht22.jpg" alt="sensor-dht22" />
            <p className="text-center text-xl font-bold">SENSOR DHT22</p>
            <p className=" text-justify text-md font-semibold px-3">El sensor DHT22 permite monitorear temperatura y humedad relativa de forma precisa y sencilla a un bajo precio.
                La salida suministrada es de tipo digital, no requiriéndose utilizar entradas analógicas.</p>

        </div>
        <div className=" bg-transparent border-2 bg-white border-white shadow-md shadow-slate-800 rounded-lg w-[100%] h-[80%]">
            <img className=" rounded-lg w-[100%] h-[50%]" src="/sensor-Mq-7.jpg" alt="sensor Mq-7" />
            <p className="text-center text-xl font-bold">SENSOR MQ7</p>
            <p className=" text-justify text-md font-semibold px-3">El MQ-7 es un sensor que se encarga de la detección de concentraciones de monóxido de carbono en el aire,
                siempre y cuando se encuentren en un rango de 200ppm a 2000ppm.</p>

        </div>
        <div className=" bg-transparent border-2 bg-white border-white shadow-md shadow-slate-800 rounded-lg w-[100%] h-[80%]">
            <img className=" rounded-lg w-[100%] h-[50%]" src="/Sensor-GP2Y1014AU0-SPOP1010.jpg" alt="Sensor-GP2Y1014AU0-SPOP1010" />
            <p className="text-center text-xl font-bold">SENSOR GP2Y1014AU0</p>
            <p className=" text-justify text-md font-semibold px-3">gp2y1014au0 F compacto polvo del sensor de humo de partículas sensor óptico con cable en lugar de sensor óptico.</p>

        </div>
        <div className=" bg-transparent border-2 bg-white border-white shadow-md shadow-slate-800 rounded-lg w-[100%] h-[80%]">
            <img className=" rounded-lg w-[100%] h-[50%]" src="/sensor-mq-131.png" alt="sensor-mq-131" />
            <p className="text-center text-xl font-bold">SENSOR MQ131</p>
            <p className=" text-justify text-md font-semibold px-3">El sensor de gas ozono MQ131 tiene una alta sensibilidad al ozono y también tiene sensibilidad a los gases de óxido fuerte,
                como Cl2 y NO2, etc. Responde de manera opuesta a los gases de interferencia orgánicos, en comparación con el O3.</p>

        </div>
        
    </div>);

}
