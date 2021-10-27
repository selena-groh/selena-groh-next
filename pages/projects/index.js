import { createClient } from "contentful";
import Link from "next/link";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "project" });

  return {
    props: {
      projects: res.items,
    },
  };
}

function Projects({ projects }) {
  return (
    <>
      <h1>Projects</h1>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} md={6} key={project.fields.slug}>
            <Card>
              <CardContent>
                {/* <CardMedia title="Your title" sx={{ marginBottom: "100%" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  > */}
                <Image
                  src={"https:" + project.fields.icon.fields.file.url}
                  width={
                    project.fields.icon.fields.file.details.image.width / 2
                  }
                  height={
                    project.fields.icon.fields.file.details.image.height / 2
                  }
                />
                {/* </div>
                </CardMedia> */}

                <Typography gutterBottom variant="h5" component="h5">
                  {project.fields.name}
                </Typography>
                <Typography gutterBottom variant="body2">
                  {project.fields.date}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {documentToReactComponents(project.fields.description)}
                </Typography>
                {project.fields.toolsUsed.map((tool) => (
                  <Typography gutterBottom variant="body2" key={tool}>
                    {tool}
                  </Typography>
                ))}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={project.fields.liveLink}
                >
                  See it
                </Button>
                <Button
                  size="small"
                  color="primary"
                  href={project.fields.gitHubLink}
                >
                  Code
                </Button>
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
