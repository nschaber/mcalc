import {Fragment, useContext} from "react";
import {Grid, Typography} from "@mui/material";
import Panel from "../components/Panel.tsx";
import {CalculatorContext, ICalculatorContext} from "../provider/CalculatorProvider.tsx";
import {Entity} from "../model/Model.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";

const Calculator = () => {

    const {name, total, addValue, setCentMode, centMode, clear, directMode, setDirectMode, options} = useContext<ICalculatorContext>(CalculatorContext);
    const navigate: NavigateFunction = useNavigate()

    return (
        <Fragment>
            { options ?
                <Fragment>
                    <Grid container spacing={1} padding={1}>
                        <Grid item xs={12}>
                            <Typography variant={"h5"}>{name}</Typography>
                        </Grid>
                        { directMode ?
                            <Fragment>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((key: number) => {
                                    return <Panel key={key} handleClick={async () => addValue(key, false)} size={4}>
                                        <Typography variant={"body1"}>{key}</Typography>
                                    </Panel>
                                })}
                                <Panel handleClick={async () => setCentMode(!centMode)} size={4} color={centMode ? "#e74646" : undefined }>
                                    <Typography variant={"body1"}>Cents</Typography>
                                </Panel>
                            </Fragment>
                            :
                            <Fragment>
                                {options.products.map((value: Entity) => {
                                    return <Panel key={value.key} handleClick={async () => addValue(value.value.default + options.returns, true)} size={4}>
                                        <Typography variant={"body1"}>{value.name}</Typography>
                                        <Typography variant={"body2"} color={"grey"}>{value.value.default} EUR</Typography>
                                    </Panel>
                                })}
                            </Fragment>
                        }
                        <Panel handleClick={async () => setDirectMode(!directMode)} size={4} color={directMode ? "#17aeef" : undefined }>
                            <Typography variant={"body1"}>Direkt</Typography>
                        </Panel>
                        <Panel handleClick={async () => clear()} size={4} color={total > 0 ? "#e7af20" : undefined }>
                            <Typography variant={"body1"}>Löschen</Typography>
                        </Panel>
                        <Panel handleClick={async () => navigate("checkout")} size={4} color={total > 0 ? "#57ee44" : undefined }>
                            <Typography variant={"body1"}>Kassieren</Typography>
                        </Panel>
                    </Grid>
                    <Grid container spacing={2} margin={2} sx={{position: "fixed", bottom: 0}}>
                        <Grid item xs={12}>
                            <Typography variant={"h6"}>Total</Typography>
                            <Typography variant={"body1"}>{total.toFixed(2)} EUR</Typography>
                        </Grid>
                    </Grid>
                </Fragment>
                :
                null
            }
        </Fragment>
    )

}

export default Calculator;