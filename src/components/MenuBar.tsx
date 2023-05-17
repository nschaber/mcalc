import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const MenuBar = () => {

    return (
        <AppBar position={"static"}>
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{flexGrow: 1}}
                >
                    MCalc
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default MenuBar;