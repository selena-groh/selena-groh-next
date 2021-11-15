import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "../src/Link";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" enableColorOnDark>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/" color="inherit" underline="hover">
              Selena Groh
            </Link>
          </Typography>
          <Stack spacing={2} direction="row">
            <Link href="/projects" color="inherit" underline="hover">
              Projects
            </Link>
            <Link href="/contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
