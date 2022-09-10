import Box from '@mui/material/Box';
import styled from 'styled-components';

const FooterlayOut = () => {
    return (
        <>
            <Footer>
                <FooterLine>
                </FooterLine>
                <Box px={{xs: 3, sm: 5}} py={{xs: 5, sm: 5}} bgcolor="white" color="black" >
                    <Box textAlign="center">copyright &copy; 2022 정광수</Box>
                </Box>
            </Footer>
        </>
        
    )
}

export default FooterlayOut;

const Footer = styled.footer`
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const FooterLine = styled.div`
    width: 90%;
    background-color: #353b48;
    padding: 5px 0px;
    border-radius: 15px;
`;