import { Outlet } from "react-router-dom";
// import {Menu} from './Menu';

export  function LayoutPublic() {
    return (
        <> 
     

        <main className='main flex flex-col lg:flex-row h-screen w-screen   '>
            {/* <Menu /> */}
            <Outlet />
        </main>
        </>
    );

}
