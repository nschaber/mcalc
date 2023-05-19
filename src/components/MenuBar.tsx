import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

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
            </Toolbar>
        </AppBar>
    )

}

export default MenuBar;