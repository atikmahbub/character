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
    <Paper elevation={1} sx={{ flex: "40%", borderRadius: 2 }}>
      <Stack direction="row">
        <img src={image} alt="pic" width={180} style={{ borderRadius: 4 }} />
        <Stack ml={1} p={0.4}>
          <Typography
            sx={{ cursor: "pointer", fontWeight: 700 }}
            variant="h5"
            onClick={() => handleTitleClick(id)}
          >
            {name}
          </Typography>
          <Box display="flex" alignItems="center" gap="10px">
            <Typography variant="caption">{species}</Typography>
            <Typography variant="caption">{gender}</Typography>
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
