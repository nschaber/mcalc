import {Fragment} from "react";
import {Grid, Typography} from "@mui/material";
import Panel from "../components/Panel.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";

const Root = () => {

    const navigate: NavigateFunction = useNavigate()

    return (
        <Fragment>
            <Grid container spacing={1} padding={1}>
                <Panel handleClick={async () => await navigate("/bb")} size={12}>
                    <Typography variant={"h6"}>Bierburg</Typography>
                    <Typography variant={"body1"}>Rechner für die Bierburg</Typography>
                </Panel>
                <Panel handleClick={async () => await navigate("/mb")} size={12}>
                    <Typography variant={"h6"}>Megabar</Typography>
                    <Typography variant={"body1"}>Rechner für die Megabar</Typography>
                </Panel>
            </Grid>
        </Fragment>
    )

}

export default Root;