import { useQuery, dehydrate, QueryClient } from "react-query"
import { fetchStores } from "../apis/api";
import Box from '@mui/material/Box';
import styled from "styled-components";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";
const Home = () => {

  const { isLoading, data } = useQuery("stores", fetchStores);
  const isMobile = useMediaQuery("(max-width: 700px)");

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <Box
            sx={{
              padding: "20px",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Subject>
              <span>EAT </span>
              List
            </Subject>
            <Box
              sx={
                isMobile
                  ? {
                      display: "grid",
                      gridTemplateColumns: "repeat(2,1fr)",
                      gap: "20px",
                      paddingTop: "20px"
                    }
                  : {
                      display: "grid",
                      gridTemplateColumns: "repeat(4, 1fr)",
                      gap: "2rem",
                      marginTop: "2rem",
                      placeItems: "center",
                      alignItems: "center",
                      padding: "10px",
                    }
              }
            >
              {data?.map((item) => (
                <Item key={item.id}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width="250px"
                    height="250px"
                  />
                </Item>
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default Home

export async function getServerSideProps() {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery("stores", fetchStores);

    return {
        props: {
            dehydrateState: dehydrate(queryClient)
        }
    }
}

const Item = styled.div`
  display: block;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s ease;

  img {
    border-radius: 15px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Subject = styled.h1`
  font-size: 40px;
  margin-top: 6rem;

  span {
    font-weight: 700;
    color: #273c75;
  }
`;