import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {CssBaseline} from "@mui/material";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/Router.tsx";
import StyleProvider from "./provider/StyleProvider.tsx";
import "./index.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <StyleProvider>
            <CssBaseline/>
            <RouterProvider router={router}/>
        </StyleProvider>
    </StrictMode>,
)
