import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";

const MenuBar = () => {

    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography
                    variant="h5"
                    color={"white"}
                    sx={{flexGrow: 1}}
                >
                    <Link to={"/"}>
                        MCalc
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default MenuBar;