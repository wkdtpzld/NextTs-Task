import { useMediaQuery } from '@material-ui/core';
import { Button, Toolbar, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from 'next/link';

const Header = () => {

    const isMobile = useMediaQuery("(max-width: 700px)");

    return (
        <AppBar color="inherit" sx={{ padding: "20px" }}>
            <Toolbar
                sx={
                    isMobile
                    ? { justifyContent: "center" }
                    : { justifyContent: "space-between" }
                }
            >
            <Typography
                sx={
                isMobile
                    ? { display: "none" }
                    : { fontWeight: "bold", fontSize: "24px" }
                }
            >
                AWESOME FOOD STORE
            </Typography>
            <Box>
                <Link href="/">
                <Button
                    variant="outlined"
                    color="warning"
                    sx={{
                    borderRadius: "10px",
                    marginRight: "20px",
                    }}
                >
                    Home
                </Button>
                </Link>
                <Link href="/about">
                <Button
                    variant="outlined"
                    sx={{
                    color: "text.primary",
                    borderRadius: "10px",
                    }}
                >
                    About
                </Button>
                </Link>
            </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;

