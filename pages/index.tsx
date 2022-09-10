import { useQuery, dehydrate, QueryClient } from "react-query"
import { fetchStores } from "../apis/api";
import Box from '@mui/material/Box';
import styled from "styled-components";
import { useMediaQuery } from "@material-ui/core";
import _ from 'lodash';
import { useRouter } from 'next/router';
import StoreList from "../components/store/StoreList";
import StoreDetail from "../components/store/StoreDetailCoponent";


const Home = () => {

  const { isLoading, data } = useQuery("stores", fetchStores);

  const isMobile = useMediaQuery("(max-width: 700px)");
  const router = useRouter();
  const storeId = router.query.id;
  const showDetailModal = !_.isNil(storeId);

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
              <span>EAT&nbsp;</span>
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
                <StoreList item={item} key={item.id} />
              ))}
            </Box>
          </Box>
          {showDetailModal && <StoreDetail id={storeId} />}
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

const Subject = styled.h1`
  font-size: 40px;
  margin-top: 6rem;

  span {
    font-weight: 700;
    color: #353b48;
  }
`;