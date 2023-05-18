import {Fragment, useEffect, useState} from 'react'
import {Outlet} from "react-router-dom";
import MenuBar from "../components/MenuBar.tsx";
import {Backdrop, CircularProgress, useTheme} from "@mui/material";

const App = () => {

    const [splash, setSplash] = useState<boolean>(true);
    const theme = useTheme()

    useEffect(() => {
        setTimeout(() => {
            setSplash(false);
        }, 1000)
    }, []);

    return (
        <Fragment>
            {!splash ?
                <Fragment>
                    <MenuBar/>
                    <Outlet/>
                </Fragment>
                :
                <Backdrop
                    sx={{ color: '#fff', backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}
                >
                    <CircularProgress color="primary" />
                </Backdrop>
            }
        </Fragment>
    )

};

export default App;
