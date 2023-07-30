import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);





export function Lines6() {
    let co2 = [0];
    let humedad = [1];
    let hora = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];  // de 8am a 12pm me tiene que mandar un objeto con todas las medisiones el objeto debe de tener la lista de datos de cada medision.

    const [midata, setMidata] = useState(
        {
            labels: hora,
            datasets: [ // Cada una de las líneas del gráfico
                {
                    label: 'Cargando datos...',
                    data: co2,
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    pointRadius: 5,
                    pointBorderColor: 'rgba(255, 99, 132)',
                    pointBackgroundColor: 'rgba(255, 99, 132)',
                }, {
                    label: 'Cargando datos...',
                    data: humedad,
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(25, 99, 132)',
                    backgroundColor: 'rgba(25, 99, 132, 0.5)',
                    pointRadius: 5,
                    pointBorderColor: 'rgba(25, 99, 132)',
                    pointBackgroundColor: 'rgba(25, 99, 132)',
                },
            ],
        }
    );
    const intervalRef = useRef(null);

    useEffect(() => {
        let hora = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        
        intervalRef.current = setInterval(() => {
            let url = 'http://191.101.235.193/medicion_mes';

            fetch(url)
                .then(res => res.json())
                .then((respuesta) => { // los datos vendria atravez de respuesta con los datos de cada medision  y el labels vendria con las horas. El aggregado de datos que me va a mandar debe ser por horas.

                    setMidata({
                        labels: hora,
                        datasets: [ // Cada una de las líneas del gráfico
                            {
                                label: 'Co2',
                                data: respuesta.medicion_sensores.co,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(255, 99, 132)',
                                pointBackgroundColor: 'rgba(255, 99, 132)',
                            },
                            {
                                label: 'Polvo',
                                data: respuesta.medicion_sensores.polvo,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgba(255, 255, 0, 1)',
                                backgroundColor: 'rgba(128, 128, 0, 1)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(255, 255, 0, 1)',
                                pointBackgroundColor: 'rgba(128, 128, 0, 1)',
                            }, {
                                label: 'Ozono',
                                data: respuesta.medicion_sensores.ozono,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgba(255, 192, 203, 1)',
                                backgroundColor: 'rgba(192, 128, 128, 1)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(255, 192, 203, 1)',
                                pointBackgroundColor: 'rgba(255, 192, 203, 1)',
                            }, {
                                label: 'NO2',
                                data: respuesta.medicion_sensores.no2,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgba(255, 165, 0, 1)',
                                backgroundColor: 'rgba(128, 82, 0, 1)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(255, 165, 0, 1)',
                                pointBackgroundColor: 'rgba(255, 165, 0, 1)',
                            }, {
                                label: 'SO2',
                                data: respuesta.medicion_sensores.so2,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgba(128, 0, 128, 1)',
                                backgroundColor: 'rgba(64, 0, 64, 1)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(128, 0, 128, 1)',
                                pointBackgroundColor: 'rgba(128, 0, 128, 1)',
                            },
                        ],
                    }, 100)

                });


        }, 5000);

        return () => {
            clearInterval(intervalRef.current);
        };



    }, [setMidata]);




    var misoptions = {
        scales: {
            y: {
                min: 0,
                max: 6
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)' }
            }
        }
    };


    return <Line data={midata} options={misoptions} /> // el estado debe tener la variable data [data,setdata] la variable que se debe actualizar es mi data 
}


