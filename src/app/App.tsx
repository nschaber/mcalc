import {Fragment} from 'react'
import {Outlet} from "react-router-dom";
import MenuBar from "../components/MenuBar.tsx";

const App = () => (
    <Fragment>
        <MenuBar/>
        <Outlet/>
    </Fragment>
);

export default App;
