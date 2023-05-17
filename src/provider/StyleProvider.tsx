import {createTheme, ThemeProvider, useMediaQuery} from "@mui/material";
import {ReactElement, useMemo} from "react";

declare module '@mui/material/styles' {

}

interface IProps {
    children: Array<ReactElement>;
}

const StyleProvider = ({children}: IProps) => {

    const prefersDarkMode: boolean = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                    primary: {
                        main: "#1578fa"
                    },
                    background: {
                       paper: prefersDarkMode ? "#181818" : "#f1f1f1"
                    },
                },
                components: {
                    MuiAppBar: {
                        styleOverrides: {
                            root: {
                                background: "linear-gradient(126deg, rgba(2,0,36,1) 0%, rgba(23,91,238,1) 0%, rgba(0,255,173,1) 100%)"
                            }
                        }
                    },
                    MuiCard: {
                        styleOverrides: {
                            root: {
                                width: "100%",
                                minHeight: "50px"
                            }
                        }
                    }
                }
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

}

export default StyleProvider;