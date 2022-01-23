import { Box, Stack, styled, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const DoubleColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

type Props = {
  data: any;
};

const DetailsContainer = ({ data }: Props) => {
  const [episode, setEpisodes] = useState<any[]>([]);

  const getEpisode = async (data: any) => {
    let response = await axios.all(data);
    setEpisodes(response);
  };

  useEffect(() => {
    const _promiseArray: any[] = [];
    if (data?.episode) {
      data?.episode.forEach((element: string, i: number) => {
        if (i < 5) {
          let response = axios.get(element);
          _promiseArray.push(response);
        }
      });
      getEpisode(_promiseArray);
    }
  }, [data?.episode]);

  return (
    <Stack
      spacing={1}
      p={1}
      sx={{ border: "1px solid #ebedeb", width: "100%", borderRadius: 3 }}
    >
      <Typography fontWeight={700} variant="h4">
        {data?.name}
      </Typography>
      <DoubleColumn>
        <Typography fontWeight={700} variant="subtitle2">
          Status:
        </Typography>
        <Typography variant="subtitle2">{data?.status}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="subtitle2">
          Species:
        </Typography>
        <Typography variant="subtitle2">{data?.species}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="subtitle2">
          Gender:
        </Typography>
        <Typography variant="subtitle2">{data?.gender}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="subtitle2">
          Last Known Location:
        </Typography>
        <Typography variant="subtitle2">{data?.location.name}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="subtitle2">
          Type:
        </Typography>
        <Typography variant="subtitle2">
          {data?.type ? data.type : "N/A"}
        </Typography>
      </DoubleColumn>
      <Stack>
        <Typography fontWeight={700} variant="subtitle2">
          Last Episode's:
        </Typography>
        <Stack pl={5} mt={0.5}>
          {episode.map(({ data }: any, i: number) => (
            <Typography
              color="#333"
              fontWeight={600}
              variant="subtitle2"
              key={i}
            >
              {data?.name}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsContainer;
