import {Fragment, ReactElement} from "react";
import Panel from "./Panel.tsx";
import {Typography} from "@mui/material";

export const DirectPad = (props: {
    callbackfn: (key: number) => ReactElement,
    handleClick: () => Promise<void>,
    centMode: boolean
}) => {
    return <Fragment>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(props.callbackfn)}
        <Panel height={"40px"} handleClick={props.handleClick} size={4} color={props.centMode ? "#e74646" : undefined}>
            <Typography variant={"body1"}>Cents</Typography>
        </Panel>
    </Fragment>;
};