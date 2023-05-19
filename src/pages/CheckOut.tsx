import {Fragment, useContext, useEffect, useState} from "react";
import {CalculatorContext, ICalculatorContext} from "../provider/CalculatorProvider.tsx";
import {Grid, Popover, Typography} from "@mui/material";
import Panel from "../components/Panel.tsx";
import Display from "../components/Display.tsx";

const CheckOut = () => {

    const [pressed, setPressed] = useState<boolean>();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const open = Boolean(anchorEl);

    const {
        name,
        total,
        given,
        addGiven,
        options,
        centMode,
        finish,
        setCentMode,
        abort,
        productsCount,
        returnsCount
    } = useContext<ICalculatorContext>(CalculatorContext);

    useEffect(() => {
        const timer = pressed
            ? setTimeout(async () => {
                await finish();
            }, 500)
            : undefined;
        return () => clearTimeout(timer);
    }, [finish, pressed]);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
        setTimeout(async () => {
            setAnchorEl(null);
        }, 500)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Grid container spacing={0} padding={1} justifyContent={"center"}>
                <Grid item container spacing={1} padding={1} md={6}>
                    <Grid item xs={12}>
                        <Typography variant={"h5"}>{name}</Typography>
                    </Grid>
                    { centMode ?
                        <Fragment>
                            {[1, 2, 5, 10, 20, 50].map((key: number) => {
                                return <Panel height={"40px"} key={key} handleClick={async () => addGiven( key * 0.01, false)} size={4}>
                                    <Typography variant={"body1"}>{key}</Typography>
                                </Panel>
                            })}
                        </Fragment>
                        :
                        <Fragment>
                            {[1, 2, 5, 10, 20, 50, 100, 200].map((key: number) => {
                                return <Panel height={"40px"} key={key} handleClick={async () => addGiven(key, false)} size={4}>
                                    <Typography variant={"body1"}>{key}</Typography>
                                </Panel>
                            })}
                        </Fragment>
                    }

                    <Panel height={"40px"} handleClick={async () => addGiven(options.returns, true)} size={4}>
                        <Typography variant={"body1"}>Pfand</Typography>
                        <Typography variant={"body2"} color={"grey"}>{options.returns} EUR</Typography>
                    </Panel>
                    <Panel height={"40px"} handleClick={async () => setCentMode(!centMode)} size={4}
                           color={centMode ? "#e74646" : undefined}>
                        <Typography variant={"body1"}>Cents</Typography>
                    </Panel>
                    <Panel height={"40px"} handleClick={async () => await abort()} size={4} color={"#e74646"}>
                        <Typography variant={"body1"}>Abbruch</Typography>
                    </Panel>
                    <Popover
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography>Länger gedrückt halten!</Typography>
                    </Popover>
                    <Panel height={"40px"}
                           handleClick={(e: any) => handleClick(e)}
                           handleMouseUp={() => setPressed(undefined)}
                           handleMouseDown={(e: any) => setPressed(e.target)} size={4}
                           color={(given - total) >= 0 ? "#78d372" : undefined}
                           disabled={(given - total) < 0}
                    >
                        <Typography variant={"body1"}>Fertig</Typography>
                    </Panel>
                </Grid>
                <Grid container spacing={0} padding={1} justifyContent={"center"} sx={{position: "fixed", bottom: 0}}>
                    <Grid item container spacing={1} padding={3} md={6}>
                        <Display size={5} disabled={true}>
                            <Typography variant={"body1"}>{(given - total) <= 0 ? "Bekommen" : "Geben"}</Typography>
                            <Typography variant={"body2"}>{(given - total).toFixed(2)} EUR</Typography>
                        </Display>
                        <Display size={5} disabled={true}>
                            <Typography variant={"body1"}>{(productsCount - returnsCount) <= 0 ? "Bekommen" : "Geben"}</Typography>
                            <Typography variant={"body2"}>{(productsCount - returnsCount)} Märkchen</Typography>
                        </Display>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )

}

export default CheckOut;