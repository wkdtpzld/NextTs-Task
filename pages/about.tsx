import Image from 'next/image';
import styled from 'styled-components';
import Profile from "../public/myImage.jpg";

const About = () => {

    return (
        <AboutWrapper>
            <ContentBox>
                <Image src={Profile} width="400px" height="500px" alt="profile" />
                <TextBox>
                    <h1>About</h1>
                    <h5>FE Developer</h5>
                    <p>
                        Next.js를 사용하여
                        <br />
                        SSR을 적용
                        <br />
                        TypeScript, React-Query, Axios를 통한 통신
                        <br />
                        Styled-Component, MUI를 사용한 디자인
                        <br />
                        Recoil State Management 사용
                    </p>
                </TextBox>
            </ContentBox>
        </AboutWrapper>
    );
}

export default About;

const AboutWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 1200px) {
        width: 100%;
        height: auto;
        padding: 200px 0px;
    }
`;

const ContentBox = styled.div`
    height: auto;
    width: 1280px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    img {
        height: auto;
        max-width: 100%;
        border-radius: 15px;
    }
`;

const TextBox = styled.div`
    width: 450px;
    max-width: 100%;
    padding: 0 10px;

    h1 {
        color: #192a56;
        font-size: 80px;
        margin-bottom: 25px;
        text-transform: capitalize;
    }

    h5 {
        font-size: 25px;
        margin-bottom: 25px;
        letter-spacing: 2px;
    }

    p {
        color: #000A0F;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 1px;
        margin-bottom: 45px;
    }
`;