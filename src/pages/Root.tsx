import {Fragment} from "react";
import {Grid, Typography} from "@mui/material";
import Panel from "../components/Panel.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

const Root = () => {

    const navigate: NavigateFunction = useNavigate()

    return (
        <Fragment>
            <Grid container spacing={0} padding={1} justifyContent={"center"}>
                <Grid item container spacing={1} padding={1} md={6}>
                    <Panel handleClick={async () => await navigate("/bb")} size={12}>
                        <Typography variant={"h6"}>Bierburg</Typography>
                        <Typography variant={"body1"}>Rechner für die Bierburg</Typography>
                    </Panel>
                    <Panel handleClick={async () => await navigate("/mb")} size={12}>
                        <Typography variant={"h6"}>Megabar</Typography>
                        <Typography variant={"body1"}>Rechner für die Megabar</Typography>
                    </Panel>
                </Grid>
            </Grid>
            <Grid container spacing={0} padding={1} justifyContent={"center"} sx={{position: "fixed", bottom: 30}}>
                <Grid item container spacing={1} padding={1} md={6}>
                    <Panel handleClick={async () => await navigate("/history")} size={12}>
                        <Typography variant={"body1"}>Verlauf</Typography>
                    </Panel>
                </Grid>
            </Grid>
            <Grid container spacing={0} padding={1} justifyContent={"center"} sx={{position: "fixed", bottom: 0}}>
                <Typography variant={"body2"}>Made with <FavoriteIcon sx={{maxHeight: "17px", marginBottom: "-2px"}} fontSize={"small"}/> in Karlsruhe</Typography>
            </Grid>
        </Fragment>
    )

}

export default Root;