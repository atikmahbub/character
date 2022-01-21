import CharacterCard from "../../components/Card";
import { Box } from "@mui/material";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  data: any[];
};

const DataContainer = ({ data }: Props) => {
  const navigate = useNavigate();
  const handleTitleClick = (id: number) => {
    navigate(`${id}`);
  };
  return (
    <Fragment>
      <Box
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={3}
        mt={10}
        mb={10}
      >
        {data?.map((item, i: number) => (
          <CharacterCard
            key={i}
            name={item.name}
            created={item.created}
            image={item.image}
            species={item.species}
            gender={item.gender}
            id={item.id}
            handleTitleClick={handleTitleClick}
          />
        ))}
      </Box>
    </Fragment>
  );
};

export default DataContainer;
