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
          {data?.episode
            .slice(0)
            .reverse()
            // eslint-disable-next-line array-callback-return
            .map((item: string, i: number) => {
              if (i < 5) {
                return (
                  <a
                    style={{ textDecoration: "none" }}
                    href={item}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <Typography
                      color="indigo"
                      fontWeight={600}
                      variant="subtitle2"
                    >
                      {i + 1}: {item}
                    </Typography>
                  </a>
                );
              }
            })}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default DetailsContainer;
