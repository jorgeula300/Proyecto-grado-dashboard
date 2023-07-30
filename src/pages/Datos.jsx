import { useState } from "react";
import { LinesChart } from "../components/LinesChart";
import { Lines2 } from "../components/Lines2";
import { Lines3 } from "../components/Lines3";
import { Lines4 } from "../components/Lines4";
import { Lines5 } from "../components/Lines5";
import { Lines6 } from "../components/Lines6";
export function Datos() {
    const [option, setOption] = useState("Hora");


    const select = (e) => {
        console.log(option);
        setOption(e.target.value)
    }


    return (<div div className="felx text-center w-full h-full overflow-auto">
        <div className="flex flex-col justify-center items-center  m-auto ">
            <label for="fdatos">Selecciona la forma en la que quieres ver los datos:</label>
            <select id="datos" value={option} onChange={select}>
                <option value="Hora" >Hora</option>
                <option value="Semanas" >Semana</option>
                <option value="Mes">Mes</option>
            </select>

        </div>
        {option === "Hora" &&
            <div className="container grid grid-cols-2 gap-4  w-[100%] h-[80%] m-auto animate-fade animate-once animate-duration-1000 animate-delay-0 p-5">
                <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
                    <LinesChart />

                </div>
                <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
                    <Lines2 />

                </div>

            </div>
        }
        {option === "Semanas" &&
            <div className="container grid grid-cols-2 gap-4  w-[100%] h-[80%] m-auto animate-fade animate-once animate-duration-1000 animate-delay-0 p-5">
                <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
                    <Lines3 />

                </div>
                <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
                    <Lines4 />

                </div>

            </div>

        }
        {option === "Mes" &&
            <div className="container grid grid-cols-2 gap-4  w-[100%] h-[80%] m-auto animate-fade animate-once animate-duration-1000 animate-delay-0 p-5">
                <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
                    <Lines5 />

                </div>
                <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
                    <Lines6 />

                </div>

            </div>

        }


    </div>
    );

}