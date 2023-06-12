import {Fragment, useEffect, useState} from 'react'
import {Outlet} from "react-router-dom";
import MenuBar from "../components/MenuBar.tsx";
import {Backdrop, CircularProgress, IconButton, Snackbar, Typography, useTheme} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import IosShareIcon from '@mui/icons-material/IosShare';

const App = () => {

    const [splash, setSplash] = useState<boolean>(true);
    const [showInstallMessage, setShowInstallMessage] = useState<boolean>(false);
    const theme = useTheme()

    const isIos = () => /iphone|ipad|ipod/.test(window.navigator.userAgent.toLowerCase())
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    useEffect(() => {
        if (isIos() && !isInStandaloneMode()) {
            setShowInstallMessage(true);
        }
        setTimeout(() => {
            setSplash(false);
        }, 1000)
    }, []);


    return (
        <Fragment>
            <MenuBar/>
            <Outlet/>
            <Snackbar
                anchorOrigin={
                    {
                        vertical: 'bottom',
                        horizontal: 'center'
                    }
                }
                open={showInstallMessage}
                onClose={() => setShowInstallMessage(false)}
                message={<Fragment><Typography>Öffne <IosShareIcon/> und wähle <b>Zum Home-Bildschirm</b> aus
                    zum installieren</Typography> </Fragment>}
                action={<Fragment>
                    <IconButton
                        size="small"
                        aria-label="close"
                        color="inherit"
                        onClick={() => setShowInstallMessage(false)}
                    >
                        <CloseIcon fontSize="small"/>
                    </IconButton>
                </Fragment>}
            />
            <Backdrop
                sx={{
                    color: '#fff',
                    backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1
                }}
                open={splash}
            >
                <CircularProgress color="primary"/>
            </Backdrop>
        </Fragment>
    )

};

export default App;
