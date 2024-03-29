import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import {Box} from "@mui/material";

const MenuBar = () => {

    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Link to={"/"}>
                    <div style={{display:"flex"}}>
                        <img style={{maxHeight: "30px"}} src={"/header.png"} alt={"Header"}/>
                        <Typography
                            variant="h6"
                            color={"white"}
                            sx={{marginLeft: "7px", lineHeight: "30px"}}
                        >
                            MCalc
                        </Typography>
                    </div>
                </Link>
                <Box flex={1} flexGrow={1}></Box>
            </Toolbar>
        </AppBar>
    )

}

export default MenuBar;