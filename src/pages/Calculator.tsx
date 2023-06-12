import {Fragment, useContext} from "react";
import {Grid, Typography} from "@mui/material";
import Panel from "../components/Panel.tsx";
import {CalculatorContext, ICalculatorContext} from "../provider/CalculatorProvider.tsx";
import {Entity} from "../model/Model.ts";
import {NavigateFunction, useNavigate} from "react-router-dom";
import Display from "../components/Display.tsx";
import {ProductPad} from "../components/ProductPad.tsx";
import {DirectPad} from "../components/DirectPad.tsx";

const Calculator = () => {

    const {
        name,
        total,
        addValue,
        setCentMode,
        centMode,
        clear,
        directMode,
        setDirectMode,
        options
    } = useContext<ICalculatorContext>(CalculatorContext);
    const navigate: NavigateFunction = useNavigate()

    return (
        <Fragment>
            <Grid container spacing={0} padding={1} justifyContent={"center"}>
                <Grid item container spacing={1} padding={1} md={6}>
                    <Grid item xs={12}>
                        <Typography variant={"h5"}>{name}</Typography>
                    </Grid>
                    {directMode ?
                        <DirectPad
                            handleClick={async () => setCentMode(!centMode)}
                            centMode={centMode}
                            callbackfn={(key: number) =>
                                <Panel
                                    height={"40px"}
                                    key={key}
                                    handleClick={async () => addValue(centMode ? key * 0.01 : key, false)}
                                    size={4}
                                >
                                    <Typography variant={"body1"}>{key}</Typography>
                                </Panel>}/>
                        :
                        <ProductPad options={options} callbackfn={(value: Entity) =>
                            <Panel
                                height={"40px"} key={value.key}
                                handleClick={async () => addValue(value.value.default + options.returns, true)}
                                size={4}>
                                <Typography
                                    variant={"body1"}
                                    padding={0}
                                    justifyContent={"center"}
                                    margin={0}
                                >
                                    {value.name}
                                </Typography>
                                <Typography
                                    variant={"body2"}
                                    padding={0}
                                    justifyContent={"center"}
                                    margin={0}
                                    color={"grey"}
                                >
                                    {value.value.default.toFixed(2)} EUR
                                </Typography>
                            </Panel>}/>
                    }
                    <Panel height={"40px"} handleClick={async () => setDirectMode(!directMode)} size={4}
                           color={directMode ? "#17aeef" : undefined}>
                        <Typography variant={"body1"}>Direkt</Typography>
                    </Panel>
                    <Panel height={"40px"} handleClick={async () => clear()} size={4}
                           color={total > 0 ? "#e74646" : undefined} disabled={total <= 0}>
                        <Typography variant={"body1"}>Löschen</Typography>
                    </Panel>
                    <Panel height={"40px"} handleClick={async () => navigate("checkout")} size={4}
                           color={total > 0 ? "#78d372" : undefined} disabled={total <= 0}>
                        <Typography variant={"body1"}>Kassieren</Typography>
                    </Panel>
                    <div style={{marginBottom: "250px"}}></div>
                </Grid>
                <Grid container spacing={0} padding={1} justifyContent={"center"} sx={{position: "fixed", bottom: 0}}>
                    <Grid item container spacing={1} padding={3} md={6}>
                        <Display size={5} disabled={true}>
                            <Typography variant={"body1"}>Total</Typography>
                            <Typography variant={"body2"}>{total.toFixed(2)} EUR</Typography>
                        </Display>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )

}

export default Calculator;