import {Fragment, ReactElement} from "react";
import {Box, Card, CardActionArea, CardContent, Grid} from "@mui/material";

interface IProps {
    children: Array<ReactElement> | ReactElement;
    size: number;
    handleClick?: () => void;
    handleMouseDown?: (e: any) => void;
    handleMouseUp?: () => void;
    color?: string;
}

const Panel = ({children, size, handleClick, color, handleMouseDown, handleMouseUp}: IProps) => {

    return (
        <Fragment>
            <Grid item xs={size}>
                <Card elevation={3} sx={ color ? { backgroundColor: color} : {}}>
                    <CardActionArea>
                        <CardContent onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleClick}>
                            <Box textAlign={"center"} justifyContent={"center"} sx={{marginBottom: "5px", minHeight: "50px"}}>
                                {children}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Fragment>
    )

}

export default Panel;