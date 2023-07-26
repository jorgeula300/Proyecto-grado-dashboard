import { LinesChart } from "../components/LinesChart";
import { Lines2 } from "../components/Lines2";
export function Datos() {
    return (<div className="container grid grid-cols-2 gap-4  w-[100%] h-[100%] m-auto animate-fade animate-once animate-duration-1000 animate-delay-0 p-5">
        <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
            <LinesChart />

        </div>
        <div className="container w-[100%] h-[50%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
            <Lines2/>

        </div>
        
    </div>);

}