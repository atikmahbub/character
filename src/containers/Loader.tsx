import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/system";

const Layout = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Loader = () => {
  return (
    <Layout>
      <CircularProgress color="secondary" />
    </Layout>
  );
};

export default Loader;
