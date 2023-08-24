import {Fragment, ReactElement} from "react";
import {Box, Card, CardActionArea, CardContent, Grid} from "@mui/material";

interface IProps {
    children: Array<ReactElement> | ReactElement;
    size: number;
    handleClick?: (e: any) => void;
    handleMouseDown?: (e: any) => void;
    handleMouseUp?: () => void;
    color?: string;
    disabled?: boolean;
    height?: string;
}

import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

const enterKeyframe = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;
const StyledCard = styled(Card)`
  && .MuiTouchRipple-child {
    background-color: #0096ff;
  }
  && .MuiTouchRipple-rippleVisible {
    opacity: 0.5;
    animation-name: ${enterKeyframe};
    animation-duration: 250ms;
    animation-timing-function: ${({ theme }) =>
    theme.transitions.easing.easeInOut};
  }
`;

const Panel = ({children, size, handleClick, color, handleMouseDown, handleMouseUp, disabled, height}: IProps) => {

    return (
        <Fragment>
            <Grid margin={0} padding={0} item xs={size}>
                <StyledCard elevation={3} sx={ disabled ? { backgroundColor: "grey" } : (color ? { backgroundColor: color} : {})}>
                    <CardActionArea disabled={disabled}>
                        <CardContent sx={{margin: "0px", paddingLeft: "0px", paddingRight: "0px"}} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleClick}>
                            <Box textAlign={"center"} justifyContent={"center"} sx={{ maxHeight: height, minHeight: height}}>
                                {children}
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </StyledCard>
            </Grid>
        </Fragment>
    )

}

export default Panel;