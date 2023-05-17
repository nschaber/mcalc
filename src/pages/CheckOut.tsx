import {Fragment, useContext} from "react";
import {CalculatorContext, ICalculatorContext} from "../provider/CalculatorProvider.tsx";
import {Grid, Typography} from "@mui/material";
import Panel from "../components/Panel.tsx";

const CheckOut = () => {

    const {
        name,
        total,
        given,
        addGiven,
        options,
        centMode,
        setCentMode,
        abort,
        productsCount,
        returnsCount
    } = useContext<ICalculatorContext>(CalculatorContext);

    return (
        <Fragment>
            <Grid container spacing={1} padding={1}>
                <Grid item xs={12}>
                    <Typography variant={"h5"}>{name}</Typography>
                </Grid>
                {[1, 2, 5, 10, 20, 50, 100, 200].map((key: number) => {
                    return <Panel key={key} handleClick={async () => addGiven(key, false)} size={4}>
                        <Typography variant={"body1"}>{key}</Typography>
                    </Panel>
                })}
                <Panel handleClick={async () => addGiven(options.returns, true)} size={4}>
                    <Typography variant={"body1"}>Pfand</Typography>
                    <Typography variant={"body2"} color={"grey"}>{options.returns} EUR</Typography>
                </Panel>
                <Panel handleClick={async () => setCentMode(!centMode)} size={4}
                       color={centMode ? "#e74646" : undefined}>
                    <Typography variant={"body1"}>Cents</Typography>
                </Panel>
                <Panel handleClick={async () => await abort()} size={4} color={"#e7af20"}>
                    <Typography variant={"body1"}>Abbruch</Typography>
                </Panel>
                <Panel handleClick={async () => await abort()} size={4}
                       color={(given - total) >= 0 ? "#57ee44" : undefined}>
                    <Typography variant={"body1"}>Fertig</Typography>
                </Panel>
            </Grid>
            <Grid container spacing={2} margin={2} sx={{position: "fixed", bottom: 0}}>
                <Grid item xs={4}>
                    <Typography variant={"h6"}>{(given - total) <= 0 ? "Bekommen" : "Geben"}</Typography>
                    <Typography variant={"body1"}>{(given - total).toFixed(2)} EUR</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant={"h6"}>{(productsCount - returnsCount) <= 0 ? "Bekommen" : "Geben"}</Typography>
                    <Typography variant={"body1"}>{(productsCount - returnsCount)} Märkchen</Typography>
                </Grid>
            </Grid>

        </Fragment>
    )

}

export default CheckOut;