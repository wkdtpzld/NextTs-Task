import Box from "@mui/material/Box";
import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";

interface ILayOutProps {
    children: React.ReactNode
}

export default function LayOut({children}: ILayOutProps) {

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "100px",
                    justifyContent: 'center',
                }}>
                <Header />
                {children}
                <Footer />
            </Box>
            
        </>
    );
}