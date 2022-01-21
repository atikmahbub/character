import { Paper, Stack, Typography, Box } from "@mui/material";
import moment from "moment";

type CardProps = {
  id: number;
  name: string;
  image: string;
  created: string;
  gender: string;
  species: string;
  handleTitleClick: (id: number) => void;
};

const CharacterCard = ({
  id,
  name,
  image,
  gender,
  species,
  created,
  handleTitleClick,
}: CardProps) => {
  return (
    <Paper elevation={1} sx={{ flex: "40%", padding: 2 }}>
      <Stack direction="row">
        <img src={image} alt="pic" width={150} />
        <Stack ml={1}>
          <Typography
            sx={{ cursor: "pointer" }}
            variant="h5"
            onClick={() => handleTitleClick(id)}
          >
            {name}
          </Typography>
          <Box display="flex" alignItems="center" gap="10px">
            <Typography variant="caption">{gender}</Typography>
            <Typography variant="caption">{species}</Typography>
          </Box>
          <Typography variant="caption">
            created: {moment(created).format("DD/MM/yyyy")}
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CharacterCard;
