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
                        main: "#0296ff"
                    },
                    background: {
                       paper: prefersDarkMode ? "#181818" : "#f1f1f1"
                    },
                },
                components: {
                    MuiAppBar: {
                        defaultProps: {
                            color: "transparent"
                        },
                        styleOverrides: {
                            root: {
                                backgroundColor: "#0296ff"
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
                    },
                    MuiCardContent: {
                        styleOverrides: {
                            root: {

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