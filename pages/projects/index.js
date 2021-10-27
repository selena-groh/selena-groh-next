import { createClient } from "contentful";
import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "/src/Link";
import MuiLink from "@mui/material/Link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Stack from "@mui/material/Stack";

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => (
      <MuiLink href={node.data.uri}>{children}</MuiLink>
    ),
  },
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({
    content_type: "project",
    order: "-fields.dateCompleted",
  });

  return {
    props: {
      projects: res.items,
    },
  };
}

function Projects({ projects }) {
  return (
    <>
      <Typography variant="h1" component="h1">
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.fields.slug} display="flex">
            <Card
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <CardContent>
                <Stack spacing={1}>
                  <Image
                    src={"https:" + project.fields.icon.fields.file.url}
                    width={
                      project.fields.icon.fields.file.details.image.width / 2
                    }
                    height={
                      project.fields.icon.fields.file.details.image.height / 2
                    }
                    layout="responsive"
                  />
                  <Typography variant="h5" component="h2">
                    {project.fields.name}
                  </Typography>
                  <Typography variant="body2">{project.fields.date}</Typography>
                </Stack>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  component="div"
                >
                  {documentToReactComponents(
                    project.fields.description,
                    options
                  )}
                </Typography>
                <Box display="flex" flexWrap="wrap" gap={0.5}>
                  {project.fields.toolsUsed.map((tool) => (
                    <Chip
                      label={tool}
                      size="small"
                      variant="outlined"
                      key={tool}
                    />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                {project.fields.liveLink && (
                  <IconButton
                    aria-label="Open the project"
                    href={project.fields.liveLink}
                  >
                    <OpenInNewIcon />
                  </IconButton>
                )}
                {project.fields.gitHubLink && (
                  <IconButton
                    aria-label="Open the GitHub code"
                    href={project.fields.gitHubLink}
                  >
                    <GitHubIcon />
                  </IconButton>
                )}
                <Link
                  href={`/projects/${project.fields.slug}`}
                  key={project.fields.slug}
                >
                  <Button size="small" color="primary">
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Projects.title = "Projects";

export default Projects;
