import { Box, Stack, styled, Typography } from "@mui/material";

const DoubleColumn = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

type Props = {
  data: any;
};

const DetailsContainer = ({ data }: Props) => {
  return (
    <Stack spacing={1}>
      <Typography fontWeight={700} variant="h4">
        {data?.name}
      </Typography>
      <DoubleColumn>
        <Typography fontWeight={700} variant="caption">
          Status:
        </Typography>
        <Typography variant="caption">{data?.status}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="caption">
          Species:
        </Typography>
        <Typography variant="caption">{data?.species}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="caption">
          Gender:
        </Typography>
        <Typography variant="caption">{data?.gender}</Typography>
      </DoubleColumn>
      <DoubleColumn>
        <Typography fontWeight={700} variant="caption">
          Last Known Location:
        </Typography>
        <Typography variant="caption">{data?.location.name}</Typography>
      </DoubleColumn>
    </Stack>
  );
};

export default DetailsContainer;
