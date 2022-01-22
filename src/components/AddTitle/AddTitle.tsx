import { Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

type TitleProps = {
  title: string;
  backButton?: boolean;
};

const AddTitle = ({ title, backButton }: TitleProps) => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Typography variant="h3" textAlign="center">
        {title}
      </Typography>
      {backButton && (
        <Box
          color="#40bd24"
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={1}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
          <Typography fontWeight={700} variant="caption" textAlign="center">
            Go Back
          </Typography>
        </Box>
      )}
    </Fragment>
  );
};

export default AddTitle;
