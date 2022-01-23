import { Fragment, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import AddTitle from "../../components/AddTitle";
import Loader from "../../containers/Loader";
import useMediaQuery from "@mui/material/useMediaQuery";
import Skeleton from "@mui/material/Skeleton";
import DetailsContainer from "./DetailsContainer";
import useApi from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

const StyledImage = styled("img")({
  borderRadius: 5,
});

const TicketDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const matches = useMediaQuery("(max-width:768px)");
  const { isLoading, data } = useApi(`${id}`);

  useEffect(() => {
    if (id) if (!Number.isInteger(parseInt(id))) return navigate("*");
  }, [id, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Fragment>
      <AddTitle title="Character Details" backButton />
      <Box
        display="flex"
        flexDirection={matches ? "column" : "row"}
        gap={2}
        alignItems="flex-start"
        mt={10}
      >
        {data ? (
          <StyledImage
            src={data?.image}
            alt="pic"
            width={matches ? "100%" : 450}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={450}
            height={300}
          />
        )}
        <DetailsContainer data={data} />
      </Box>
    </Fragment>
  );
};

export default TicketDetails;
