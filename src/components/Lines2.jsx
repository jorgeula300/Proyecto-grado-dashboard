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





export function Lines2() {
    var co2 = [0];
    var humedad = [1];
    let hora = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];  // de 8am a 12pm me tiene que mandar un objeto con todas las medisiones el objeto debe de tener la lista de datos de cada medision.

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
        let hora = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"];

        intervalRef.current = setInterval(() => {
            let url = 'http://191.101.235.193/medicion_hora';

            fetch(url)
                .then(res => res.json())
                .then((respuesta) => { // los datos vendria atravez de respuesta con los datos de cada medision  y el labels vendria con las horas. El aggregado de datos que me va a mandar debe ser por horas.

                    setMidata({
                        labels: hora,
                        datasets: [ // Cada una de las líneas del gráfico
                            {
                                label: 'Humedad',
                                data: respuesta.medicion_sensores.humedad,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgb(25, 99, 132)',
                                backgroundColor: 'rgba(25, 99, 132, 0.5)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(25, 99, 132)',
                                pointBackgroundColor: 'rgba(25, 99, 132)',
                            },
                            {
                                label: 'Temperatura',
                                data: respuesta.medicion_sensores.temperatura,
                                tension: 0.5,
                                fill: false,
                                borderColor: 'rgba(0, 128, 0, 1)',
                                backgroundColor: 'rgba(0, 64, 0, 1)',
                                pointRadius: 5,
                                pointBorderColor: 'rgba(0, 128, 0, 1)',
                                pointBackgroundColor: 'rgba(0, 128, 0, 1)',
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
                max: 100
            },
            x: {
                ticks: { color: 'rgb(255, 99, 132)' }
            }
        }
    };


    return <Line data={midata} options={misoptions} /> // el estado debe tener la variable data [data,setdata] la variable que se debe actualizar es mi data 
}


