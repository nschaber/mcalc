import {Fragment, ReactElement} from "react";
import {Box, Card, CardActionArea, CardContent, Grid} from "@mui/material";
interface IProps {
    children: Array<ReactElement> | ReactElement;
    size: number;
    color?: string;
    disabled?: boolean;
}


const Display = ({children, size, color, disabled}: IProps) => {

    return (
        <Fragment>
            <Grid item xs={size}>
                <Card elevation={3} sx={ color ? { backgroundColor: color} : {}}>
                    <CardActionArea disabled={disabled}>
                        <CardContent>
                            <Box sx={{maxHeight: "40px"}}>
                                {children}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Fragment>
    )

}

export default Display;