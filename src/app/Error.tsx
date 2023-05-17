import {Fragment} from "react";
import {Typography} from "@mui/material";

interface IProps {
    error?: { statusText: string, message: string };
}

const Error = ({error}: IProps) => {

    return (
        <Fragment>
            <Typography variant={"h1"}>Oops!</Typography>
            <Typography variant={"body1"}>Sorry, an unexpected error has occurred.</Typography>
            <Typography variant={"body2"}>{error?.statusText || error?.message}</Typography>
        </Fragment>
    )

}

export default Error;