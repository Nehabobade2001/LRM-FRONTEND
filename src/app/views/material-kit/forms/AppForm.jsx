import { Stack, Typography } from "@mui/material";
import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import SimpleForm from "./SimpleForm";
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

export default function AppForm() {
  return (
    <Container>
      
      {/* <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Form" }]} />
      </Box> */}

      <Stack spacing={3}>
        <SimpleCard>
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize:"20px",
              fontWeight:"bold"
            }}
          >
            Document Upload
          </Typography>
          <SimpleForm />
        </SimpleCard>

        <SimpleCard title="stepper form">{/* <StepperForm /> */}</SimpleCard>
      </Stack>
    </Container>
  );
}
