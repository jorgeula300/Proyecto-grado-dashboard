import { LinesChart } from "../components/LinesChart";
export function Datos() {
    return (<div className="container grid grid-cols-2 gap-4 w-[60%] h-[60%] m-auto">
        <div className="container w-[100%] h-[100%] bg-transparent border-2 border-[#0B2239] shadow-md   shadow-[#0B2239]  ">
            <LinesChart />

        </div>
        <div className="container w-[100%] h-[100%] bg-transparent border-2 border-[#0B2239] shadow-md shadow-[#0B2239]  ">

        </div>
        <div className="container w-[100%] h-[100%] bg-transparent border-2 border-[#0B2239] shadow-md shadow-[#0B2239]  ">

        </div>
        <div className="container w-[100%] h-[100%] bg-transparent border-2 border-[#0B2239] shadow-md shadow-[#0B2239]  ">

        </div>
    </div>);

}