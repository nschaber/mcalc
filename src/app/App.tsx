import {Fragment, useEffect, useState} from 'react'
import {Outlet} from "react-router-dom";
import MenuBar from "../components/MenuBar.tsx";

const App = () => {

    const [, setSplash] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
        }, 1000)
    }, []);

    return (
        <Fragment>
            <MenuBar/>
            <Outlet/>
        </Fragment>
    )

};

export default App;
