import * as React from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import MuiLink from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <footer>
      <Stack spacing={2} direction="row">
        <Typography variant="body">Selena Groh</Typography>
        <MuiLink href="mailto:contact@selenagroh.com">
          contact@selenagroh.com
        </MuiLink>{" "}
        <IconButton
          aria-label="Go to GitHub"
          href="https://github.com/selena-groh"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="Go to LinkedIn"
          href="https://www.linkedin.com/in/selena-groh/"
        >
          <LinkedInIcon />
        </IconButton>
      </Stack>
    </footer>
  );
}
