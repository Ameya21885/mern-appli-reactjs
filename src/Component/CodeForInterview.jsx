import * as React from "react";
import { Box, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Welcome from "../Assets/Images/welcome.jpg";

const Header = styled(Box)`
  margin: 50px;
`;

const Image = styled("img")({
  width: "50%",
  height: "50%",
});

const CodeForInterview = () => {
  return (
    <Header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Welcome,</Typography>
            <Typography variant="h4">To our basic CRUD Application.</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Image src={Welcome} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Header>
  );
};

export default CodeForInterview;
