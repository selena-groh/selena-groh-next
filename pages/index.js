import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";

export default function Index() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Selena Groh's site
      </Typography>
      <Link href="/projects" color="secondary">
        Go to the projects page
      </Link>
    </Box>
  );
}
