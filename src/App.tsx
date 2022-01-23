import * as React from "react";
import Container from "@mui/material/Container";
import { routes } from "./routes/routes";
import { Routes, Route } from "react-router-dom";
import { styled } from "@mui/system";
import Loader from "./containers/Loader";

const AppLayout = styled("div")({
  backgroundColor: "#D0E8FC",
});

const StyledContainer = styled(Container)({
  backgroundColor: "#fff",
  minHeight: "100vh",
  padding: 30,
});

export default function App() {
  return (
    <AppLayout>
      <StyledContainer maxWidth="lg">
        <React.Suspense fallback={<Loader />}>
          <Routes>
            {routes.map((item: any) => (
              <Route
                key={item.name}
                path={item.pathname}
                element={<item.component />}
              />
            ))}
          </Routes>
        </React.Suspense>
      </StyledContainer>
    </AppLayout>
  );
}
