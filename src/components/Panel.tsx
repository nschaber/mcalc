import {Fragment, ReactElement} from "react";
import {Box, Card, CardActionArea, CardContent, Grid} from "@mui/material";

interface IProps {
    children: Array<ReactElement> | ReactElement;
    size: number;
    handleClick?: () => void;
    handleMouseDown?: (e: any) => void;
    handleMouseUp?: () => void;
    color?: string;
    disabled?: boolean;
    height?: string;
}

const Panel = ({children, size, handleClick, color, handleMouseDown, handleMouseUp, disabled, height}: IProps) => {

    return (
        <Fragment>
            <Grid margin={0} padding={0} item xs={size}>
                <Card elevation={3} sx={ color ? { backgroundColor: color} : {}}>
                    <CardActionArea disabled={disabled}>
                        <CardContent sx={{margin: "0px", paddingLeft: "0px", paddingRight: "0px"}} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleClick}>
                            <Box textAlign={"center"} justifyContent={"center"} sx={{ maxHeight: height, minHeight: height}}>
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