import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react"
import styled from "styled-components";

export default function NotFound() {

    const [time, setTime] = useState(5);
    const router = useRouter();
    const backToHome = useCallback(() => {
        setTimeout(() => {
            router.push("/")
        }, 4999);
        setInterval(() => {
            setTime(current => current - 1);
        }, 1000)
    }, [router]);
    
    useEffect(() => {
        backToHome();
    }, [backToHome]);

    return (
        <NotFoundWrapper>
            <h1>
                404 PAGE 
            </h1>
            <span>
                {time}초 뒤에 홈 화면으로 돌아갑니다.
            </span>
        </NotFoundWrapper>
    )
}

const NotFoundWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 3rem;
    }
    span {
        font-size: 25px;
        font-weight: 600;
    }
`