import { Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleFormupdate from "./SimpleFormupdate";
import StepperForm from "./StepperForm";

// STYLED COMPONENTS
const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

export default function Aupdate() {
  return (
    <Container>
      <Stack spacing={3}>
        <SimpleCard>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Document Upload
          </Typography>
          <SimpleFormupdate />
        </SimpleCard>

        <SimpleCard title="stepper form"></SimpleCard>
      </Stack>
    </Container>
  );
}
