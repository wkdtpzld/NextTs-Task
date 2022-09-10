import { Backdrop, Modal } from '@material-ui/core';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { isOpenAtom } from '../../recoil/atoms';
import { useRecoilState } from "recoil";
import { fetchStoreDetail } from '../../apis/api';

interface IStoreProps {
    id: string | string[];
} 


const StoreDetail = ({ id }:IStoreProps) => {

    const storeId = [id].join("");

    const [open, setOpen] = useRecoilState(isOpenAtom);
    const handleClose = () => {
        setOpen(prev => !prev);

    }
    const { isLoading, data } = useQuery(
        [["store", storeId], storeId], () => fetchStoreDetail(storeId)
    );

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <Modal
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 400,
            }}
            >
            <AboutWrapper>
                <CloseBtn>
                <CloseIcon
                    sx={{
                        transform: "scale(1.3)",
                        borderRadius: "5px",
                        "&:hover": {
                            color: "white",
                            backgroundColor: "black",
                            transition: "0.2s",
                        },
                    }}
                    onClick={handleClose}
                    fontSize="large"
                />
                </CloseBtn>
                <ImageBox data-aos="fade-right">
                <Image
                    src={data?.image!}
                    width="1000px"
                    height="1000px"
                    alt={data?.name}
                />
                </ImageBox>
                <ContentBox>
                {isLoading ? null : (
                    <>
                    <TextBox data-aos="fade-right">
                        <h1>{data?.name}</h1>
                        <a href={`${data?.url}`}>
                            <h5>
                                {data?.url ? `To Page` : null}
                            </h5>
                        </a>
                        <p>{data?.description}</p>
                    </TextBox>
                    </>
                )}
                </ContentBox>
            </AboutWrapper>
            </Modal>
        </div>
    );
}

export default StoreDetail;

const AboutWrapper = styled.div`
    width: 80%;
    height: 80vh;
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 770px);
    justify-content: center;
    align-items: center;
    place-content: center;
    grid-auto-flow: column;
    transform: translate(10%, 10%);
    overflow: hidden;
    border-radius: 10px;

    @media screen and (max-width: 1180px) {
        width: 100%;
        height: 100%;
        transform: translate(0%, 0%);
        grid-template-columns: none;
        grid-template-rows: repeat(2, 1fr);
    }
`;

const ImageBox = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 5px;

    img {
        max-width: 100%;
        height: auto;
        display: block;
    }
    
    @media screen and (max-width: 1180px) {
        width: 100%;
        height: 100%;
    }
`;

const ContentBox = styled.div`
    height: auto;
    max-width: 100%;
    margin-left: 5rem;
    
    @media screen and (max-width: 1180px) {
        margin: 0 auto;
        margin-left: none;
    }
`;

const TextBox = styled.div`
    width: 500px;
    max-width: 100%;
    padding: 0 10px;
    font-family: "Noto Serif KR";

    h1 {
        color: #192a56;
        font-size: 50px;
        margin-bottom: 25px;
        width: 540px;
        text-transform: capitalize;
    }

    h5 {
        font-size: 25px;
        margin-bottom: 25px;
        letter-spacing: 2px;
        color: #06c;

        &:hover {
            text-decoration: underline;
        }
    }

    p {
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 1px;
        margin-bottom: 45px;
    }
`;

const CloseBtn = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    top: 0;
    right: 0;
    transition: 0.5s;
    z-index: 1;
    width: 45px;
    height: 45px;
    border-radius: 5px;
`